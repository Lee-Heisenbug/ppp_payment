import ChangeEmployeeTransaction from "./ChangeEmployeeTransaction";
import Employee from './Employee';

export default class ChangeAddressTransaction extends ChangeEmployeeTransaction {

    /**
     * @param { number } empId 
     * @param { string } address 
     */
    constructor( empId, address ) {

        super( empId );
        this.address = address;

    }
    /**
     * @param { Employee } e 
     */
    change( e ) {

        e.setAddress( this.address );

    }

}