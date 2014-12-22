describe('NumericStepper #increase()', function() {
	var testElement,
		S_BTN_UP = '.numericStepper--control-up';


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

	it('should increase current value by step', function() {
		var stepper = new NumericStepper(testElement);

		stepper.increase();
		expect(testElement.value).toBe('10.0');
	});

	it('should not increase value if max constraint reached', function() {
		var stepper = new NumericStepper(testElement);

		testElement.value = 123;
		stepper.increase();

		expect(testElement.value).toBe('123');
	});

	it('should disable increase button when max constraint reached', function() {
		var stepper = new NumericStepper(testElement);

		testElement.value = 120.5;

		stepper.increase();
		expect(document.querySelector(S_BTN_UP).disabled).toBe(true);
	});
});
