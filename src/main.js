const binary =  {
    validate(value) {
        return value.toString() === '1' || value.toString() === '0'
    }
}

const input = {
    setValue(input, value) {
        if(!binary.validate(value)) {
            input.val(input.val().slice(0, -1));
        }
    }
}



$(document).ready(function(){
    $('fieldset input[name="binary"]').keyup(function(event){
      input.setValue($(this), event.key);
    });
});