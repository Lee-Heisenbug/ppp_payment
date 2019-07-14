import AddHourlyEmployee from '../src/AddHourlyEmployee';
import ChangeDirectTransaction from '../src/ChangeDirectTransaction';
import PayrollDataBase from '../src/PayrollDataBase';
import DirectMethod from '../src/DirectMethod';

test( 'able to change a employee\'s payment classification to salaried classification', () => {

    let empId = 3;
    let t = new AddHourlyEmployee( empId, 'Lance', 'Home', 15.25 );
    t.execute();

    let bank = 'ICBC';
    let acount = '6362231487696546';
    let cdt = new ChangeDirectTransaction( empId, bank, acount );
    cdt.execute();

    let e = PayrollDataBase.getEmployee( empId );
    /**@type { DirectMethod } */
    let m = e.getMethod();
    expect( m instanceof DirectMethod ).toBe( true );
    expect( m.getAcount() ).toBe( acount );
    expect( m.getBank() ).toBe( 'ICBC' );

} );