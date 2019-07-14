import ChangeEmployeeTransaction from './ChangeEmployeeTransaction';
import Employee from './Employee';

export default class ChangeMethodTransaction extends ChangeEmployeeTransaction {

    /**
     * @param { number } empId 
     */
    constructor( empId ) {

        super( empId );

    }
    /**
     * @param { Employee } e 
     */
    change( e ) {

        e.setMethod( this.getMethod() );

    }
    /**@virtual */
    getMethod(){}

}