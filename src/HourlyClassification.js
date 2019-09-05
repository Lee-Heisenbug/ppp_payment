import TimeCard from '../src/TimeCard';
import PaymentClassification from './PaymentClassification';

class HourlyClassification extends PaymentClassification {

    /**
     * @param { number } hourlyRate 
     */
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

        let pay = 0;
        let self = this;

        this.timeCards.forEach( tc => {

            pay += self._calculateDayPay( tc );

        } )

        return pay;

    }
    /**
     * @param { TimeCard } tc 
     */
    _calculateDayPay( tc ) {

        let dayPay;
        let workTime = tc.getHours();
        let overtime = workTime - 8;

        workTime = overtime > 0 ? ( 8 + ( overtime * 1.5 ) ) : workTime;

        dayPay = workTime * this.hourlyRate;

        return dayPay;

    }

}

export default HourlyClassification;