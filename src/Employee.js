import SalariedClassification from './SalariedClassification'
import MonthlySchedule from './MonthlySchedule';
import HoldMethod from './HoldMethod';

class Employee {

    constructor() {

    }

    getName() {

        return 'Bob';

    }

    getClassification() {

        return new SalariedClassification();

    }

    getSchedule() {

        return new MonthlySchedule();

    }

    getMethod() {

        return new HoldMethod();

    }

}

export default Employee;