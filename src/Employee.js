import PaymentClassification from './PaymentClassification';
import PaymentSchedule from './PaymentSchedule';
import PaymentMethod from './PaymentMethod';

class Employee {

    /**
     * @param { number } empid 
     * @param { string } name 
     * @param { string } addr 
     */
    constructor( empid, name, addr ) {

       this.empid = empid;
       this.name = name;
       this.addr = addr;
       /**@type { PaymentClassification } */
       this.pc;
       /**@type { PaymentSchedule } */
       this.ps;
       /**@type { PaymentMethod } */
       this.pm;

    }

    getName() {

        return this.name;

    }

    /**
     * @param { PaymentClassification } pc 
     */
    setClassification( pc ) {

        this.pc = pc;

    }

    getClassification() {

        return this.pc;

    }

    /**
     * @param { PaymentSchedule } ps 
     */
    setSchedule( ps ) {

        this.ps = ps;

    }

    getSchedule() {

        return this.ps;

    }

    /**
     * @param { PaymentMethod } pm 
     */
    setMethod( pm ) {

        this.pm = pm;

    }

    getMethod() {

        return this.pm;

    }

}

export default Employee;