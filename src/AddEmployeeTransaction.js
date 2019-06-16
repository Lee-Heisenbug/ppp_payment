import Transaction from './Transaction';

/**
 * @class
 * @abstract
 */
class AddEmployeeTransaction extends Transaction {

    /**
     * @param { number } empid 
     * @param { string } name 
     * @param { string } address 
     */
    constructor( empid, name, address ) {

        super();
        
        /**@type { number } */
        this.empid = empid;
        /**@type { string } */
        this.address = address;
        /**@type { string } */
        this.name = name;

    }

}

export default AddEmployeeTransaction;