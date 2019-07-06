import AddEmployeeTransaction from './AddEmployeeTransaction';
import CommissionedClassification from './CommissionedClassification';
import BiWeeklySchedule from './BiWeeklySchedule';

class AddCommissionedEmployee extends AddEmployeeTransaction {

    /**
     * @param { number } empid 
     * @param { string } name 
     * @param { string } addr 
     * @param { number } salary 
     * @param { number } commissionRate 
     */
    constructor( empid, name, addr, salary, commissionRate ) {

        super( empid, name, addr );
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

export default AddCommissionedEmployee;