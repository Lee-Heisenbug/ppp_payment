import Employee from './Employee';

class PayrollDataBase {

    constructor() {

        /**@type { Map< number, Employee > } */
        this.employees = new Map();
        /**@type { Map< number, Employee > } */
        this.unionMembers = new Map();

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

    /**
     * @param { number } memberId 
     * @param { Employee } e 
     */
    addUnionMember( memberId, e ) {

        this.unionMembers.set( memberId, e );

    }

    /**
     * @param { number } memberId 
     */
    getUnionMember( memberId ) {

        return this.unionMembers.get( memberId );

    }

    /**
     * @param { number } memberId 
     */
    removeUnionMember( memberId ) {

        this.unionMembers.delete( memberId );

    }


}

let GpayrollDataBase = new PayrollDataBase();

export default GpayrollDataBase;