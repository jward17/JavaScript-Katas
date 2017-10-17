// 1.3 while loop

//Conditional where flavor = chocolate or vanilla
//Prompt for flavor, then output "Here's your" + flavor
//if strawberry alert "All out of strawberry"
//else alert "No such flavor."

for(i=1; i < 4; i++){
	var flavor = prompt("What is your preferred ice cream flavor?");
	if(flavor == "chocolate" || flavor == "vanilla"){
		alert("Here's your "+flavor);
	}
	else if(flavor == "strawberry"){
		alert("We are all out of "+flavor);
	}
	else if(flavor == "coffee"){
		alert("No coffee allowed in school!");
	}
	else{
		alert("No such flavor.");
	}
}