import { ApplicationService } from "@sap/cds";
import { DataGen } from "../srv/utils/dataGen";

export class ActivityService extends ApplicationService {
  async init() {
    super.init();

    await this.addDummyData();
  }

  private async addDummyData(): Promise<void> {
    const activity = DataGen.dummyActivityGen();

    this.tx(
      { user: new cds["User"].Privileged() },
      // @ts-ignore
      async () => {
        // await this.create(EEntityName.ACTIVITY_ENTITY_NAME).entries(activity);
      }
    );
  }
}
