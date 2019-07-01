export default class SalesReceipt {

    /**
     * @param { number } date 
     * @param { number } amount 
     */
    constructor( date, amount ) {

        this.date = date;
        this.amount = amount;

    }

    getAmount() {

        return this.amount;

    }

    getDate() {

        return this.date;

    }

}