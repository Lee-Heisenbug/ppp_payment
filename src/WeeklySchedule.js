import PaymentSchedule from "./PaymentSchedule";

export default class WeeklySchedule extends PaymentSchedule {

    constructor() {

        super();

    }
    isPayday( date ) {

        let day = new Date( date ).getDay();
        
        return day === 5;

    }

}