import PaymentMethod from './PaymentMethod';

export default class DirectMethod extends PaymentMethod {

    /**
     * @param { string } bank 
     * @param { string } acount 
     */
    constructor( bank, acount ) {

        super();
        this.bank = bank;
        this.acount = acount;

    }
    getBank() {

        return this.bank;

    }
    getAcount() {

        return this.acount;

    }

}