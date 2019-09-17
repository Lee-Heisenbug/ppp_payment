import TimeCard from '../src/TimeCard';
import PaymentClassification from './PaymentClassification';
import PayCheck from './PayCheck';

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
    /**
     * @param { PayCheck } pc 
     */
    calculatePay( pc ) {

        let totalPay = 0;
        let payPeriod = pc.getPayDate();
        let self = this;

        this.timeCards.forEach( tc => {

            if( this._isInPayPeriod( tc, payPeriod ) )
                totalPay += self._calculateDayPay( tc );

        } )

        return totalPay;

    }
    /**
     * @param { TimeCard } tc 
     * @param { number } payPeriod
     */
    _isInPayPeriod( tc, payPeriod ) {

        let payPeriodEndDate = new Date( payPeriod ).getDate();
        let payPeriodStartDate = payPeriodEndDate - 5;
        let timeCardDate = new Date( tc.getDate() ).getDate();

        return ( timeCardDate >= payPeriodStartDate ) &&
            ( timeCardDate <= payPeriodEndDate );

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