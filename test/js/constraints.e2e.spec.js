describe('NumericStepper Constraints', function() {
	beforeEach(function() {
		browser().navigateTo('/test/js/html/default.case.html');
	});
	afterEach(function() {
		browser().navigateTo('');
	});

	describe('initial', function() {

		it('should provide possibility to enter valid number starts with number less then min constraint while control in focus', function() {
			input('default').enter(4);

			expect(input('default').val()).toBe('4');
		});


		it('should remove className "corrected" after animation end', function() {
			browser().navigateTo('/test/js/html/animation.case.html');


			input('default').enter(3);
			blur('#default');

			sleep(.6);

			expect(element('input.corrected').count()).toBe(0);

		});
	});
});