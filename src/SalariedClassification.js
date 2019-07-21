import PaymentClassification from "./PaymentClassification";

class SalariedClassification extends PaymentClassification {

    constructor( salary ) {

        super();

        this.salary = salary;

    }

    getSalary() {

        return this.salary;

    }

    calculatePay() {

        return this.salary;

    }

}

export default SalariedClassification;