import PaymentClassification from './PaymentClassification';
import PaymentSchedule from './PaymentSchedule';
import PaymentMethod from './PaymentMethod';
import Affiliation from './Affiliation';
import NoAffiliation from './NoAffiliation';
import PayCheck from './PayCheck';

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
       this.classification;
       /**@type { PaymentSchedule } */
       this.paymentSchedule;
       /**@type { PaymentMethod } */
       this.paymentMethod;
       /**@type { Affiliation } */
       this.affiliation = new NoAffiliation();

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

    getAddress() {

        return this.addr;

    }

    /**
     * @param { string } addr 
     */
    setAddress( addr ) {

        this.addr = addr;

    }

    /**
     * @param { PaymentClassification } pc 
     */
    setClassification( pc ) {

        this.classification = pc;

    }

    getClassification() {

        return this.classification;

    }

    /**
     * @param { PaymentSchedule } ps 
     */
    setSchedule( ps ) {

        this.paymentSchedule = ps;

    }

    getSchedule() {

        return this.paymentSchedule;

    }

    /**
     * @param { PaymentMethod } pm 
     */
    setMethod( pm ) {

        this.paymentMethod = pm;

    }

    getMethod() {

        return this.paymentMethod;

    }

    /**
     * @param { UnionAffiliation } af 
     */
    setAffiliation( af ) {

        this.affiliation = af;

    }

    getAffiliation() {

        return this.affiliation;

    }

    getEmployeeId() {

        return this.empid;

    }

    /**
     * @param { PayCheck } pc 
     */
    payDay( pc ) {

        let grossPay = this.classification.calculatePay();
        let deductions = this.affiliation.calculateDeductions();
        let netPay = grossPay - deductions;

        pc.setGrossPay( grossPay );
        pc.setDeductions( deductions );
        pc.setNetPay( netPay );

        this.paymentMethod.pay( pc );

    }

    /**
     * @param { number } date 
     */
    isPayDate( date ) {

        return this.paymentSchedule.isPayday( date );

    }

}

export default Employee;