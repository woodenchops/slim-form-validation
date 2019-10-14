var intlInput = document.querySelector("#phone");
var iti = intlTelInput(intlInput, {
  utilsScript: "./intl-tel-input/js/utils.js?1549804213570",
  autoPlaceholder: 'no',
});
// combine the country code with the value of #phone
if( $('#international-number').length > 0 ){
  var itiCountryCode = 1;
  intlInput.addEventListener("countrychange", function() {
    var formPhoneNumber = $('#phone').val();
    itiCountryCode = iti.getSelectedCountryData().dialCode;
    $('#international-number').val( '+' + itiCountryCode + formPhoneNumber )
  });
  $('#phone').on('change', function(){
    $('#international-number').val( '+' + itiCountryCode + $(this).val() );
  })
}