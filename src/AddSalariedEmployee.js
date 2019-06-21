import AddEmployeeTransaction from './AddEmployeeTransaction';
import SalariedClassification from '../src/SalariedClassification';
import MonthlySchedule from '../src/MonthlySchedule';

class AddSalariedEmployee extends AddEmployeeTransaction {

    /**
     * @param { number } empid 
     * @param { string } name 
     * @param { string } addr 
     * @param { number } salary 
     */
    constructor( empid, name, addr, salary ) {

        super( empid, name, addr );
        this.salary = salary;

    }

    getClassification() {

        return new SalariedClassification( this.salary );

    }

    getSchedule() {

        return new MonthlySchedule();

    }

}

export default AddSalariedEmployee;