function updatedFormVal(props) {
    this._form = document.querySelector(props.form);
    this._label = this._form.querySelectorAll(props.label);
    this._input = this._form.querySelectorAll(props.input);
    this._submit = this._form.querySelector(props.submit);
    this._self = this;
  
    this.checkField = function(targetInput) {
      var isValid = true;
      $(this._input).each(function() {
        if($(this).val().length <= 0) {
          isValid = false;
          $(props.submit).attr('disabled', 'true');
        }
      });
  
      if(isValid === true) {
        $(props.submit).removeAttr('disabled');
      }
  
      if($(targetInput).val().length <= 0) {
        $(targetInput).prev().addClass('field-empty');
       } else {
         $(targetInput).prev().removeClass('field-empty');
       }
    }
    $(this._submit).on('mouseover', function() {
      this.checkField(this._input[0]);
    }.bind(this._self));
  
    $(this._input).on('input blur', function(e) {
      this.checkField(e.target);
    }.bind(this._self));
  }
  
  var validateForm = new updatedFormVal({
    form: '#myForm',
    label: ".label",
    input: ".inputField",
    submit: ".mySubmit"
  });