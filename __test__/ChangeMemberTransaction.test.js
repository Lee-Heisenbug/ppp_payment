import AddHourlyEmployee from '../src/AddHourlyEmployee';
import ChangeMemberTransaction from '../src/ChangeMemberTransaction';
import PayrollDataBase from '../src/PayrollDataBase';
import UnionAffiliation from '../src/UnionAffiliation';

test( 'able to make a employee to be a member', () => {

    let empId = 2;
    let memberId = 7734;
    let t = new AddHourlyEmployee( empId, 'Bill', 'Home', 15.25 );
    t.execute();
    
    let cmt = new ChangeMemberTransaction( empId, memberId, 99.42 );
    cmt.execute();

    let e = PayrollDataBase.getEmployee( empId );
    /**@type { UnionAffiliation } */
    let af = e.getAffiliation();

    expect( af instanceof UnionAffiliation ).toBe( true );
    expect( af.getDues() ).toBe( 99.42 );
    let member = PayrollDataBase.getUnionMember( memberId );

    expect( e === member );

} );