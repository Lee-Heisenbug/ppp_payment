import ChangeMethodTransaction from "./ChangeMethodTransaction";
import HoldMethod from './HoldMethod';

export default class ChangeHoldTransaction extends ChangeMethodTransaction {

    /**
     * @param { number } empId 
     * @param { string } address 
     */
    constructor( empId, address ) {

        super( empId );
        this.address = address;

    }
    getMethod() {

        return new HoldMethod( this.address );

    }

}