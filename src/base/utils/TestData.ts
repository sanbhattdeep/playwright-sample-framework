 
export default class TestData {

   testData:Object;

    constructor(fileName:string) {
        this.testData = require("../../../"+fileName);
    }

    public getTestData() {
        return this.testData;
    }
}