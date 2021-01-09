
var buttons = document.getElementsByName('button');
var display = document.getElementById("display");
// console.log(display);
// console.log('henlo')

var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; i<buttons.length; i++){
	buttons[i].addEventListener('click', function(){
		var value = this.getAttribute('data-value');
		// console.log(value);

		if(value == 'AC'){
			
			display.innerText = "";
		}

		// else if(value == 'DEL'){
			
		// 	del = display.innerText();
		// 	console.log('del','display');
		// 	display.innerText = ;
		// }


		else if(value == 'DEL'){
			
			//console.log('in delete');
			s = display.innerText.toString();
			//console.log(s);
			result = s.slice(0, s.length - 1)
			//console.log(result)
			display.innerText = result;

		}

		else if(value == '+'){
			operator = '+';
			// operand1 = parseFloat(display.textContent);
			console.log(value);
			display.innerText +=value;

		} else if(value == '='){
			// operand2 = parseFloat(display.textContent);
			//display.innerText +=value;
			x = eval(display.innerText.toString());
			console.log(eval(display.innerText.toString()));
			// console.log(eval(display));
			display.innerText = x;

		} else{
			console.log(display);
			console.log(value);
			display.innerText += value;
		}

	});
}