import { ApplicationService } from "@sap/cds";
import { EEntityName } from "./utils/consts";
import { DataGen } from "./utils/dataGen";
import { lag, LagService as lagSrv } from "./utils/srvSchemaGen";

export class LagService extends ApplicationService {
  async init() {
    await super.init();
    this.on("getDummyData", this.dataGen.bind(this));
    this.on("getUserOwnedShips", this.getUserOwnedShips.bind(this));
    // await this.dataGen(null);
    this.before("CREATE", EEntityName.ACTIVITY_ENTITY_NAME, this.countAvaiableUsers.bind(this));
  }

  private async getUserOwnedShips(req: Request): Promise<Set<lagSrv.IUserOwnedShips>> {

    const userUUID: string = req["data"]?.userUUID;
    if (!userUUID) {
      new Error("User UUID is missing when loading user owned ships");
    }
    const userOwnedShips: Set<lagSrv.IUserOwnedShips> = new Set();

    // load raw data from DB.
    const rawResults: lagSrv.IUserOwnedShipModelEntity[] = await this.read(EEntityName.USER_OWNED_SHIP_ENTITY_NAME).where({ userUUID: userUUID });
    //  const subModels: lagSrv.IUserOwnedShipModelEntity[] = [];
    // const parentModels =  rawResults.map((result) => {
    //   if (result.parentModelUUID !== "") {
    //     const ownedParentModel: lagSrv.IUserOwnedShips = {
    //       name: result.name,
    //       shipRank: result.shipRank,
    //       flag: result.flag,
    //       subModelNames: []
    //     };
    //     return [result.modelUUID, ownedParentModel];
    //   }
    // });

    // get parent ship model.
    rawResults.forEach(ship => {
      if (ship.parentModelUUID === "") {
        userOwnedShips.add({
          modelUUID: ship.modelUUID,
          name: ship.name,
          shipRank: ship.shipRank,
          flag: ship.flag,
          subModelNames: []
        });
      }
    });
    // adding sub model info
    rawResults.forEach(ship => {
      if (ship.parentModelUUID !== "") {
        userOwnedShips.forEach(ownedModel => {
          if (ship.parentModelUUID === ownedModel.modelUUID) {
            ownedModel.subModelNames.push(ship.name);
          }
        })
      }
    });

    return userOwnedShips;

  }
  private async countAvaiableUsers(req: Request) {

    try {
      const activieUserUUIDs: [] = await this.read(EEntityName.USER_ENTITY_NAME).where({
        isActive: true
      }).columns("uuid");
      req["data"].availableUsers = activieUserUUIDs?.length;
      const xx = req.body;
    } catch (error) {
      console.error(error);
    }

  }

  private async dataGen(req: any): Promise<string> {
    const user = DataGen.dummyUserGen();
    const shipModels = DataGen.dummyShipModelGen();
    const activity = DataGen.dummyActivityGen();
    const userAtt = DataGen.activityAddtendeesGen(user.uuid, activity.uuid);
    const userOwnShips: lag.entities.IUserOwnedShipModel[] = [];
    shipModels.forEach((shipModel) => {
      userOwnShips.push(DataGen.dummyOwnedModelsGen(user.uuid, shipModel.uuid));
    });
    try {
      await this.tx(
        // @ts-ignore
        { user: new cds["User"].Privileged() },
        // @ts-ignore
        async () => {
          console.log("start writting dummy data");
          await this.create(EEntityName.USER_ENTITY_NAME).entries(user);
          await this.create(EEntityName.SHIP_MODEL_ENTITY_NAME).entries(shipModels);
          await this.create(EEntityName.ACTIVITY_ENTITY_NAME).entries(activity);
          await this.create(EEntityName.USER_PARTICIPANT_ENTITY_NAME).entries(userAtt);
          await this.create(EEntityName.USER_OWNED_SHIP_ENTITY_NAME).entries(userOwnShips);
        }
      );
      return "done";
    } catch (error) {
      console.error(error);
      return "error"
    }

  }
}
