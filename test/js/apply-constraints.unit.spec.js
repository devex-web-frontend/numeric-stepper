describe('NumericStepper #applyConstraints', function() {
	var testElement,
		S_BTN_UP = '.numericStepper--control-up',
		S_BTN_DOWN = '.numericStepper--control-down';


	beforeEach(function() {
		testElement = document.createElement('input');

		testElement.value = '7.7';
		testElement.type = 'number';
		testElement.setAttribute('data-precision', '1');
		testElement.setAttribute('max', '123');
		testElement.setAttribute('min', '-5');


		document.body.appendChild(testElement);
	});

	afterEach(function() {
		document.body.innerHTML = '';
	});


	it('should replace comma character to dot character', function() {
		var stepper = new NumericStepper(testElement);

		testElement.value = '1,3';
		stepper.applyConstraints();

		expect(testElement.value).toBe('1.3');
	});

	it('should return rounded value after entering invalid character', function() {
		var stepper = new NumericStepper(testElement);

		testElement.value = 1.41213123123123123123;
		stepper.applyConstraints();

		expect(testElement.value).toBe('1.4');
	});

	it('should restore value if provided value not a number', function() {
		var stepper = new NumericStepper(testElement);

		testElement.value = 'asdasd';
		stepper.applyConstraints();

		expect(testElement.value).toBe('7.7');
	});

	it('should restore empty value if provided value is minus sign', function() {
		testElement.value = '';

		var stepper = new NumericStepper(testElement);


		testElement.value = 'asdasd';
		stepper.applyConstraints();

		expect(testElement.value).toBe('');
	});


	it('should set min constraint as value if provided value less then min constraint', function() {
		var stepper = new NumericStepper(testElement);

		testElement.value = '-23';
		stepper.applyConstraints();

		expect(testElement.value).toBe('-5.0');
	});

	it('should set max constraint as value if provided value greater then max constraint', function() {
		var stepper = new NumericStepper(testElement);

		testElement.value = '99999';
		stepper.applyConstraints();


		expect(testElement.value).toBe('123.0');
	});


	describe('if input has round attribute', function() {

		beforeEach(function() {
			testElement.step = 1.5;
			testElement.setAttribute('min', '1');
			testElement.setAttribute('max', '9');
			testElement.setAttribute('round','');
		});

		it('should round value down to step according to its min ', function() {
			var stepper = new NumericStepper(testElement);

			testElement.value = '8';
			stepper.applyConstraints();

			expect(testElement.value).toBe('7.0');

			testElement.value = '6';
			stepper.applyConstraints();

			expect(testElement.value).toBe('5.5');

		});
		it('should round value down to step according to its min if value doesnt fit constraints', function() {
			var stepper = new NumericStepper(testElement);

			testElement.value = '10';
			stepper.applyConstraints();

			expect(testElement.value).toBe('8.5');

			testElement.value = '-6';
			stepper.applyConstraints();

			expect(testElement.value).toBe('1.0');
		});


		it('should not round value to step if input doesnt have round attribute', function() {
			var stepper = new NumericStepper(testElement);
			testElement.step = 3;
			testElement.value = '7';
			stepper.applyConstraints();

			expect(testElement.value).toBe('7.0');
		});

	});


	it('should fire "NumericStepper:changed" event if value changed', function() {
		var spy =  jasmine.createSpy('changed handler'),
			stepper = new NumericStepper(testElement);

		testElement.addEventListener(NumericStepper.E_CHANGED, spy);
		testElement.value = 12;
		stepper.applyConstraints();

		expect(spy).toHaveBeenCalled();
	});

	it('should fire "NumericStepper:corrected" event if value corrected', function() {
		var spy =  jasmine.createSpy('changed handler'),
			stepper = new NumericStepper(testElement);

		testElement.addEventListener(NumericStepper.E_CORRECTED, spy);
		testElement.value = 12231;
		stepper.applyConstraints();

		expect(spy).toHaveBeenCalled();
	});

	it('should\'t fire "NumericStepper:corrected" event if value not corrected', function() {
		var spy =  jasmine.createSpy('changed handler'),
			stepper = new NumericStepper(testElement);

		testElement.addEventListener(NumericStepper.E_CORRECTED, spy);
		testElement.value = 12;
		stepper.applyConstraints();

		expect(spy).not.toHaveBeenCalled();
	});


	describe('after constraints updating', function() {
		it('should working with new max constraint', function() {
			var stepper = new NumericStepper(testElement);

			testElement.setAttribute('max', 9999);
			stepper.updateConstraints();
			testElement.value = 9999;

			stepper.applyConstraints();

			expect(testElement.value).toBe('9999.0');
		});

		it('should working with new min constraint', function() {
			var stepper = new NumericStepper(testElement);

			testElement.setAttribute('min', -9999);
			stepper.updateConstraints();
			testElement.value = -9999;

			stepper.applyConstraints();

			expect(testElement.value).toBe('-9999.0');
		});

		it('should working with new data-precision constraint', function() {
			var stepper = new NumericStepper(testElement);

			testElement.setAttribute('data-precision', 2);
			stepper.updateConstraints();
			stepper.applyConstraints();

			expect(testElement.value).toBe('7.70');
		});

		it('should provide possibility for setting data-precision to zero', function() {
			var stepper = new NumericStepper(testElement);

			testElement.setAttribute('data-precision', 0);
			stepper.updateConstraints();
			stepper.applyConstraints();

			expect(testElement.value).toBe('8');
		});

		it('should provide possibility for setting max constraint to zero', function() {
			var stepper = new NumericStepper(testElement);

			testElement.setAttribute('max', 0);
			stepper.updateConstraints();
			testElement.value = 4;
			stepper.applyConstraints();

			expect(testElement.value).toBe('0.0');
		});

		it('should provide possibility for setting min constraint to zero', function() {
			var stepper = new NumericStepper(testElement);

			testElement.setAttribute('min', 0);
			stepper.updateConstraints();
			testElement.value = -4;
			stepper.applyConstraints();

			expect(testElement.value).toBe('0.0');
		});
	});

	describe('buttons', function() {
		it('should disable increase button if provided value greater then max constraint', function() {
			var stepper = new NumericStepper(testElement);

			testElement.value = 123;
			stepper.applyConstraints();

			expect(document.querySelector(S_BTN_UP).disabled).toBe(true);
		});

		it('should re enable increase button if provided value less then max constraint', function() {
			var stepper = new NumericStepper(testElement);

			testElement.value = 123;
			stepper.applyConstraints();
			testElement.value = 50;
			stepper.applyConstraints();

			expect(document.querySelector(S_BTN_UP).disabled).toBe(false);
		});


		it('should disable decrease button if provided value less then min constraint', function() {
			var stepper = new NumericStepper(testElement);

			testElement.value = -5;
			stepper.applyConstraints();

			expect(document.querySelector(S_BTN_DOWN).disabled).toBe(true);
		});

		it('should re enable decrease button if provided value greater then min constraint', function() {
			var stepper = new NumericStepper(testElement);

			testElement.value = -5;
			stepper.applyConstraints();
			testElement.value = 5;
			stepper.applyConstraints();

			expect(document.querySelector(S_BTN_DOWN).disabled).toBe(false);
		});
	});

	describe('state indication', function() {
		it('should add className "changed" to original input element for 500ms', function(done) {
			var stepper = new NumericStepper(testElement);

			testElement.value = '23';
			stepper.applyConstraints();

			expect(testElement.classList.contains('changed')).toBe(true);

			window.setTimeout(function() {
				expect(testElement.classList.contains('changed')).toBe(false);
				done();
			}, 600);
		});

		it('should add className "corrected" to original input element for 3000ms', function(done) {
			var stepper = new NumericStepper(testElement);

			testElement.value = '23232';
			stepper.applyConstraints();

			expect(testElement.classList.contains('corrected')).toBe(true);

			window.setTimeout(function() {
				expect(testElement.classList.contains('corrected')).toBe(false);
				done();
			}, 3100);
		});
	});
});