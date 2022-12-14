import { v4 } from "uuid";
import { lag } from "./schemaGen";

export class DataGen {
  public static dummyUserGen(): lag.entities.IUser {
    const user: lag.entities.IUser = {
      uuid: v4(),
      name: "dummy-name" + v4(),
      description: "test desc",
      historyNames: "dummy history name, dummy 2",
      isActive: true,
      leaveDate: new Date(),
      role: "admin",
      password: "test"
    };
    return user;
  }

  public static dummyShipModelGen(): lag.entities.IShipModel[] {
    const modelUUID = v4();

    const subModels : lag.entities.IShipModel[] = [
      {
        uuid: modelUUID,
        name: "dummy model",
        flag: "dummy",
        picture: Buffer.from(""),
        shipRank: lag.entities.ShipRank.T0,
        parentModelUUID : ""
        
      },
      {
        uuid: v4(),
        parentModelUUID: modelUUID,
        name: "sub model1",
        flag: "dummy",
        picture: Buffer.from(""),
        shipRank: lag.entities.ShipRank.T2,
      },
      {
        uuid: v4(),
        parentModelUUID: modelUUID,
        name: "sub model2",
        flag: "dummy",
        picture: Buffer.from(""),
        shipRank: lag.entities.ShipRank.T3
      }
    ];
    return subModels;
  }

  public static dummyOwnedModelsGen(userUUID: string, modelUUID: string): lag.entities.IUserOwnedShipModel {
    return {
      userUUID: userUUID,
      modelUUID: modelUUID
    }
  }

  public static dummyActivityGen(): lag.entities.IActivity {
    const activity: lag.entities.IActivity = {
      uuid: v4(),
      datetime: new Date(),
      description: "test Activity",
      participantRate: 0,
      availableUsers: 0,
      activityType : lag.entities.ActivityType.GC
    };
    return activity;
  }

  public static activityAddtendeesGen(userUUID: string, activityUUID: string): lag.entities.IUserParticipantActivity {
    return {
      userUUID: userUUID,
      activityUUID: activityUUID,
      participantType : lag.entities.ParticipantType.YD
    }
  }
}
