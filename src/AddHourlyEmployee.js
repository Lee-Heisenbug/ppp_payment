import AddEmployeeTransaction from './AddEmployeeTransaction';
import HourlyClassification from './HourlyClassification';
import WeeklySchedule from './WeeklySchedule';

class AddHourlyEmployee extends AddEmployeeTransaction {

    /**
     * @param { number } empid 
     * @param { string } name 
     * @param { string } addr 
     * @param { number } hourlyRate 
     */
    constructor( empid, name, addr, hourlyRate ) {

        super( empid, name, addr );
        this.hourlyRate = hourlyRate;

    }

    getClassification() {

        return new HourlyClassification( this.hourlyRate );

    }

    getSchedule() {

        return new WeeklySchedule();

    }

}

export default AddHourlyEmployee;