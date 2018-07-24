const expect = require('expect');

const utils = require('./utils.js');

describe('Utils', () => {

	describe('#add', () => {
		it('should add two numbers',() => {
			var res = utils.add(33, 11);

			expect(res).toBe(44).toBeA('number');

			// if(res !== 44)
			// 	throw new Error(`Expected Value 44 getting ${res}`);
		});

		it('Should async Add two numbers',(done) =>{
			utils.asyncAdd(4,3,(sum) => {
				expect(sum).toBe(7).toBeA('number');
				done();
			});
		});
	});



it('Should Square number',() => {
	var res = utils.square(3);

	expect(res).toBe(9).toBeA('number');
	// if(res !== 9)
	// 	throw new Error(`Expected : 9 -- Getting : ${res}`);
});

it('Should async square a number',(done) => {
	utils.asyncSquare(4,(square) => {
		expect(square).toBe(16).toBeA('number');
		done();
	});
});
});



it('Should verify first and last name', () => {
	var user = {
		location: 'Andal',
		age: 25
	};
	var res = utils.setName(user,'Avinash Chourasia');
	
	expect(res).toInclude({
		firstName: 'Avinash',
		lastName: 'Chourasia'
	});
});

// it('Should Expect some values', () => {
// 	// expect(12).toNotBe(11);
// 	// expect({name: 'Avinash'}).toEqual({name: 'Avinash'});
// 	// expect([2,3,4]).toInclude(2);
// 	expect({
// 		name: 'Avinash',
// 		age: 25,
// 		location: 'Andal'
// 	}).toInclude({age: 25});
// });

