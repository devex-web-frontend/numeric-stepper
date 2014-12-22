describe('NumericStepper common', function() {
	beforeEach(function() {
		browser().navigateTo('/test/js/html/default.case.html');
	});
	afterEach(function() {
		browser().navigateTo('');
	});

	it('should replace comma character in value to dot', function() {
		input('default').enter('23,4');

		expect(input('default').val()).toBe('23.4');
	});

	it('should return rounded value after entering invalid character', function() {
		input('default').enter(5.232323232323);

		blur('#default');
		expect(input('default').val()).toBe('5.2');
		input('default').enter('d');
		expect(input('default').val()).not().toBe('5.232323232323');
	});

	it('should prevent possibility to enter invalid characters (letters, specials symbols)', function() {
		input('default').enter(7);

		input('default').enter('d');
		expect(input('default').val()).toBe("7");
	});
});
