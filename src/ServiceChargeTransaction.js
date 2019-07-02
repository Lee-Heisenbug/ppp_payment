import Transaction from './Transaction';
import PayrollDataBase from './PayrollDataBase';
import UnionAffiliation from './UnionAffiliation';
import ServiceCharge from './ServiceCharge';

export default class ServiceChargeTransaction extends Transaction {

    /**
     * @param { number } memberId 
     * @param { number } date 
     * @param { number } charge 
     */
    constructor( memberId, date, charge ) {

        super();
        this.memberId = memberId;
        this.date = date;
        this.charge = charge;

    }
    execute() {

        let e = PayrollDataBase.getUnionMember( this.memberId );
        /**@type { UnionAffiliation } */
        let uaf = e.getAffiliation();
        let sc = new ServiceCharge( this.date, this.charge );
        uaf.addServiceCharge( sc );

    }

}