import TimeCardTransaction from '../src/TimeCardTransaction';
import AddHourlyEmployee from '../src/AddCommissionedEmployee';
import PayrollDataBase from '../src/PayrollDataBase';
import HourlyClassification from '../src/HourlyClassification';
import TimeCard from '../src/TimeCard';

test( 'able to add time card', () => {

    let empid = 2;
    let date = new Date( 2001, 10, 31 ).getMilliseconds;
    let hours = 8.0;
    let t = new AddHourlyEmployee( empid, 'Bill', 'Home', 15.25 );
    t.execute();

    let tct = new TimeCardTransaction( date, hours, empid );
    tct.execute();

    let e = PayrollDataBase.getEmployee( empid );
    let pc = e.getClassification();
    /**@type { HourlyClassification } */
    let hc = pc;

    /**@type { TimeCard } */
    let tc = hc.getTimeCard( date );
    expect( tc.getHours() ).toBe( hours );

} )