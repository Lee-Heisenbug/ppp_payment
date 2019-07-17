import AddHourlyEmployee from '../src/AddHourlyEmployee';
import ChangeMemberTransaction from '../src/ChangeMemberTransaction';
import ChangeUnffiliatedTransaction from '../src/ChangeUnffiliatedTransaction';
import PayrollDataBase from '../src/PayrollDataBase';
import UnionAffiliation from '../src/UnionAffiliation';
import NoAffiliation from '../src/NoAffiliation';

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

    let cut = new ChangeUnffiliatedTransaction( empId );
    cut.execute();
    /**@type { NoAffiliation } */
    let naf = e.getAffiliation();

    expect( naf instanceof NoAffiliation ).toBe( true );

} )