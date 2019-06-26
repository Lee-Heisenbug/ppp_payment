import Transaction from './Transaction';
import PayrollDataBase from '../src/PayrollDataBase';
import HourlyClassification from '../src/HourlyClassification';
import TimeCard from '../src/TimeCard';

class TimeCardTransaction extends Transaction {

    /**
     * @param { number } date 
     * @param { number } hours 
     * @param { number } empid 
     */
    constructor( date, hours, empid ) {

        super();
        this.date = date;
        this.hours = hours;
        this.empid = empid;

    }

    execute() {

        let e = PayrollDataBase.getEmployee( this.empid );
        /**@type { HourlyClassification } */
        let hc = e.getClassification();
        let tc = new TimeCard( this.date, this.hours );
        hc.addTimeCard( tc );

    }

}

export default TimeCardTransaction;