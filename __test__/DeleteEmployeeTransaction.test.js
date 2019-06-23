import DeleteEmployeeTransaction from '../src/DeleteEmployeeTransaction';
import AddCommissionedEmployee from '../src/AddCommissionedEmployee';
import PayrollDataBase from '../src/PayrollDataBase';
import Employee from '../src/Employee';

test( 'test deleting employee', () => {

    let empid = 3;
    let t = new AddCommissionedEmployee( empid, 'Lance', 'Home', 2500, 3.2 );
    /**@type { Employee } */
    let e;
    t.execute();

    e = PayrollDataBase.getEmployee( empid );
    expect( e ).not.toBe( 0 );
    
    let dt = new DeleteEmployeeTransaction( empid );
    dt.execute();
    e = PayrollDataBase.getEmployee( empid );

    expect( e ).toBe( 0 );

} )