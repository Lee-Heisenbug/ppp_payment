import Transaction from './Transaction';
import PayrollDataBase from './PayrollDataBase';
import CommissionedClassification from './CommissionedClassification';
import SalesReceipt from './SalesReceipt';

export default class SalesReceiptTransaction extends Transaction {

    /**
     * @param { number } date 
     * @param { number } amount 
     * @param { number } empid 
     */
    constructor( date, amount, empid ) {

        super();
        this.date = date;
        this.amount = amount;
        this.empid = empid;

    }

    execute() {

        let e = PayrollDataBase.getEmployee( this.empid );

        let pc = e.getClassification();

        /**@type { CommissionedClassification } */
        let cc = pc;

        let sr = new SalesReceipt( this.date, this.amount );

        cc.addSalesReceipt( sr );

    }

}