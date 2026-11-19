/*
Ship class
- length
- status?
*/

export class Ship {
    constructor(len){
        this.len = len; 
        this.sunk = false;
        this.numOfHits = 0;
    }

    isSunk(){
        if (this.numOfHits >= this.len){
            this.sunk = true;
        }
    }
}