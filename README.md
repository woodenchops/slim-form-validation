# slim-form-validation
plugin to detect empty required fields in a contact form


# example init

Note that every **label** element has a class of ```label``` and also, that every **input** has a class of ```inputField``` - these MUST be added.

It is alaso important to note that this script WON'T work if the ```input``` element is INSIDE the ```label``` element 

**example**

```HTML

<!-- Works -->
<label for="">Label</label>
<input type="text">

<!-- Wont work  -->
<label for="">
  <input type="text">
</label>

```

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
 **Entering the custom error message:**
 
 ```CSS
 
  .name.field-empty .err-message:after {
    content: "Please enter your Name";
  }

  .first-name.field-empty .err-message:after {
    content: "Please enter your first name";
  }
  
  .last-name.field-empty .err-message:after {
    content: "Please enter your last name";
  }

  .email.field-empty .err-message:after {
    content: "Please enter your Email";
  }
  
  .password.field-empty .err-message:after {
    content: "Please enter your Password";
  }
  
  .number-of-guests.field-empty .err-message:after {
    content: "Please enter your Number of guests";
  } 
  
  .tel.field-empty .err-message:after {
    content: "Please enter your Contact number";
  } 
 
 ```
 
 **adding a new error message:**
 
 ```CSS
 
 .new-class.field-empty .err-message:after {
    content: "My custom message";
  } 
 
 ```
 
 ```HTML

  <label for="" class="new-class label">My New input</label>
  <input type="text" class="inputField">

```
 
 
 **codepen example:**
https://codepen.io/Woodenchops/pen/PoYveKb

 
 - **form** : the form you wish to target
 - **label** : the label you wish to target
 - **input** : which input fields are you targeting
 - **submit** : target the submit button for form

 
