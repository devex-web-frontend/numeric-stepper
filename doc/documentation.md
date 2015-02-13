#Index

**Classes**

* [class: NumericStepper](#NumericStepper)
  * [new NumericStepper(input)](#new_NumericStepper)
  * [const: NumericStepper.E_CHANGED](#NumericStepper.E_CHANGED)
  * [const: NumericStepper.E_UPDATE_CONSTRAINTS](#NumericStepper.E_UPDATE_CONSTRAINTS)
  * [const: NumericStepper.E_CORRECTED](#NumericStepper.E_CORRECTED)
  * [const: NumericStepper.E_CHANGE_VALUE](#NumericStepper.E_CHANGE_VALUE)
  * [const: NumericStepper.E_SET_CURSOR_POSITION](#NumericStepper.E_SET_CURSOR_POSITION)
  * [event: "numericstepper:changed"](#NumericStepper#numericstepper_changed)
  * [event: "numericstepper:corrected"](#NumericStepper#numericstepper_corrected)
  * [event: "numericstepper:setucrsor"](#NumericStepper#numericstepper_setucrsor)
  * [event: "numericstepper:updateconstraints"](#NumericStepper#numericstepper_updateconstraints)
  * [event: "numericstepper:changevalue"](#NumericStepper#numericstepper_changevalue)

**Namespaces**

* [NumericStepper](#NumericStepper)
  * [const: NumericStepper.E_CHANGED](#NumericStepper.E_CHANGED)
  * [const: NumericStepper.E_UPDATE_CONSTRAINTS](#NumericStepper.E_UPDATE_CONSTRAINTS)
  * [const: NumericStepper.E_CORRECTED](#NumericStepper.E_CORRECTED)
  * [const: NumericStepper.E_CHANGE_VALUE](#NumericStepper.E_CHANGE_VALUE)
  * [const: NumericStepper.E_SET_CURSOR_POSITION](#NumericStepper.E_SET_CURSOR_POSITION)
  * [event: "numericstepper:changed"](#NumericStepper#numericstepper_changed)
  * [event: "numericstepper:corrected"](#NumericStepper#numericstepper_corrected)
  * [event: "numericstepper:setucrsor"](#NumericStepper#numericstepper_setucrsor)
  * [event: "numericstepper:updateconstraints"](#NumericStepper#numericstepper_updateconstraints)
  * [event: "numericstepper:changevalue"](#NumericStepper#numericstepper_changevalue)

**Functions**

* [updateConstraints()](#updateConstraints)
* [applyConstraints()](#applyConstraints)
* [increase()](#increase)
* [decrease()](#decrease)
 
<a name="NumericStepper"></a>
#class: NumericStepper
**Members**

* [class: NumericStepper](#NumericStepper)
  * [new NumericStepper(input)](#new_NumericStepper)
  * [const: NumericStepper.E_CHANGED](#NumericStepper.E_CHANGED)
  * [const: NumericStepper.E_UPDATE_CONSTRAINTS](#NumericStepper.E_UPDATE_CONSTRAINTS)
  * [const: NumericStepper.E_CORRECTED](#NumericStepper.E_CORRECTED)
  * [const: NumericStepper.E_CHANGE_VALUE](#NumericStepper.E_CHANGE_VALUE)
  * [const: NumericStepper.E_SET_CURSOR_POSITION](#NumericStepper.E_SET_CURSOR_POSITION)
  * [event: "numericstepper:changed"](#NumericStepper#numericstepper_changed)
  * [event: "numericstepper:corrected"](#NumericStepper#numericstepper_corrected)
  * [event: "numericstepper:setucrsor"](#NumericStepper#numericstepper_setucrsor)
  * [event: "numericstepper:updateconstraints"](#NumericStepper#numericstepper_updateconstraints)
  * [event: "numericstepper:changevalue"](#NumericStepper#numericstepper_changevalue)

<a name="new_NumericStepper"></a>
##new NumericStepper(input)
**Params**

- input `HTMLInputElement`  

**Fires**

- [numericstepper:changed](#NumericStepper#numericstepper_changed)
- [numericstepper:corrected](#NumericStepper#numericstepper_corrected)

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
<a name="NumericStepper.E_SET_CURSOR_POSITION"></a>
##const: NumericStepper.E_SET_CURSOR_POSITION
**Type**: `string`  
**Default**: `numericstepper:setcursor`  
<a name="NumericStepper#numericstepper_changed"></a>
##event: "numericstepper:changed"
Numericstepper value has changed

<a name="NumericStepper#numericstepper_corrected"></a>
##event: "numericstepper:corrected"
Numericstepper value was corrected

<a name="NumericStepper#numericstepper_setucrsor"></a>
##event: "numericstepper:setucrsor"
Sets cursor to specified position

**Properties**

  - event.detail.position `Number`  

<a name="NumericStepper#numericstepper_updateconstraints"></a>
##event: "numericstepper:updateconstraints"
Numericstepper constraints attributes were changed

<a name="NumericStepper#numericstepper_changevalue"></a>
##event: "numericstepper:changevalue"
Numericstepper value was changed outside

<a name="NumericStepper"></a>
#NumericStepper
**Copyright**: Devexperts  
**Members**

* [NumericStepper](#NumericStepper)
  * [const: NumericStepper.E_CHANGED](#NumericStepper.E_CHANGED)
  * [const: NumericStepper.E_UPDATE_CONSTRAINTS](#NumericStepper.E_UPDATE_CONSTRAINTS)
  * [const: NumericStepper.E_CORRECTED](#NumericStepper.E_CORRECTED)
  * [const: NumericStepper.E_CHANGE_VALUE](#NumericStepper.E_CHANGE_VALUE)
  * [const: NumericStepper.E_SET_CURSOR_POSITION](#NumericStepper.E_SET_CURSOR_POSITION)
  * [event: "numericstepper:changed"](#NumericStepper#numericstepper_changed)
  * [event: "numericstepper:corrected"](#NumericStepper#numericstepper_corrected)
  * [event: "numericstepper:setucrsor"](#NumericStepper#numericstepper_setucrsor)
  * [event: "numericstepper:updateconstraints"](#NumericStepper#numericstepper_updateconstraints)
  * [event: "numericstepper:changevalue"](#NumericStepper#numericstepper_changevalue)

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
<a name="NumericStepper.E_SET_CURSOR_POSITION"></a>
##const: NumericStepper.E_SET_CURSOR_POSITION
**Type**: `string`  
**Default**: `numericstepper:setcursor`  
<a name="NumericStepper#numericstepper_changed"></a>
##event: "numericstepper:changed"
Numericstepper value has changed

<a name="NumericStepper#numericstepper_corrected"></a>
##event: "numericstepper:corrected"
Numericstepper value was corrected

<a name="NumericStepper#numericstepper_setucrsor"></a>
##event: "numericstepper:setucrsor"
Sets cursor to specified position

**Properties**

  - event.detail.position `Number`  

<a name="NumericStepper#numericstepper_updateconstraints"></a>
##event: "numericstepper:updateconstraints"
Numericstepper constraints attributes were changed

<a name="NumericStepper#numericstepper_changevalue"></a>
##event: "numericstepper:changevalue"
Numericstepper value was changed outside

<a name="updateConstraints"></a>
#updateConstraints()
Updates constraints according to element attributes

<a name="applyConstraints"></a>
#applyConstraints()
Applies constraints on input value, replaces comma with dot, rounds value to step

<a name="increase"></a>
#increase()
Increase value by 1

<a name="decrease"></a>
#decrease()
Decrease value by 1

