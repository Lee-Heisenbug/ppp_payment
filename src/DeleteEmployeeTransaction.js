import Transaction from './Transaction';
import PayrollDataBase from './PayrollDataBase';

class DeleteEmployeeTransaction extends Transaction {

    /**
     * @param { number } empid 
     */
    constructor( empid ) {

        super();
        this.empid = empid;

    }

    execute() {

        PayrollDataBase.deleteEmployee( this.empid );

    }

}

export default DeleteEmployeeTransaction;