import ServiceCharge from './ServiceCharge';

export default class UnionAffiliation {

    /**
     * @param { number } memberId 
     */
    constructor( memberId ) {

        this.memberId = memberId;
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

}