# slim-form-validation

# contact-form-validate
plugin to detect empty required fields in a contact form


# example init

Check https://www.noyane.com/ and https://www.baptisteandbottle.com/ for use case implementation (contact form 7)
```
  var contactForm = new FormValidate({
    form: "#wpcf7-f563-o1",
    input: ".wpcf7-validates-as-required", 
    submit: ".wpcf7-submit"
   });
 ```
 
 **codepen example:**
https://codepen.io/Woodenchops/pen/oKxRGq?editors=1010

 
 - **form** : the form you wish to target
 - **isLablelWrapper** : contact form 7 wraps input field inside label - but other forms might not - specify if it does (false by deafult)
 - **input** : which input fields are you targeting
 - **submit** : target the submit button for form
 - **customTopOffset** : adjust top offset positioning of error messages on input error messages (0 by default)
 - **customLeftOffset** : adjust left offset positioning of error messages on input error messages (0 by default)
 - **submitCustomTopOffset** : adjust top offset positioning of error messages on submit button error messages (0 by default)
 - **submitCustomLeftOffset** : adjust left offset positioning of error messages on submit button error messages (0 by default)
 - **isModal** : is the form in a popup modal? (false by default)
 - **modal** : pass a selector (if 'isModal' is true) e.g. .modal-container
 - **modalTrigger** : pass a selector (if 'isModal' is true) e.g. .modal-trigger (the CTA used to trigger popup)
 
