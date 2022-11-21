import { ApplicationService } from "@sap/cds";
import { EEntityName } from "./utils/consts";
import { DataGen } from "./utils/dataGen";
import { lag } from "./utils/schemaGen";

export class LagService extends ApplicationService {
  async init() {
    await super.init();
    this.on("getDummyData", this.dataGen.bind(this));
    // await this.dataGen(null);
    this.before("CREATE", EEntityName.ACTIVITY_ENTITY_NAME, this.countAvaiableUsers.bind(this));
  }

  private async  countAvaiableUsers (req: Request) {

    try {
       const activieUserUUIDs:[] =   await this.read(EEntityName.USER_ENTITY_NAME).where({
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
    const userOwnShips:lag.entities.IUserOwnedShipModel[] = [];
    shipModels.forEach((shipModel)=> { 
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
