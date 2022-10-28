using {
  lag.entities.ShipModel,
  lag.entities.ShipSubModel,
} from '../db/schema';


service ShipService {
  entity ShipModelEntity    as projection on ShipModel;
  entity ShipSubModelEntity as projection on ShipSubModel;
}
