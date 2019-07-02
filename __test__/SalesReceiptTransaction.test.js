import SalesReceiptTransaction from '../src/SalesReceiptTransaction';
import AddCommissionedEmployee from '../src/AddCommissionedEmployee';
import PayrollDataBase from '../src/PayrollDataBase';
import CommissionedClassification from '../src/CommissionedClassification';
import SalesReceipt from '../src/SalesReceipt';

test( 'able to add sales receipt', () => {

    let empid = 4;
    let date = new Date( 2001, 11, 14 ).getMilliseconds;
    let amount = 500;
    let t = new AddCommissionedEmployee( empid, 'Kane', 'Kane\'s Home', 1000.00, 20.00 );
    t.execute();

    let srt = new SalesReceiptTransaction( date, amount, empid );
    srt.execute();

    let e = PayrollDataBase.getEmployee( empid );
    let pc = e.getClassification();
    /**@type { CommissionedClassification } */
    let cc = pc;

    /**@type { SalesReceipt } */
    let sr = cc.getSalesReceipt( date );
    expect( sr.getAmount() ).toBe( amount );

} )