import AddSalariedEmployee from '../src/AddSalariedEmployee';
import PaymentClassification from '../src/PaymentClassification';
import PaymentSchedule from '../src/PaymentSchedule';
import PaymentMethod from '../src/PaymentMethod';
import SalariedClassification from '../src/SalariedClassification';
import MonthlySchedule from '../src/MonthlySchedule';
import HoldMethod from '../src/HoldMethod';
import PayrollDataBase from '../src/PayrollDataBase';

test( 'test add salaried employee', () => {

    let empid = 1;
    let t = new AddSalariedEmployee( empid, 'Bob', 'Home', 1000.00 );
    t.execute();

    let e = PayrollDataBase.getEmployee( empid );
    expect( e.getName() ).toBe( 'Bob' );

    /**@type { PaymentClassification } */
    let pc = e.getClassification();
    /**@type { SalariedClassification } */
    let sc = pc;
    expect( sc instanceof SalariedClassification ).toBe( true );

    expect( sc.getSalary() ).toBe( 1000.00 );

    /**@type { PaymentSchedule } */
    let ps = e.getSchedule();
    /**@type { MonthlySchedule } */
    let ms = ps;
    expect( ms instanceof MonthlySchedule ).toBe( true );

    /**@type { PaymentMethod } */
    let pm = e.getMethod();
    /**@type { HoldMethod } */
    let hm = pm;
    expect( hm instanceof HoldMethod ).toBe( true );

} );