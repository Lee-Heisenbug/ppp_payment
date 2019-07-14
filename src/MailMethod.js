import PaymentMethod from './PaymentMethod';

export default class MailMethod extends PaymentMethod {

    /**
     * @param { string } address
     */
    constructor( address ) {

        super();
        this.address = address;

    }
    getAddress() {

        return this.address;

    }

}