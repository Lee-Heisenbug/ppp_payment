import TimeCard from '../src/TimeCard';

class HourlyClassification {

    constructor( hourlyRate ) {

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

}

export default HourlyClassification;