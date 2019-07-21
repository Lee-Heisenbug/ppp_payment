import AddSalariedEmployee from '../src/AddSalariedEmployee';
import PaydayTransaction from '../src/PaydayTransaction';

describe( 'able to pay single Salaried Employee', () => {

    test( 'paying at last day of the month', () => {

        let empId = 1;
        let t = new AddSalariedEmployee( empId, 'Bob', 'Home', 1000.00 );
        t.execute();
    
        let payDate = new Date( 2001, 11, 31 ).getTime();
        let pt = new PaydayTransaction( payDate );
        pt.execute();
    
        let pc = pt.getPayCheck( empId );
        expect( pc.getPayDate() ).toBe( payDate );
        expect( pc.getGrossPay() ).toBe( 1000.00 );
        expect( pc.getField( 'Disposition' ) ).toBe( 'Hold' );
        expect( pc.getDeductions() ).toBe( 0 );
        expect( pc.getNetPay() ).toBe( 1000.00 );
    
    } );

    test( 'not paying on wrong date', () => {

        let empId = 2;
        let t = new AddSalariedEmployee( empId, 'Bob', 'Home', 1000.00 );
        t.execute();
    
        let payDate = new Date( 2001, 11, 29 ).getTime();
        let pt = new PaydayTransaction( payDate );
        pt.execute();
    
        let pc = pt.getPayCheck( empId );
        expect( pc ).toBe( 0 );
    
    } );

} )



