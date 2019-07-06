import Transaction from './Transaction';
import Employee from './Employee';
import PayrollDataBase from './PayrollDataBase';

export default class ChangeEmployeeTransaction extends Transaction {

    /**
     * @param { number } empId 
     */
    constructor( empId ) {

        super();
        this.empId = empId;

    }

    execute() {

        let e = PayrollDataBase.getEmployee( this.empId );
        this.change( e );

    }

    /**
     * @virtual
     * @param { Employee } employee 
     */
    change( employee ) {}

}