import ServiceChargeTransaction from '../src/ServiceChargeTransaction';
import AddHourlyEmployee from '../src/AddHourlyEmployee';
import PayrollDataBase from '../src/PayrollDataBase';
import UnionAffiliation from '../src/UnionAffiliation';

test( 'able to add service charge', () => {

    let empId = 2;
    let memberId = 86;
    let date = new Date( 2001, 11, 1 ).getMilliseconds();

    let t = new AddHourlyEmployee( empId, 'Bill', 'Home', 15.25 );
    t.execute();

    let e = PayrollDataBase.getEmployee( empId );
    expect( e ).not.toBe( undefined );
    
    let af = new UnionAffiliation( memberId );
    e.setAffiliation( af );

    PayrollDataBase.addUnionMember( memberId, e );
    let sct = new ServiceChargeTransaction( memberId, date, 12.95 );
    sct.execute();
    /**@type { ServiceCharge } */
    let sc = af.getServiceCharge( date );
    expect( sc.getAmount() ).toBe( 12.95 );

} )