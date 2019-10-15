function updatedFormVal(props) {
  this._form = document.querySelector(props.form);
  this._label = this._form.querySelectorAll(props.label);
  this._input = this._form.querySelectorAll(props.input);
  this._submit = this._form.querySelector(props.submit);
  this._self = this;
  var self = this;

  // Check if fields are empty
  this.checkField = function(targetInput) {
    var isValid = this.isValid(); 

    $(props.submit).addClass('faded');

  //   if fields are filled, then re-activate submit button
    if(isValid === true) {
        $(props.submit).on('click', function() {
          return true;
        }.bind(this._self));
        $(props.submit).removeClass('faded');
    }
    
  //   display or hide error message on current focused field
    $(targetInput).each(function() {

      if($(this).val().length <= 0) {

        // this is an incredibly hacky way to add the err class to the phone field
        // fix this shit

        if($(this).hasClass('phone')) {
          $(this).parents('.intl-tel-input').prev('.label').addClass('field-empty');
        }

        $(this).prev('.label').addClass('field-empty');

      } else {

        if($(this).hasClass('phone')) {
          $(this).parents('.intl-tel-input').prev('.label').removeClass('field-empty');
        }

        $(this).prev('.label').removeClass('field-empty');
      }
      
    });      
  }

  this.isValid = function(){
    var isValid = true;
    //   loop through each field - if one is empty, set isValid to false
    $(this._input).each(function() {
      if($(this).val().length <= 0) {
        isValid = false;
      }
    });
    return isValid;
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
      $('.inputField[type="tel"]').attr('pattern', '[0-9]{1,12}');
  }


  // scroll to first empty input field
  this.scrollToEmptyInput = function() {    
   if($(window).width() <= 1024) {
         $('html, body').animate({
           scrollTop: $('.field-empty').eq(0).offset().top
         }, 1000);
         setTimeout(function() {
            $('.field-empty + input').eq(0).focus();
         }.bind(this._self));
      };  
  }

  // Show the first empty field if user hovers over submit button
  $(this._submit).on('mouseover click', function(e) {
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

      $(props.submit).on('click', function() {
        return this.isValid();
      }.bind(this._self));
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