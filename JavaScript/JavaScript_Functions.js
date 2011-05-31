//even though javaScript has a predefined function called alert we can create our own function named the same thing
//does something different.
//In the below function we are displaying the results from the greet function on the web page instead of in
//a pop-up window.
function alert (message){
    //give me the first tag on page named body
    body=document.getElementsByTagName('body')[0];
    child = document.createElement("div");
    messageNode = document.createTextNode(message);
    child.appendChild(messageNode);
    body.appendChild(child);
}


//creating my own function, not using one from the library
//defining what the function is going to do
//name is an argument that we will pass the greet function
function greet(firstName, middleName){
    //confirm function displays the cancel and okay buttons
    //return infront of the confirm will capture what the user clicks on
    return confirm("Greetings " + firstName + ' ' + middleName);



}

//actually calling the function so it does what we want
//matttSaid & nicSaid are variables that will hold whatever value the is returned from greet
//variables don't have to be predefined they can just be used when needed
mattSaid=greet('Matthew','John');
nicSaid=greet('Nicole', 'Noel');
alert(mattSaid);
alert(nicSaid);