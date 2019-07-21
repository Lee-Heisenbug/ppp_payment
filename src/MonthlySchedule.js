import PaymentSchedule from "./PaymentSchedule";

class MonthlySchedule extends PaymentSchedule {

    constructor() {

        super();
        
    }

    /**
     * @param { number } dateTime 
     */
    isPayday( dateTime ) {

        let date = new Date( dateTime );

        let originalMonth = date.getMonth();

        let monthAfterAscend;

        date.setDate( date.getDate() + 1 );

        monthAfterAscend = date.getMonth();

        let isTheLastDayOfTheMonth = monthAfterAscend !== originalMonth;

        return isTheLastDayOfTheMonth;

    }

}

export default MonthlySchedule;