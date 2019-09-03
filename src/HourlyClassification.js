import TimeCard from '../src/TimeCard';
import PaymentClassification from './PaymentClassification';

class HourlyClassification extends PaymentClassification {

    constructor( hourlyRate ) {

        super();

        this.hourlyRate = hourlyRate;

        /**@type { Map< number, TimeCard > } */
        this.timeCards = new Map();

    }

    getHourlyRate() {

        return this.hourlyRate;

    }

    /**
     * @param { TimeCard } tc 
     */
    addTimeCard( tc ) {

        this.timeCards.set( tc.getDate(), tc );
            
    }

    getTimeCard( date ) {

        return this.timeCards.get( date );

    }

    calculatePay() {

        return 0;

    }

}

export default HourlyClassification;