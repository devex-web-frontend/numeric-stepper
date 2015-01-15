#Index

**Classes**

* [class: NumericStepper](#NumericStepper)
  * [new NumericStepper(input)](#new_NumericStepper)
  * [const: NumericStepper.E_CHANGED](#NumericStepper.E_CHANGED)
  * [const: NumericStepper.E_UPDATE_CONSTRAINTS](#NumericStepper.E_UPDATE_CONSTRAINTS)
  * [const: NumericStepper.E_CORRECTED](#NumericStepper.E_CORRECTED)
  * [const: NumericStepper.E_CHANGE_VALUE](#NumericStepper.E_CHANGE_VALUE)

**Namespaces**

* [NumericStepper](#NumericStepper)
  * [const: NumericStepper.E_CHANGED](#NumericStepper.E_CHANGED)
  * [const: NumericStepper.E_UPDATE_CONSTRAINTS](#NumericStepper.E_UPDATE_CONSTRAINTS)
  * [const: NumericStepper.E_CORRECTED](#NumericStepper.E_CORRECTED)
  * [const: NumericStepper.E_CHANGE_VALUE](#NumericStepper.E_CHANGE_VALUE)

**Events**

* [event: "numericstepper:changed"](#numericstepper_changed)
* [event: "numericstepper:corrected"](#numericstepper_corrected)
* [event: "numericstepper:updateconstraints"](#numericstepper_updateconstraints)
* [event: "numericstepper:changevalue"](#numericstepper_changevalue)

**Functions**

* [updateConstraints()](#updateConstraints)
* [applyConstraints()](#applyConstraints)
* [increase()](#increase)
* [dencrease()](#dencrease)
 
<a name="NumericStepper"></a>
#class: NumericStepper
**Members**

* [class: NumericStepper](#NumericStepper)
  * [new NumericStepper(input)](#new_NumericStepper)
  * [const: NumericStepper.E_CHANGED](#NumericStepper.E_CHANGED)
  * [const: NumericStepper.E_UPDATE_CONSTRAINTS](#NumericStepper.E_UPDATE_CONSTRAINTS)
  * [const: NumericStepper.E_CORRECTED](#NumericStepper.E_CORRECTED)
  * [const: NumericStepper.E_CHANGE_VALUE](#NumericStepper.E_CHANGE_VALUE)

<a name="new_NumericStepper"></a>
##new NumericStepper(input)
**Params**

- input `HTMLInputElement`  

<a name="NumericStepper.E_CHANGED"></a>
##const: NumericStepper.E_CHANGED
**Type**: `string`  
**Default**: `numericstepper:changed`  
<a name="NumericStepper.E_UPDATE_CONSTRAINTS"></a>
##const: NumericStepper.E_UPDATE_CONSTRAINTS
**Type**: `string`  
**Default**: `numericstepper:updateconstraints`  
<a name="NumericStepper.E_CORRECTED"></a>
##const: NumericStepper.E_CORRECTED
**Type**: `string`  
**Default**: `numericstepper:corrected`  
<a name="NumericStepper.E_CHANGE_VALUE"></a>
##const: NumericStepper.E_CHANGE_VALUE
**Type**: `string`  
**Default**: `numericstepper:changevalue`  
<a name="NumericStepper"></a>
#NumericStepper
**Copyright**: Devexperts  
**Members**

* [NumericStepper](#NumericStepper)
  * [const: NumericStepper.E_CHANGED](#NumericStepper.E_CHANGED)
  * [const: NumericStepper.E_UPDATE_CONSTRAINTS](#NumericStepper.E_UPDATE_CONSTRAINTS)
  * [const: NumericStepper.E_CORRECTED](#NumericStepper.E_CORRECTED)
  * [const: NumericStepper.E_CHANGE_VALUE](#NumericStepper.E_CHANGE_VALUE)

<a name="NumericStepper.E_CHANGED"></a>
##const: NumericStepper.E_CHANGED
**Type**: `string`  
**Default**: `numericstepper:changed`  
<a name="NumericStepper.E_UPDATE_CONSTRAINTS"></a>
##const: NumericStepper.E_UPDATE_CONSTRAINTS
**Type**: `string`  
**Default**: `numericstepper:updateconstraints`  
<a name="NumericStepper.E_CORRECTED"></a>
##const: NumericStepper.E_CORRECTED
**Type**: `string`  
**Default**: `numericstepper:corrected`  
<a name="NumericStepper.E_CHANGE_VALUE"></a>
##const: NumericStepper.E_CHANGE_VALUE
**Type**: `string`  
**Default**: `numericstepper:changevalue`  
<a name="numericstepper_changed"></a>
#event: "numericstepper:changed"
Numericstepper value has changed

<a name="numericstepper_corrected"></a>
#event: "numericstepper:corrected"
Numericstepper value was corrected

<a name="numericstepper_updateconstraints"></a>
#event: "numericstepper:updateconstraints"
Numericstepper constraints attributes were changed

<a name="numericstepper_changevalue"></a>
#event: "numericstepper:changevalue"
Numericstepper value was changed outside

<a name="updateConstraints"></a>
#updateConstraints()
Updates constraints according to element attributes

<a name="applyConstraints"></a>
#applyConstraints()
Applies constraints on input value, replaces comma with dot

<a name="increase"></a>
#increase()
Increase value by 1

<a name="dencrease"></a>
#dencrease()
Decrease value by 1

