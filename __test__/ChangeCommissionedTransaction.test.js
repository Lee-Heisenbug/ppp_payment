import AddHourlyEmployee from '../src/AddHourlyEmployee';
import ChangeCommissionedTransaction from '../src/ChangeCommissionedTransaction';
import PayrollDataBase from '../src/PayrollDataBase';
import CommissionedClassification from '../src/CommissionedClassification';
import BiWeeklySchedule from '../src/BiWeeklySchedule';

test( 'able to change a employee\'s payment classification to salaried classification', () => {

    let empId = 3;
    let t = new AddHourlyEmployee( empId, 'Lance', 'Home', 15.25 );
    t.execute();

    let cst = new ChangeCommissionedTransaction( empId, 2500, 3.2 );
    cst.execute();

    let e = PayrollDataBase.getEmployee( empId );
    /**@type { CommissionedClassification } */
    let cc = e.getClassification();
    expect( cc instanceof CommissionedClassification ).toBe( true );
    expect( cc.getSalary() ).toBe( 2500 );
    expect( cc.getCommissionRate() ).toBe( 3.2 );

    let bws = e.getSchedule();
    expect( bws instanceof BiWeeklySchedule ).toBe( true );

} );