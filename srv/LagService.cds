using {
  lag.entities.User,
  lag.entities.UserOwnedShipModel,
  lag.entities.UserParticipantActivity,
  lag.entities.Activity,
  lag.entities.ShipModel,
  lag.entities.ShipSubModel,
  lag.entities.ShipRank
} from '../db/schema';


service LagService {
  entity UserEntity                    as projection on User;
  entity UserOwnedShipModelEntity      as projection on UserOwnedShipModel;
  entity UserParticipantActivityEntity as projection on UserParticipantActivity;
  entity ActivityEnity                 as projection on Activity;
  entity ShipModelEntity               as projection on ShipModel;
  entity ShipSubModelEntity            as projection on ShipSubModel;

  function getDummyData() returns String;
}
