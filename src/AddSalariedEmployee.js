import AddEmployeeTransaction from './AddEmployeeTransaction';

class AddSalariedEmployee extends AddEmployeeTransaction {

    /**
     * @param { number } empid 
     * @param { string } name 
     * @param { string } addr 
     * @param { number } salary 
     */
    constructor( empid, name, addr, salary ) {

        super( empid, name, addr );

    }

}

export default AddSalariedEmployee;