import { Ship } from "./class.js"

test('Ship sinks when hits > len', ()=>{
    const ship = new Ship(1);
    ship.numOfHits++;
    ship.isSunk(); 
    expect(ship.sunk).toBe(true);
});