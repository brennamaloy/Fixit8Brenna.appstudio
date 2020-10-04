/*
Do this together:
 You'll be making a calculator program.

 Scenario: the program gets 2 numbers from the user,
 and then outputs their sum on a second form.
 The user can also clear the input controls.
 Requirement - the program must use a global function.

 1) Algorithm:
    > get two numbers from the user
    > when the user clicks an Add button, add the numbers
      and show the answer in a control.
      ? show it in a label? in a Bootstrap Alert?
    > if the user clicks the reset button, clear the content
      of all the controls: 2 holding the numbers and
      the answer display.
    > show the answer on the second form

 2) sketch the GUI, identify the controls needed:
    > need two input controls  (for the 2 numbers) with 2 labels
    > need a button for Add
    > need a button for Reset
    > need a control to display the answer
       - bootstrap4 Alert? label? NSBMsg?
    > need a second form to display answer on
    > need a label control on the second form to show the answer

 3) build the first part of interface (1-2 controls) and properties.
    These are already built on this form.

 4) write a function that takes two arguments (the 2 numbers) and
    returns their sum.

 5) now write the code for the button onclick event handler.
    You can use this code as a start - but you need to adjust it
    to fit your program.

        var answer = 0
        btnAdd.onclick=function(){
            lblAnswer = addTwo(inptNum1.value,inptNum2.value)
        }

 6) then add an event and event handler code for the Reset button.

 7) create a second form named 'answer'
 8) on the 'answer' form, add the event and code you need to display
    the answer in a label.

*/
