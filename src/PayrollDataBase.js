import Employee from './Employee';

class PayrollDataBase {

    constructor() {

        this.employees = new Map();

    }

    /**
     * @param { number } empid
     * @param { Employee } e 
     */
    addEmployee( empid, e ) {

        this.employees.set( empid, e );

    }

    /**
     * @param { number } empid 
     */
    getEmployee( empid ) {

        return this.employees.get( empid ) || 0;

    }

    /**
     * @param { number } empid 
     */
    deleteEmployee( empid ) {

        this.employees.delete( empid );

    } 

}

let GpayrollDataBase = new PayrollDataBase();

export default GpayrollDataBase;