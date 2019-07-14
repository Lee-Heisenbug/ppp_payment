import PaymentMethod from './PaymentMethod';

class HoldMethod extends PaymentMethod {

    /**
     * @param { string } address 
     */
    constructor( address ) {

        super();
        this.address = address || '';

    }
    getAddress() {

        return this.address;

    }

}

export default HoldMethod;