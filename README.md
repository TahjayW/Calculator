# Calculator

Goals: 

1. Basic functions include:

    Addition    
    Subtraction
    Multiplication
    Division


2. Operations consist of:
    A number
    then
    An operator
    then
    A Number

3. A function called "Operate" that enacts the above

4. HTML setup with buttons for each digit/functions and 
   an equals key


5. Functions that populate display when buttons are clicked. 
   Display values should be stored somewhere 

6. Calculator needs to function. Items need to be stored,
   then the solution displayed.

7. Calc needs to evaluate one pair of numbers at a time.
   If two numbers are operated on and a third number is called,
   "solution" is to populate the display. 
8. Handle error cases

9. Extra credit:
Handle floats with a decimal.
Increase calculator's sex appeal.
Add "backspace".
Include keyboard support.



Event Listener should be used for container of numbers/operators
Decision for operation decided by switch


Numbers:
>Created through a loop;
>Mimic numpad layout, starting from bottom to top
>Each Number is an object, child of the numbers container
>Properties include:
    Value
    text
    Button name

Operators:
>Operands are objects
>Created through a loop, 4 times (necessary?)
>Properties include:
    function for operation
        function takes two numbers and operates
        function has error cases - possible inputs need to be defined

