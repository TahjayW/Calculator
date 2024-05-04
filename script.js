//JavaScript For Calculator Project May 3rd 2024

function create(id){
    return document.createElement(`${id}`);
}

function select(id){
    return document.querySelector(`${id}`);
}
//Selectors For Doc Access
const body = select("body");
const container = select("#container")
const display = select(".display");
const operatorContainer = select(".operatorContainer");
const numberButtonContainer = select(".numberButtonContainer");
const debugBox = select(".debugBox");


//Setting up Number Buttons

//Prototype (not really lol)
const arrayOfButtons = [];

class numberBtn {
    elementValue = 0;
}

for(i = 0; i<10; i++){
    const btnLink = create("btn");
    btnLink.classList = "numberBtn";
    btnLink.id = `btn #${i}`;
    btnLink.textContent = i;
    let item = new numberBtn;
    item.elementValue = i;
    arrayOfButtons.splice(arrayOfButtons.length,0,item);
    console.table(arrayOfButtons)
    numberButtonContainer.append(btnLink);

}


//Basic Function Setup



function addition(a,b){
return a+b;
}

function substraction(a,b){
return a-b;
}

function multiplication(a,b){
return a*b;
}

function division(a,b){

    //div by 0 case
    if((a===0) || (b==0)){
        return "Bro come on.";
    } else{
        return a/b;
    }

}



//Operation Setup

//Calculations should only be called if:
//A number, then operation, then number and then equals was entered
//OR
//A number, operation, number and then ANOTHER operation was entered

function operate(){
    //Depending on event listener will decide type of operation to transpire

    //cases:
    //If two numbers are loaded AND a SECOND operation param is chosen
    //How?
    //Do even listener for operand being pressed. If there's already two numbers stored,
    //Calculate.



    //If EQUALS is pressed


}