import ChangeClassificationTransaction from '../src/ChangeClassificationTransaction';
import CommissionedClassification from './CommissionedClassification';
import BiWeeklySchedule from './BiWeeklySchedule';

export default class ChangeSalariedTransaction extends ChangeClassificationTransaction {

    /**
     * @param { number } empId 
     * @param { number } salary 
     * @param { number } commissionRate 
     */
    constructor( empId, salary, commissionRate ) {

        super( empId );
        this.salary = salary;
        this.commissionRate = commissionRate;

    }
    getClassification() {

        return new CommissionedClassification( this.salary, this.commissionRate );

    }
    getSchedule() {

        return new BiWeeklySchedule();

    }

}