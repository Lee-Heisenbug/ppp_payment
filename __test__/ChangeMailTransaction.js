import AddHourlyEmployee from '../src/AddHourlyEmployee';
import ChangeMailTransaction from '../src/ChangeMailTransaction';
import PayrollDataBase from '../src/PayrollDataBase';
import MailMethod from '../src/MailMethod';

test( 'able to change a employee\'s payment classification to salaried classification', () => {

    let empId = 3;
    let t = new AddHourlyEmployee( empId, 'Lance', 'Home', 15.25 );
    t.execute();

    let address = 'Home';
    let cmt = new ChangeMailTransaction( empId, address );
    cmt.execute();

    let e = PayrollDataBase.getEmployee( empId );
    /**@type { MailMethod } */
    let m = e.getMethod();
    expect( m instanceof MailMethod ).toBe( true );
    expect( m.getAddress() ).toBe( address );

} );