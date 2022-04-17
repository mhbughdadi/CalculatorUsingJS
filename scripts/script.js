function dataInputClicked( data ){

    var screen = document.calc.screen;
    // this will append the char to the result 
    if (screen.value == '0' || /Infinity/i.test(screen.value)){
        screen.value = '';
    }
  
    if (data === '.' && !validateDot(screen.value)){
        
        return ;
    }else {
        screen.value +=data;
    }

   
    
}

function equalsClicked(){
    var screen = document.calc.screen;
    screen.value = eval(screen.value);
}

function clearScreen(){
    document.calc.screen.value = '0';
    refreshNums();

    
}

function refreshNums(){
    $('.dot').prop('disabled', false);
    $("span.dot").removeClass('disabled');
}

function validateDot(expression ){

    
    var arr = expression.replaceAll('+','$').replaceAll('-','$').replaceAll('*','$').replaceAll('/','$').split('$');

    var term = arr[arr.length-1];
    if(term.includes('.')){

        return false;
    }else {

        return true;
    }
}