import { ApplicationService } from "@sap/cds";
import { EEntityName } from "../srv/utils/consts";
import { DataGen } from "../srv/utils/dataGen";

export class UserService extends ApplicationService {
  async init() {
    super.init();

    await this.addDummyData();
  }

  private async addDummyData(): Promise<void> {
    const user = DataGen.dummyUserGen();
    this.tx(
      { user: new cds["User"].Privileged() },
      // @ts-ignore
      async () => {
        await this.create(EEntityName.USER_ENTITY_NAME).entries(user);
      }
    );
  }
}
