const binary =  {
    validate(value) {
        return value.toString() === '1' || value.toString() === '0'
    },
    convert(value) {
        return parseInt(value, 2);
    }
}

const input = {
    setValue(input, value) {
        if(!binary.validate(value)) {
            input.val(input.val().slice(0, -1));
        }

        if(!input.val()) {
            input.val(0);
        }
    }
}

$(document).ready(function(){
    $('fieldset input[name="binary"]').keyup(function(event){
      input.setValue($(this), event.key);
      $('#result').text(binary.convert($(this).val()));
    });
});