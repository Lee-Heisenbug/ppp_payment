import AddCommissionedEmployee from '../src/AddCommissionedEmployee';
import ChangeHourlyTransaction from '../src/ChangeHourlyTransaction';
import PayrollDataBase from '../src/PayrollDataBase';
import HourlyClassification from '../src/HourlyClassification';
import WeeklySchedule from '../src/WeeklySchedule';

test( 'able to change a employee\'s payment classification to hourly classification', () => {

    let empId = 3;
    let t = new AddCommissionedEmployee( empId, 'Lance', 'Home', 2500, 3.2 );
    t.execute();

    let cht = new ChangeHourlyTransaction( empId, 27.52 );
    cht.execute();

    let e = PayrollDataBase.getEmployee( empId );
    /**@type { HourlyClassification } */
    let hc = e.getClassification();
    expect( hc instanceof HourlyClassification ).toBe( true );
    expect( hc.getHourlyRate() ).toBe( 27.52 );

    let ws = e.getSchedule();
    expect( ws instanceof WeeklySchedule ).toBe( true );

} );