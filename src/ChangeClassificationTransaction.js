import ChangeEmployeeTransaction from './ChangeEmployeeTransaction';
import Employee from './Employee';
import PaymentSchedule from './PaymentSchedule';
import PaymentClassification from './PaymentClassification';

export default class ChangeClassificationTransaction extends ChangeEmployeeTransaction {

    /**
     * @param { number } empId 
     */
    constructor( empId ) {

        super( empId );

    }
    /**
     * @param { Employee } e 
     */
    change( e ) {

        e.setClassification( this.getClassification() );
        e.setSchedule( this.getSchedule() );

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

}