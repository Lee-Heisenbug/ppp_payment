import ServiceCharge from './ServiceCharge';
import Affiliation from './Affiliation';

export default class UnionAffiliation extends Affiliation {

    /**
     * @param { number } memberId 
     * @param { number } dues
     */
    constructor( memberId, dues ) {

        super();
        this.memberId = memberId;
        this.dues = dues;
        /**@type { Map< number, ServiceCharge > } */
        this.serviceCharges = new Map();

    }

    /**
     * @param { number } date 
     */
    getServiceCharge( date ) {

        return this.serviceCharges.get( date );

    }

    addServiceCharge( sc ) {

        this.serviceCharges.set( sc.getDate(), sc );

    }
    getDues() {

        return this.dues;
        
    }
    getMemberId() {

        return this.memberId;

    }

}