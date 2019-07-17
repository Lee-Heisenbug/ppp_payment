import ChangeEmployeeTransaction from './ChangeEmployeeTransaction';
import Employee from './Employee';

export default class ChangeAffiliationTransaction extends ChangeEmployeeTransaction {

    constructor( empId ) {

        super( empId );

    }
    /**
     * @param { Employee } e 
     */
    change( e ) {

        e.setAffiliation( this.getAffiliation() );
        this.recordMembership( e );

    }
    /**
     * @virtual
     * @param { Employee } e
     */
    recordMembership( e ) {}

}