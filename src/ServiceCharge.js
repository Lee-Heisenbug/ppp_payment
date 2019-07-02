export default class ServiceCharge {

    /**
     * @param { number } date 
     * @param { number } amount 
     */
    constructor( date, amount ) {

        this.date = date;
        this.amount = amount;

    }

    getDate() {

        return this.date;

    }

    getAmount() {

        return this.amount;

    }

}