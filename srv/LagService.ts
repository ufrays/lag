import { ApplicationService } from "@sap/cds";
import { EEntityName } from "./utils/consts";
import { DataGen } from "./utils/dataGen";

export class LagService extends ApplicationService {
  async init() {
    await super.init();
    this.on("getDummyData", this.dataGen);
    // await this.dataGen(null);
  }

  private async dataGen(req: any): Promise<string> {
    const user = DataGen.dummyUserGen();
    const shipModel = DataGen.dummyShipModelGen();
    const activity = DataGen.dummyActivityGen();
    const userAtt = DataGen.activityAddtendeesGen(user.uuid, activity.uuid);
    const userShip = DataGen.dummyOwnedModelsGen(user.uuid, shipModel.uuid);
    try {
      this.tx(
        // @ts-ignore
        { user: new cds["User"].Privileged() },
        // @ts-ignore
        async () => {
          console.log("start writting dummy data");
          await this.create(EEntityName.USER_ENTITY_NAME).entries(user);
          await this.create(EEntityName.SHIP_MODEL_ENTITY_NAME).entries(shipModel);
          await this.create(EEntityName.ACTIVITY_ENTITY_NAME).entries(activity);
          await this.create(EEntityName.USER_PARTICIPANT_ENTITY_NAME).entries(userAtt);
          await this.create(EEntityName.USER_OWNED_SHIP_ENTITY_NAME).entries(userShip);
        }
      );
      return "done";
    } catch (error) {
      console.error(error);
      return "error"
    }

  }
}
