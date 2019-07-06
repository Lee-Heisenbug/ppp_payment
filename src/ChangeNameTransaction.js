import ChangeEmployeeTransaction from "./ChangeEmployeeTransaction";
import Employee from './Employee';

export default class ChangeNameTransaction extends ChangeEmployeeTransaction {

    /**
     * @param { number } empId 
     * @param { string } name 
     */
    constructor( empId, name ) {

        super( empId );
        this.name = name;

    }
    /**
     * @param { Employee } e 
     */
    change( e ) {

        e.setName( this.name );

    }

}