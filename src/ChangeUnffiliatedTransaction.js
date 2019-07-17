import ChangeAffiliationTransaction from './ChangeAffiliationTransaction';
import NoAffiliation from './NoAffiliation';
import PayrollDataBase from './PayrollDataBase';
import UnionAffiliation from './UnionAffiliation';

export default class ChangeUnffiliatedTransaction extends ChangeAffiliationTransaction {

    /**
     * @param { number } empId 
     */
    constructor( empId ) {

        super( empId );

    }
    getAffiliation() {

        return new NoAffiliation();

    }
    recordMembership( e ) {

        /**@type { UnionAffiliation } */
        let af = e.getAffiliation();

        PayrollDataBase.removeUnionMember( af.getMemberId() );

    }

}