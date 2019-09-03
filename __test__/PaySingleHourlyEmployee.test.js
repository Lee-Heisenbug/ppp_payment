import AddHourlyEmployee from '../src/AddHourlyEmployee';
import PaydayTransaction from '../src/PaydayTransaction';

describe( 'able to pay hourly employee', () => {

    test( 'paying with no time cards', () => {

        let empId = 2;
        let t = new  AddHourlyEmployee( empId, 'Bill', 'Home', 15.25 );
        t.execute();
    
        let payDate = new Date( 2001, 11, 9 ).getTime();
        let pt = new PaydayTransaction( payDate );
        pt.execute();
    
        let pc = pt.getPayCheck( empId );
        expect( pc ).not.toBe( null );
        expect( pc.getPayPeriodEndDate() ).toBe( payDate );
        expect( pc.getGrossPay() ).toBe( 0 );
        expect( pc.getField( 'Disposition' ) ).toBe( 'Hold' );
        expect( pc.getDeductions() ).toBe( 0 );
        expect( pc.getNetPay() ).toBe( 0 );
    
    } )

} )