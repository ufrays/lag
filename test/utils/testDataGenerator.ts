import { lag } from "../../srv/utils/schemaGen";
import { LagService as lagSrv } from "../../srv/utils/srvSchemaGen";

export class TestDataGenerator {
  public static generateUserOwnedShipModel(): lagSrv.IUserOwnedShipModelEntity[] {
    const result: lagSrv.IUserOwnedShipModelEntity[] =
      [
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "42ba3a56-7475-4545-a7c6-ec68b7164ae2",
          "modelUUID": "818efd47-b7c0-40a8-8aca-92eb7e260b1b",
          "name": "sub model1",
          "shipRank": lag.entities.ShipRank.T0,
          "flag": "dummy",
          "parentModelUUID": "9a17bb92-bc45-46c6-9372-0762ad7db15f"
        },
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "42ba3a56-7475-4545-a7c6-ec68b7164ae2",
          "modelUUID": "9a17bb92-bc45-46c6-9372-0762ad7db15f",
          "name": "dummy model",
          "shipRank": lag.entities.ShipRank.T0,
          "flag": "dummy",
          "parentModelUUID": ""
        },
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "42ba3a56-7475-4545-a7c6-ec68b7164ae2",
          "modelUUID": "c31193e8-7abe-42c2-9a0a-5385b2e01ad4",
          "name": "sub model2",
          "shipRank": lag.entities.ShipRank.T3,
          "flag": "dummy",
          "parentModelUUID": "9a17bb92-bc45-46c6-9372-0762ad7db15f"
        },
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "85669c26-b59c-46e5-8c46-e1d03097a385",
          "modelUUID": "02f55e1c-2111-4fe0-9556-64dde2787127",
          "name": "sub model1",
          "shipRank": lag.entities.ShipRank.T2,
          "flag": "dummy",
          "parentModelUUID": "122bc694-6ba2-4589-96ff-76f925d6dea2"
        },
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "85669c26-b59c-46e5-8c46-e1d03097a385",
          "modelUUID": "122bc694-6ba2-4589-96ff-76f925d6dea2",
          "name": "dummy model",
          "shipRank": lag.entities.ShipRank.T0,
          "flag": "dummy",
          "parentModelUUID": ""
        },
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "85669c26-b59c-46e5-8c46-e1d03097a385",
          "modelUUID": "3347d752-a2e9-49d6-a35c-1bd29d920d6b",
          "name": "sub model2",
          "shipRank": lag.entities.ShipRank.T3,
          "flag": "dummy",
          "parentModelUUID": "122bc694-6ba2-4589-96ff-76f925d6dea2"
        },
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "c718d6c8-1333-4f76-a4e2-d65a5994f2bc",
          "modelUUID": "19c212d1-b229-4d9d-a04c-dd958fc361ba",
          "name": "sub model1",
          "shipRank": lag.entities.ShipRank.T2,
          "flag": "dummy",
          "parentModelUUID": "9e352a60-c206-48a5-8704-9f966ccdf626"
        },
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "c718d6c8-1333-4f76-a4e2-d65a5994f2bc",
          "modelUUID": "53d3c96f-eca6-4606-9b47-cde4f73e8723",
          "name": "sub model2",
          "shipRank": lag.entities.ShipRank.T3,
          "flag": "dummy",
          "parentModelUUID": "9e352a60-c206-48a5-8704-9f966ccdf626"
        },
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "c718d6c8-1333-4f76-a4e2-d65a5994f2bc",
          "modelUUID": "9e352a60-c206-48a5-8704-9f966ccdf626",
          "name": "dummy model",
          "shipRank": lag.entities.ShipRank.T0,
          "flag": "dummy",
          "parentModelUUID": ""
        },
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "cd1b6ed5-fa6c-4e53-b262-128e08e2cd37",
          "modelUUID": "51f90348-0943-4a17-83be-65ebd58828de",
          "name": "sub model1",
          "shipRank": lag.entities.ShipRank.T2,
          "flag": "dummy",
          "parentModelUUID": "bfcadf21-44f5-4176-b2c8-b7469d35049b"
        },
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "cd1b6ed5-fa6c-4e53-b262-128e08e2cd37",
          "modelUUID": "bfcadf21-44f5-4176-b2c8-b7469d35049b",
          "name": "dummy model",
          "shipRank": lag.entities.ShipRank.T0,
          "flag": "dummy",
          "parentModelUUID": ""
        },
        {
          "createdAt": new Date(),
          "createdBy": "privileged",
          "modifiedAt": new Date(),
          "modifiedBy": "privileged",
          "userUUID": "cd1b6ed5-fa6c-4e53-b262-128e08e2cd37",
          "modelUUID": "d47e30c1-f92a-4caf-97a9-8a3904632841",
          "name": "sub model2",
          "shipRank": lag.entities.ShipRank.T3,
          "flag": "dummy",
          "parentModelUUID": "bfcadf21-44f5-4176-b2c8-b7469d35049b"
        }
      ];
    return result;
  }

}