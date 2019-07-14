import ChangeMethodTransaction from "./ChangeMethodTransaction";
import MailMethod from './MailMethod';

export default class ChangeMailTransaction extends ChangeMethodTransaction {

    /**
     * @param { number } empId 
     * @param { string } address 
     */
    constructor( empId, address ) {

        super( empId );
        this.address = address;

    }
    getMethod() {

        return new MailMethod( this.address );

    }

}