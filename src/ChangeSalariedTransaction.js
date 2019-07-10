import ChangeClassificationTransaction from '../src/ChangeClassificationTransaction';
import SalariedClassification from './SalariedClassification';
import MonthlySchedule from './MonthlySchedule';

export default class ChangeSalariedTransaction extends ChangeClassificationTransaction {

    /**
     * @param { number } empId 
     * @param { number } salary 
     */
    constructor( empId, salary ) {

        super( empId );
        this.salary = salary;

    }
    getClassification() {

        return new SalariedClassification( this.salary );

    }
    getSchedule() {

        return new MonthlySchedule();

    }

}