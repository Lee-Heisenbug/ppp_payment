import Employee from './Employee';
import UnionAffiliation from './UnionAffiliation';
import ChangeAffiliationTransaction from './ChangeAffiliationTransaction';
import PayrollDataBase from './PayrollDataBase';

export default class ChangeMemberTransaction extends ChangeAffiliationTransaction {

    /**
     * @param { number } empId 
     * @param { number } memberId 
     * @param { number } dues 
     */
    constructor( empId, memberId, dues ) {

        super( empId );
        this.memberId = memberId;
        this.dues = dues;

    }
    getAffiliation() {

        return new UnionAffiliation( this.memberId, this.dues );

    }
    /**
     * @param { Employee } e 
     */
    recordMembership( e ) {

        PayrollDataBase.addUnionMember( this.memberId, e );

    }

}