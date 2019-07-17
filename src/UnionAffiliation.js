import ServiceCharge from './ServiceCharge';

export default class UnionAffiliation {

    /**
     * @param { number } memberId 
     * @param { number } dues
     */
    constructor( memberId, dues ) {

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

}