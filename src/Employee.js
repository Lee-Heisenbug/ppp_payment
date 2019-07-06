import PaymentClassification from './PaymentClassification';
import PaymentSchedule from './PaymentSchedule';
import PaymentMethod from './PaymentMethod';
import UnionAffiliation from './UnionAffiliation';

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
       /**@type { UnionAffiliation } */
       this.af;

    }

    getName() {

        return this.name;

    }

    /**
     * @param { string } name 
     */
    setName( name ) {
    
        this.name = name;

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

    /**
     * @param { UnionAffiliation } af 
     */
    setAffiliation( af ) {

        this.af = af;

    }

    getAffiliation() {

        return this.af;

    }

}

export default Employee;