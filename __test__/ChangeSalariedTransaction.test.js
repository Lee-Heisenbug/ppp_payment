import AddCommissionedEmployee from '../src/AddCommissionedEmployee';
import ChangeSalariedTransaction from '../src/ChangeSalariedTransaction';
import PayrollDataBase from '../src/PayrollDataBase';
import SalariedClassification from '../src/SalariedClassification';
import MonthlySchedule from '../src/MonthlySchedule';

test( 'able to change a employee\'s payment classification to salaried classification', () => {

    let empId = 3;
    let t = new AddCommissionedEmployee( empId, 'Lance', 'Home', 2500, 3.2 );
    t.execute();

    let cst = new ChangeSalariedTransaction( empId, 4000 );
    cst.execute();

    let e = PayrollDataBase.getEmployee( empId );
    /**@type { SalariedClassification } */
    let sc = e.getClassification();
    expect( sc instanceof SalariedClassification ).toBe( true );
    expect( sc.getSalary() ).toBe( 4000 );

    let ms = e.getSchedule();
    expect( ms instanceof MonthlySchedule ).toBe( true );

} );