import cds from "@sap/cds";
import path from "path";
import { LagService } from "../srv/LagService";
import { TestDataGenerator } from "./utils/testDataGenerator";

describe("Lag Service Test", () => {

  let lagService: LagService;
  const server = cds.test(path.join(__dirname, ".."));

  beforeAll(async () => {
    lagService = await cds.connect.to("LagService") as LagService;
  });

  it("Should able to get user owned ships with correct format", async () => {

    const dummyData = TestDataGenerator.generateUserOwnedShipModel();
    //@ts-ignore for private method
    jest.spyOn(lagService, "loadUserOwnedShipsData").mockImplementationOnce(() => { return dummyData; });
    //@ts-ignore for private method
    const results = await lagService.getUserOwnedShips("42ba3a56-7475-4545-a7c6-ec68b7164ae2");
    expect(results.length).toBe(4);

    results.forEach(r => {
      expect(r.subModelNames.length).toBe(2);
    });

  });

});