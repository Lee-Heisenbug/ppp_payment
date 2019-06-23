import AddCommissionedEmployee from '../src/AddCommissionedEmployee';
import PaymentClassification from '../src/PaymentClassification';
import PaymentSchedule from '../src/PaymentSchedule';
import PaymentMethod from '../src/PaymentMethod';
import CommissionedClassification from '../src/CommissionedClassification';
import BiWeeklySchedule from '../src/BiWeeklySchedule';
import HoldMethod from '../src/HoldMethod';
import PayrollDataBase from '../src/PayrollDataBase';

test( 'test add hourly employee', () => {

    let empid = 1;
    let t = new AddCommissionedEmployee( empid, 'Kane', 'Jans\'s Home', 1000.00, 20.00 );
    t.execute();

    let e = PayrollDataBase.getEmployee( empid );
    expect( e.getName() ).toBe( 'Kane' );

    /**@type { PaymentClassification } */
    let pc = e.getClassification();
    /**@type { CommissionedClassification } */
    let cc = pc;
    expect( cc instanceof CommissionedClassification ).toBe( true );

    expect( cc.getCommissionRate() ).toBe( 20.00 );
    expect( cc.getSalary() ).toBe( 1000.00 );

    /**@type { PaymentSchedule } */
    let ps = e.getSchedule();
    /**@type { BiWeeklySchedule } */
    let bws = ps;
    expect( bws instanceof BiWeeklySchedule ).toBe( true );

    /**@type { PaymentMethod } */
    let pm = e.getMethod();
    /**@type { HoldMethod } */
    let hm = pm;
    expect( hm instanceof HoldMethod ).toBe( true );

} );