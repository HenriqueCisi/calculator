//Javascript

//Click Event, for Result Button
document.getElementById("calculate-button").onclick = function()
{
	//Get the numbers inside input elements for future calculations
	let elementOne = document.getElementById('element-1');
	let elementTwo = document.getElementById('element-2');

	//Access to the checked button
	let choice = document.querySelector('input[name="operation"]:checked');

	//Operation that will be used
	let operation = choice.value;
		
	//In order to avoid strings concatenation, we defined two variables, to receive the input content, converted into number type
	let valueOne = parseInt(elementOne.value);
	let valueTwo = parseInt(elementTwo.value);


	//Testing if there is an empty input element
	if (isNaN(valueOne) || isNaN(valueTwo))
	{
		alert("Digite valores nas caixas");
		let resultElement = document.getElementById('result');
		resultElement.innerHTML = "";
		return false;
	}
	//Getting the result and printing on screen
	else
	{
		let operationResult = getResult(valueOne,valueTwo,operation);
		let resultElement = document.getElementById('result');
		resultElement.innerHTML = operationResult;
	}	
}

//Sum Function
function sum(number1,number2)
{
 	let result;
 	result = number1+number2;
 	return result;
}

//Subtraction Function
function sub(number1,number2)
{
	let result;
	result = number1-number2;
	return result; 
}

//Multiplication Function
function mult(number1,number2)
{
	let result;
	result = number1*number2;
	return result;
}

//Division Function
function div(number1,number2)
{
	let result;
	result = number1/number2;
	return result;
}

//Percentage Function
function percent(number1,number2)
{	
	let result;
	result = (number1/number2)*100;
	return result;
}

//Raising to a potence Function
function potence(number1,number2)
{
	let result;
	result = number1;
	if (number2 === 0)
	{
		result = 1;
		return result;
	}
	else
	{
		while(number2-1 > 0)
		{
			result = result * number1;
			number2--;
		}
		return result;
	}	
}

//getResult Function
function getResult(number1,number2,operation)
{
	//Testing which operation was choosed and executing the respectively calculation
	//Sum Operation
	if (operation === "+") 
	{
		return sum(number1,number2);
	}
	//Subtraction Operation
	else if (operation === "-") 
	{
		return sub(number1,number2);
	}
	//Multiplication Operation
	else if (operation === "*") 
	{
		return mult(number1,number2);
	}
	//Division Operation
	else if (operation === "/")
	{
		return div(number1,number2);
	}
	//Percentage Operation
	else if (operation === "%")
	{
		return percent(number1,number2)+"%";
	}
	//Raising to a potence Operation
	else if (operation === "^")
	{
		return potence(number1,number2);
	}
}
