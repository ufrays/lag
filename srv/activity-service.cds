using {lag.entities.Activity} from '../db/schema';


service ActivityService {

    entity ActivityEntity as projection on Activity;

}
