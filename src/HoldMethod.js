import PaymentMethod from './PaymentMethod';
import PayCheck from './PayCheck';

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