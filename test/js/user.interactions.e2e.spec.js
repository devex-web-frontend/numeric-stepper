describe('NumericStepper UI controls', function() {
	var S_BTN_UP = '.numericStepper--control-up',
		S_BTN_DOWN = '.numericStepper--control-down';

	beforeEach(function() {
		browser().navigateTo('/test/js/html/default.case.html');
	});
	afterEach(function() {
		browser().navigateTo('');
	});

	describe('increase button', function() {
		it('should increase value when clicked on ' + S_BTN_UP, function() {
			input('default').enter(7);
			blur('#default');

			mouseDown(S_BTN_UP);
			mouseUp(S_BTN_UP);
			expect(input('default').val()).toBe('8.0');
		});

		it('it should take delay between starting circular increasing', function() {
			input('default').enter(7);
			blur('#default');

			mouseDown(S_BTN_UP);
			sleep(0.3);
			mouseUp(S_BTN_UP);

			expect(input('default').val()).toBe('8.0');
		});

		it('should increase value every 50ms while button ' + S_BTN_UP + ' pressed after delay (300ms)', function() {
			input('default').enter(7);
			blur('#default');

			mouseDown(S_BTN_UP);
			sleep(1);
			mouseUp(S_BTN_UP);

			expect(input('default').val()).toBeGreaterThan(19, 'expected it should be 21, but sometimes timers work incorrectly');
			expect(input('default').val()).toBeLessThan(23, 'expected it should be 21, but sometimes timers work incorrectly');
		});
	});
	describe('decrease button', function() {
		it('should increase value when clicked on ' + S_BTN_DOWN, function() {
			input('default').enter(7);
			blur('#default');

			mouseDown(S_BTN_DOWN);
			mouseUp(S_BTN_DOWN);
			expect(input('default').val()).toBe('6.0');
		});

		it('should take delay between starting circular increasing', function() {
			input('default').enter(7);
			blur('#default');

			mouseDown(S_BTN_DOWN);
			sleep(0.3);
			mouseUp(S_BTN_DOWN);

			expect(input('default').val()).toBe('6.0');
		});

		it('should increase value every 50ms while button ' + S_BTN_DOWN + ' pressed after delay (300ms)', function() {
			input('default').enter(21);
			blur('#default');

			mouseDown(S_BTN_DOWN);
			sleep(1);
			mouseUp(S_BTN_DOWN);

			expect(input('default').val()).toBeGreaterThan(5, 'expected it should be 7, but sometimes timers work incorrectly');
			expect(input('default').val()).toBeLessThan(9, 'expected it should be 7, but sometimes timers work incorrectly');
		});
	});


	describe('keyboard', function() {
		it('should decrease value when down button pressed on keyboard', function() {
			input('default').enter(7);
			keydown('#default', 40);
			blur('#default');

			expect(input('default').val()).toBe('6.0');
		});

		it('should increase value when up button pressed on keyboard', function() {
			input('default').enter(7);
			keydown('#default', 38);
			blur('#default');

			expect(input('default').val()).toBe('8.0');
		});
	});

	describe('disabled control', function() {
		beforeEach(function() {
			input('default').enter(7);
			blur('#default');
			element('#default').attr('disabled', true);
		});

		it('shouldn\'t increase value when ' + S_BTN_UP + ' pressed, but control is disabled', function() {
			mouseDown(S_BTN_UP);
			mouseUp(S_BTN_UP);
			expect(input('default').val()).toBe('7.0');
		});

		it('shouldn\'t decrease value when ' + S_BTN_DOWN + ' pressed, but control is disabled', function() {
			mouseDown(S_BTN_DOWN);
			mouseUp(S_BTN_DOWN);
			expect(input('default').val()).toBe('7.0');
		});

		it('shouldn\'t decrease value when keyboard down button pressed, but control is disabled', function() {
			keydown('#default', 40);
			expect(input('default').val()).toBe('7.0');
		});

		it('shouldn\'t increase value when keyboard up button pressed, but control is disabled', function() {
			keydown('#default', 38);
			expect(input('default').val()).toBe('7.0');
		});
	});
});