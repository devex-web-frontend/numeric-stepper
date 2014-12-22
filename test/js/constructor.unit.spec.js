describe('NumericStepper', function() {
	var input,
		S_BTN_DOWN = '.numericStepper--control-down',
		S_BTN_UP = '.numericStepper--control-up';
	
	
	beforeEach(function() {
		document.body.innerHTML = '<input id="test" type="number">';
	});
	afterEach(function() {
		document.body.innerHTML = '';
	});

	describe('#constructor', function() {
		it('should create correct structure', function() {
			input = document.getElementById('test');

			new NumericStepper(input);

			expect(document.querySelectorAll('.numericStepper').length).toBe(1);
			expect(document.querySelectorAll('.numericStepper--input').length).toBe(1);
			expect(document.querySelectorAll('.numericStepper--control').length).toBe(2);
			expect(document.querySelectorAll('.numericStepper--control-up').length).toBe(1);
			expect(document.querySelectorAll('.numericStepper--control-down').length).toBe(1);
		});

		it('should keep original input', function() {
			input = document.getElementById('test');

			new NumericStepper(input);

			expect(document.querySelector('input')).toBe(input);
		});
	});

	describe('Events API', function() {
		describe('constants', function() {
			it('should provide public constants for events', function() {
				expect(NumericStepper.E_CHANGED).toBe('numericstepper:changed');
				expect(NumericStepper.E_CORRECTED).toBe('numericstepper:corrected');
				expect(NumericStepper.E_UPDATE_CONSTRAINTS).toBe('numericstepper:updateconstraints');
			});
		});
		describe('button status', function() {
			it('should check button statuses after NumericStepper.E_CHANGE_VALUE is fired', function() {

				input = document.getElementById('test');
				input.value = '7.5';
				input.type = 'number';
				input.setAttribute('data-precision', '1');
				input.setAttribute('step', '2.5');
				input.setAttribute('max', '10');
				input.setAttribute('min', '0');

				var stepper = new NumericStepper(input);

				input.value = 2.5;
				stepper.decrease();
				input.value = 5;

				DX.Event.trigger(input, NumericStepper.E_CHANGE_VALUE);
				expect(document.querySelector(S_BTN_DOWN).disabled).toBe(false);
			});
		});
	});
});