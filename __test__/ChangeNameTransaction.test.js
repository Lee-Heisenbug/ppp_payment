import ChangeNameTransaction from '../src/ChangeNameTransaction';
import AddHourlyEmployee from '../src/AddHourlyEmployee';
import PayrollDataBase from '../src/PayrollDataBase';

test( 'able to change name', () => {

    let empId = 2;
    let t = new AddHourlyEmployee( empId, 'Bill', 'Home', 15.25 );
    t.execute();
    let cnt = new ChangeNameTransaction( empId, 'Bob' );
    cnt.execute();

    let e = PayrollDataBase.getEmployee( empId );
    expect( e.getName() ).toBe( 'Bob' );

} )