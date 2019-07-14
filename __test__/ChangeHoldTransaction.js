import AddHourlyEmployee from '../src/AddHourlyEmployee';
import ChangeHoldTransaction from '../src/ChangeHoldTransaction';
import PayrollDataBase from '../src/PayrollDataBase';
import HoldMethod from '../src/HoldMethod';

test( 'able to change a employee\'s payment classification to salaried classification', () => {

    let empId = 3;
    let t = new AddHourlyEmployee( empId, 'Lance', 'Home', 15.25 );
    t.execute();

    let address = 'Home';
    let cht = new ChangeHoldTransaction( address );
    cht.execute();

    let e = PayrollDataBase.getEmployee( empId );
    /**@type { HoldMethod } */
    let m = e.getMethod();
    expect( m instanceof HoldMethod ).toBe( true );
    expect( m.getAddress() ).toBe( address );

} );