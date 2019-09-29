# slim-form-validation
plugin to detect empty required fields in a contact form


# example init

 **markup example:**
```HTML
<form action="" id="myForm">
<label for="" class="name label">Name</label>
<input type="text" class="inputField"><br>

<label for="" class="first-name label">First name</label>
<input type="text" class="inputField"><br>

<label for="" class="last-name label">Last name</label>
<input type="text" class="inputField"><br>

<label for="" class="email label">Email</label>
<input type="email" class="inputField"><br>

<label for="" class="password label">Password</label>
<input type="text" class="inputField"><br>

<label for="" class="number-of-guests label">Number of guests</label>
<input type="number" class="inputField"><br>

<label for="" class="tel label">Telephone</label>
<input type="tel" class="inputField"><br>

<input type="submit" class="mySubmit">
</form>

```
 **JavaScript init example:**

```JAVASCRIPT
  var validateForm = new updatedFormVal({
    form: '#myForm', // the form you wish to target
    label: ".label", // the label element for each input 
    input: ".inputField", // the input, itself
    submit: ".mySubmit" // the submit button
  });

 ```
 
  **CSS positioning offset for error message:**
  
  if, for whatever reason, you need to adjust the positioning of the error message, use the below selector
 
 ```CSS
 
 .label.field-empty .err-message {
    top: 43px;
    left: 0;
  }
 
 ```
 
 **codepen example:**
https://codepen.io/Woodenchops/pen/oKxRGq?editors=1010

 
 - **form** : the form you wish to target
 - **label** : the label you wish to target
 - **input** : which input fields are you targeting
 - **submit** : target the submit button for form

 
