import { v4 } from "uuid";
import { lag } from "./schemaGen";

export class DataGen {
  public static dummyUserGen(): lag.entities.IUser {
    const user: lag.entities.IUser = {
      uuid: v4(),
      name: "dummy-name",
      description: "",
      historyNames: "",
      isActive: false,
      leaveDate: new Date(),
      role: "",
      password: "test"
    };
    return user;
  }

  public static dummyShipModelGen(): lag.entities.IShipModel {
    const modelUUID = v4();
    const ShipModel: lag.entities.IShipModel = {
      uuid: modelUUID,
      name: "dummy model",
      flag: "dummy",
      picture: Buffer.from(""),
      shipRank: lag.entities.ShipRank.T0,
      subModels: [
        {
          uuid: v4(),
          parentModelUUID: modelUUID,
          name: "dummy model",
          flag: "dummy",
          picture: Buffer.from(""),
          shipRank: lag.entities.ShipRank.T0
        }
      ]
    };
    return ShipModel;
  }

  public static dummyActivityGen(): lag.entities.IActivity {
    const activity: lag.entities.IActivity = {
      uuid: v4(),
      datetime: new Date(),
      description: "test Activity",
      participantRate: 0
    };
    return activity;
  }
}
