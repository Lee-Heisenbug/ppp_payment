import AddHourlyEmployee from '../src/AddHourlyEmployee';
import PaydayTransaction from '../src/PaydayTransaction';
import TimeCardTransaction from '../src/TimeCardTransaction';
import DeleteEmployeeTransaction from '../src/DeleteEmployeeTransaction';

let empId = 2;
beforeEach( () => {

    let dt = new DeleteEmployeeTransaction( empId );
    dt.execute();
    let t = new  AddHourlyEmployee( empId, 'Bill', 'Home', 15.25 );
    t.execute();

} );

describe( 'able to pay hourly employee', () => {

    test( 'paying with no time cards', () => {
    
        let payDate = new Date( 2001, 10, 9 ).getTime();
        let pt = new PaydayTransaction( payDate );
        pt.execute();
    
        validatePayCheck( pt, empId, payDate, 0 );
    
    } )

    test( 'paying with one time card', () => {

        let payDate = new Date( 2001, 10, 9 ).getTime();
        
        let tc = new TimeCardTransaction( payDate, 2.0, empId );
        tc.execute();

        let pt = new PaydayTransaction( payDate );
        pt.execute();
        validatePayCheck( pt, empId, payDate, 30.5 );

    } )

    test( 'paying over time with one time card', () => {

        let payDate = new Date( 2001, 10, 9 ).getTime();

        let tc = new TimeCardTransaction( payDate, 9.0, empId );
        tc.execute();

        let pt = new PaydayTransaction( payDate );
        pt.execute();

        validatePayCheck( pt, empId, payDate, ( 8 + 1.5 ) * 15.25 );

    } )

    test( 'paying on wrong date', () => {

        let payDate = new Date( 2001, 10, 8 );

        let tc = new TimeCardTransaction( payDate, 9.0, empId );
        tc.execute();

        let pt = new PaydayTransaction( payDate );
        pt.execute();

        let pc = pt.getPayCheck( empId );
        expect( pc ).toBe( 0 );

    } )

} )

/**
 * @param { PaydayTransaction } pt 
 * @param { number } empId 
 * @param { number } payDate 
 * @param { number } pay 
 */
function validatePayCheck( pt, empId, payDate, pay ) {

    let pc = pt.getPayCheck( empId );
    expect( pc ).not.toBe( 0 );
    expect( pc.getPayPeriodEndDate() ).toBe( payDate );
    expect( pc.getGrossPay() ).toBe( pay );
    expect( pc.getField( 'Disposition' ) ).toBe( 'Hold' );
    expect( pc.getDeductions() ).toBe( 0 );
    expect( pc.getNetPay() ).toBe( pay );

}