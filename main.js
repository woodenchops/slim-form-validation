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
        // reduce opacity of submit button with 'faded' class
        $(props.submit).addClass('faded');
      //   disable submit button if field is empty 
        $(props.submit).on('click', function(e) {
          e.preventDefault();
        }.bind(this._self));
      }
    });

  //   if fields are filled, then re-activate submit button
    if(isValid === true) {
        // unbind preventDeafult from submit
        $(props.submit).unbind('click');
        // remove 'faded' class from submit
        $(props.submit).removeClass('faded');
    }
    
  //   display or hide error message on current focused field
    $(targetInput).each(function() {
      // add or remove 'empty-field' class on inputs if their value is less than 0
      if($(this).val().length <= 0) {
        $(this).prev().addClass('field-empty');
      } else {
        $(this).prev().removeClass('field-empty');
      }
      
    });      
  }

  // append span to label - this span is used within the CSS to create the err message
  this.addpseudoEl = function() {
      $(this._label).each(function() {
          $(this).append('<span class="err-message"></span>');
      });
  }

  // add pattern attr to accept only certain values 
  this.addPattern = function() {
      $('.inputField[type="text"]').attr('pattern', '[a-zA-z]{1,15}');
      $('.inputField[type="email"]').attr('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$');
      $('.inputField[type="number"]').attr('min', '0');
      $('.inputField[type="tel"]').attr('pattern', '[0-9]{1, 12}');
  }


  // scroll to first empty input field
  this.scrollToEmptyInput = function() {    
   if($(window).width() <= 1024) {
         $('html, body').animate({
           scrollTop: $('.field-empty').eq(0).offset().top
         }, 1000);
      };  
  }

  // Show the first empty field if user hovers over submit button
  $(this._submit).on('mouseover', function(e) {
    this.checkField(this._input);
    this.scrollToEmptyInput();
  }.bind(this._self));

  // As user interacts with field, run checkField function
  $(this._input).on('input blur', function(e) {
    this.checkField(e.target);
  }.bind(this._self));

  // init func that will execute any functions on page load
  this.init = function() {
      this.addPattern();
      this.addpseudoEl();
  }

  // run init func on page load
  this.init();

}

var validateForm = new updatedFormVal({
  form: '#myForm', // the form you wish to target
  label: '.label', // the label element for each input 
  input: '.inputField', // the input, itself
  submit: '.mySubmit' // the submit button
});