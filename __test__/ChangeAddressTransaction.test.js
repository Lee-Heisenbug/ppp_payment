import ChangeAddressTransaction from '../src/ChangeAddressTransaction';
import AddHourlyEmployee from '../src/AddHourlyEmployee';
import PayrollDataBase from '../src/PayrollDataBase';

test( 'able to change name', () => {

    let empId = 2;
    let t = new AddHourlyEmployee( empId, 'Bill', 'Home', 15.25 );
    t.execute();
    let cat = new ChangeAddressTransaction( empId, 'Hometown' );
    cat.execute();

    let e = PayrollDataBase.getEmployee( empId );
    expect( e.getAddress() ).toBe( 'Hometown' );

} )