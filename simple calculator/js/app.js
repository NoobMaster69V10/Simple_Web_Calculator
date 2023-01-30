var Num = '';  // Variable of input
function ButtonClick (button) {
    var BtnValue = button.value;  // User input variable
    if (BtnValue == '=') {
        var PlusCount = 0;  // Counts '+' in Num
        var MinusCount = 0;  // Counts '-' in Num
        var MultiplyCount = 0;  // Counts '*' in Num
        var DevisionCount = 0;  // Counts '/' in Num
        var all_arr = Num.split('');  // Array with all input elements
        for (var i = 0; i < Num.length; i++){ // This for checks matematical actions and counts them
            if (all_arr[i] == '+'){
                PlusCount++;
            } 
            else if (all_arr[i] == '-'){
                MinusCount++;
            }
            else if (all_arr[i] == '*'){
                MultiplyCount++;
            }
            else if (all_arr[i] == '/'){
                DevisionCount++;
            }
        }
        if (PlusCount > 0){ // This if works if there is '+' action
            var arr;  // Array with splited elements
            var Result = 0;
            arr = Num.split('+');
            for (var i = 0; i < arr.length; i++){
                Result += Number(arr[i]);
            }
            document.getElementById('display').innerHTML = Result;  // Changes display value
        }
        else if (MinusCount > 0){ // This if works if there is '-' action
            var arr;  // Array with splited elements
            var Result;
            var Sum = 0;
            arr = Num.split('-');
            for (var i = 1; i < arr.length; i++){
                Sum += Number(arr[i]);
            }
            Result = Number(arr[0]) - Sum;
            document.getElementById('display').innerHTML = Result;  // Changes display value
        }
        else if (DevisionCount > 0){ // This if works if there is '/' action
            var arr;  // Array with splited elements
            var Result;
            arr = Num.split('/');
            for (var i = 0; i < arr.length; i++){
                Result = Number(arr[0]) / Number(arr[1]);
            }
            document.getElementById('display').innerHTML = Result;  // Changes display value
        }
        else if (MultiplyCount > 0){ // This if works if there is '*' action
            var arr;  // Array with splited elements
            var Result = 1;
            arr = Num.split('*');
            for (var i = 0; i < arr.length; i++){
                Result *= Number(arr[i]);
            }
            document.getElementById('display').innerHTML = Result;  // Changes display value
        }
    }
    else if (BtnValue == 'c'){ // Display clear condition
        Num = '';
        Result = 0;
        document.getElementById('display').innerHTML = '0';  // Changes display value
    }
    else { // Adds user input to var Num
        Num += String(BtnValue);
        document.getElementById('display').innerHTML = Num;  // Changes display value
    }
}   
