import * as Data from './transform/data';
import * as Parser from './transform/parser';

export class DataHandler {
    public handle(): any {
        return Data;
    }
}

let dh = new DataHandler();
let result = dh.handle();
debugger;