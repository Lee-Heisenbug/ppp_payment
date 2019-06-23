import AddHourlyEmployee from '../src/AddHourlyEmployee';
import PaymentClassification from '../src/PaymentClassification';
import PaymentSchedule from '../src/PaymentSchedule';
import PaymentMethod from '../src/PaymentMethod';
import HourlyClassification from '../src/HourlyClassification';
import WeeklySchedule from '../src/WeeklySchedule';
import HoldMethod from '../src/HoldMethod';
import PayrollDataBase from '../src/PayrollDataBase';

test( 'test add hourly employee', () => {

    let empid = 1;
    let t = new AddHourlyEmployee( empid, 'Jane', 'Jans\'s Home', 20.00 );
    t.execute();

    let e = PayrollDataBase.getEmployee( empid );
    expect( e.getName() ).toBe( 'Jane' );

    /**@type { PaymentClassification } */
    let pc = e.getClassification();
    /**@type { HourlyClassification } */
    let hc = pc;
    expect( hc instanceof HourlyClassification ).toBe( true );

    expect( hc.getHourlyRate() ).toBe( 20.00 );

    /**@type { PaymentSchedule } */
    let ps = e.getSchedule();
    /**@type { WeeklySchedule } */
    let ws = ps;
    expect( ws instanceof WeeklySchedule ).toBe( true );

    /**@type { PaymentMethod } */
    let pm = e.getMethod();
    /**@type { HoldMethod } */
    let hm = pm;
    expect( hm instanceof HoldMethod ).toBe( true );

} );