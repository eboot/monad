
import Model from '../../src/classes/Model';

// Test class
class Test extends Model {

    constructor() {
        super();
    }

};

let test1 = Model.$create({foo: 'bar'}, Test);
let test2 = new Test();
test2.$load({foo: 'baz'});

describe("class: Model", () => {

    it("does proper $new and $dirty checking", () => {
        expect(test1.$new).toEqual(true);
        expect(test1.$dirty).toEqual(true);
        expect(test2.$new).toEqual(false);
        expect(test2.$dirty).toEqual(false);
        test1.foo = undefined;
        test2.foo = 'buzz';
        expect(test1.$dirty).toEqual(false);
        expect(test2.$dirty).toEqual(true);
    });

});

