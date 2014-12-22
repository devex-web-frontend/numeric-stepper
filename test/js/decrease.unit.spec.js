describe('NumericStepper #decrease()', function() {
	var testElement,
		S_BTN_DOWN = '.numericStepper--control-down';


	beforeEach(function() {
		testElement = document.createElement('input');

		testElement.value = '7.5';
		testElement.type = 'number';
		testElement.setAttribute('data-precision', '1');
		testElement.setAttribute('step', '2.5');
		testElement.setAttribute('max', '123');
		testElement.setAttribute('min', '0');

		document.body.appendChild(testElement);
	});

	afterEach(function() {
		document.body.innerHTML = '';
	});

	it('should decrease current value by step', function() {
		var stepper = new NumericStepper(testElement);

		stepper.decrease();
		expect(testElement.value).toBe('5.0');
	});

	it('should not increase value if max constraint reached', function() {
		var stepper = new NumericStepper(testElement);

		testElement.value = 0;
		stepper.decrease();

		expect(testElement.value).toBe('0');
	});

	it('should disable increase button when max constraint reached', function() {
		var stepper = new NumericStepper(testElement);

		testElement.value = 2.5;

		stepper.decrease();
		expect(document.querySelector(S_BTN_DOWN).disabled).toBe(true);
	});
});
