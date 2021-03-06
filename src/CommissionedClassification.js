import SalesReceipt from './SalesReceipt';
import PaymentClassification from './PaymentClassification';

class CommissionedClassification extends PaymentClassification {

    constructor( salary, commissionRate ) {

        super();

        this.salary = salary;
        this.commissionRate = commissionRate;

        /**@type { Map< number, SalesReceipt >} */
        this.salesReceipts = new Map();

    }

    getSalary() {

        return this.salary;

    }

    getCommissionRate() {

        return this.commissionRate;

    }

    /**
     * @param { SalesReceipt } sr 
     */
    addSalesReceipt( sr ) {

        this.salesReceipts.set( sr.getDate(), sr );

    }

    /**
     * @param { number } date 
     */
    getSalesReceipt( date ) {

        return this.salesReceipts.get( date );

    }

}

export default CommissionedClassification;