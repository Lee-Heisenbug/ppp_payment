import PayCheck from './PayCheck';

export default class PaymentMethod {
    
    constructor() {}
    /**
     * @virtual
     * @param { PayCheck } pc
     */
    pay( pc ) {};

}