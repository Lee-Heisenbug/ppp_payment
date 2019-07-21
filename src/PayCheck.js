export default class PayCheck {

    /**
     * @param { number } payDate 
     */
    constructor( payDate ) {

        this.payDate = payDate;
        this.grossPay = 0;
        this.deductions = 0;
        this.netPay = 0;

    }
    getPayDate() {

        return this.payDate;

    }
    /**
     * @param { number } gp 
     */
    setGrossPay( gp ) {

        this.grossPay = gp;

    }
    getGrossPay() {

        return this.grossPay;

    }
    setDeductions( d ) {

        this.deductions = d;

    }
    getDeductions() {

        return this.deductions;
            
    }
    setNetPay( np ) {

        this.netPay = np;

    }
    getNetPay() {

        return this.netPay;

    }
    getField() {

        return 'Hold';

    }

}