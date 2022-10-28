import { ApplicationService } from "@sap/cds";
import { EEntityName } from "../srv/utils/consts";
import { DataGen } from "../srv/utils/dataGen";

export class ShipService extends ApplicationService {
  async init() {
    super.init();

    await this.addDummyData();
  }

  private async addDummyData(): Promise<void> {
    const ShipModel = DataGen.dummyShipModelGen();

    this.tx(
      { user: new cds["User"].Privileged() },
      // @ts-ignore
      async () => {
        await this.create(EEntityName.SHIP_MODEL_ENTITY_NAME).entries(ShipModel);
      }
    );
  }
}
