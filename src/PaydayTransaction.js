import Transaction from './Transaction';
import PayrollDataBase from './PayrollDataBase';
import Employee from './Employee';
import PayCheck from './PayCheck';

export default class PaydayTransaction extends Transaction {

    constructor( payDate ) {
        
        super();
        this.payDate = payDate;
        /**@type { Map< number, PayCheck > } */
        this.payChecks = new Map();

    }
    execute() {

        let self = this;

        let empIds = PayrollDataBase.getAllEmployeeIds();

        empIds.forEach( ( empId ) => {

            let e = PayrollDataBase.getEmployee( empId );
            
            self.payEmployee( e );

        } )

    }
    /**
     * @param { Employee } e 
     */
    payEmployee( e ) {

        if( e.isPayDate( this.payDate ) ) {

            let pc = new PayCheck( this.payDate );
            this.payChecks.set( e.getEmployeeId(), pc );
            e.payDay( pc );

        }

    }
    /**
     * @param { number } empId 
     */
    getPayCheck( empId ) {

        let pc = this.payChecks.get( empId ) || 0;

        return pc;

    }

}