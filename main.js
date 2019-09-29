function updatedFormVal(props) {
    this._form = document.querySelector(props.form);
    this._label = this._form.querySelectorAll(props.label);
    this._input = this._form.querySelectorAll(props.input);
    this._submit = this._form.querySelector(props.submit);
    this._self = this;
  
    // Check if fields are empty
    this.checkField = function(targetInput) {
      var isValid = true; 
    //   loop through each field - if one is empty, set isValid to false
      $(this._input).each(function() {
        if($(this).val().length <= 0) {
          isValid = false;
        //   disable submit button if field is empty 
          $(props.submit).attr('disabled', 'true');
        }
      });
  
    //   if fields are filled, then re-activate submit button
      if(isValid === true) {
        $(props.submit).removeAttr('disabled');
      }
      
    //   display or hide error message on current focused field 
      if($(targetInput).val().length <= 0) {
        $(targetInput).prev().addClass('field-empty');
       } else {
         $(targetInput).prev().removeClass('field-empty');
       }
    }
    // Show the first empty field if user hovers over submit button
    $(this._submit).on('mouseover', function() {
      this.checkField(this._input[0]);
    }.bind(this._self));
  
    // As user interacts with field, run checkField function
    $(this._input).on('input blur', function(e) {
      this.checkField(e.target);
    }.bind(this._self));
  }
  
  var validateForm = new updatedFormVal({
    form: '#myForm', // the form you wish to target
    label: ".label", // the label element for each input 
    input: ".inputField", // the input, itself
    submit: ".mySubmit" // the submit button
  });