import ChangeMethodTransaction from "./ChangeMethodTransaction";
import DirectMethod from './DirectMethod';

export default class ChangeDirectTransaction extends ChangeMethodTransaction {

    /**
     * @param { number } empId 
     * @param { string } bank 
     * @param { string } acount 
     */
    constructor( empId, bank, acount ) {

        super( empId );
        this.bank = bank;
        this.acount = acount;

    }
    getMethod() {

        return new DirectMethod( this.bank, this.acount );

    }

}