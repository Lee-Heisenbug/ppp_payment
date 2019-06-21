import Transaction from './Transaction';
import PaymentClassification from './PaymentClassification';
import PaymentSchedule from './PaymentSchedule';
import GpayrollDataBase from './PayrollDataBase';
import Employee from './Employee';
import HoldMethod from './HoldMethod';

/**
 * @class
 * @abstract
 */
class AddEmployeeTransaction extends Transaction {

    /**
     * @param { number } empid 
     * @param { string } name 
     * @param { string } address 
     */
    constructor( empid, name, address ) {

        super();
        
        /**@type { number } */
        this.empid = empid;
        /**@type { string } */
        this.address = address;
        /**@type { string } */
        this.name = name;

    }

    /**
     * @virtual
     * @returns { PaymentClassification }
     */
    getClassification() {}

    /**
     * @virtual
     * @returns { PaymentSchedule }
     */
    getSchedule() {}

    execute() {

        let pc = this.getClassification();
        let ps = this.getSchedule();
        let pm = new HoldMethod();
        let e = new Employee( this.empid, this.name, this.address );

        e.setClassification( pc );
        e.setSchedule( ps );
        e.setMethod( pm );

        GpayrollDataBase.addEmployee( this.empid, e );

    }

}

export default AddEmployeeTransaction;