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

        this.recordMembership( e );
        e.setAffiliation( this.getAffiliation() );

    }
    /**@type { Affiliation } */
    getAffiliation() {}
    /**
     * @virtual
     * @param { Employee } e
     */
    recordMembership( e ) {}

}