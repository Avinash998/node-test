const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
	var db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db',db);

	it('Should call the spies correctly',() =>{
		var spy = expect.createSpy();
		spy('Avinash',25);
		expect(spy).toHaveBeenCalledWith('Avinash',25);
	});

	it('Should call saveUser with user object', () => {
		var email = 'avinashgolu.chorasia@gmail.com';
		var password = '123abc';

		app.handleSignup(email,password);
		expect(db.saveUser).toHaveBeenCalledWith({email,password});
	});
});