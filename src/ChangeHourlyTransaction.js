import ChangeClassificationTransaction from '../src/ChangeClassificationTransaction';
import HourlyClassification from './HourlyClassification';
import WeeklySchedule from './WeeklySchedule';

export default class ChangeHourlyTransaction extends ChangeClassificationTransaction {

    /**
     * @param { number } empId 
     * @param { number } hourlyRate 
     */
    constructor( empId, hourlyRate ) {

        super( empId );
        this.hourlyRate = hourlyRate;

    }
    getClassification() {

        return new HourlyClassification( this.hourlyRate );

    }
    getSchedule() {

        return new WeeklySchedule();

    }

}