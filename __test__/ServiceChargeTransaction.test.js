import ServiceChargeTransaction from '../src/ServiceChargeTransaction';
import AddHourlyEmployee from '../src/AddHourlyEmployee';
import PayrollDataBase from '../src/PayrollDataBase';

test( 'able to add service charge', () => {

    let empId = 2;
    let memberId = 86;
    let date = new Date( 2001, 11, 01 ).getMilliseconds();

    let t = new AddHourlyEmployee( empId, 'Bill', 'Home', 15.25 );
    t.execute();

    let e = PayrollDataBase.getEmployee( empId );
    expect( e ).not.toBe( undefined );
    
    let af = new UnionAffiliation( memberId, 12.5 );
    e.setAffiliation( af );

    PayrollDataBase.AddUnionMember( memberId, e );
    let sct = new ServiceChargeTransaction( memberId, date, 12.95 );
    sct.execute();
    let sc = af.getServiceCharge( date );
    expect( sc.getAmount() ).toBe( 12.95 );

} )