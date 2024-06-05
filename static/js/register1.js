// const register = document.getElementById('register')
// const adharno  = document.getElementById('user_aadhar_no')
// const pancard  = document.getElementById('user_pancard_no')

// register.addEventListener('click', (e) => {
//     const contactValid = validateIndianPhoneNumber(document.getElementById('user_contact').value);
//     const panValid = validatePANCardNumber(pancard.value);
//     const aadharValid = validateAadharCardNumber(adharno.value);
//     // const ageValid = validateAge(calculateAge());
  
//     if (!contactValid) {
//       document.getElementById('error-msg').innerText = 'Please enter a valid phone number.';
//       e.preventDefault();
//     }
  
//     if (!panValid) {
//       document.getElementById('error-msg').innerText = 'Please enter a valid PAN card number.';
//       e.preventDefault();
//     }
  
//     if (!aadharValid) {
//       document.getElementById('error-msg').innerText = 'Please enter a valid Aadhar card number.';
//       e.preventDefault();
//     }
  
//     // if (!ageValid) {
//     //   document.getElementById('error-msg').innerText = 'Please enter a valid age.';
//     //   e.preventDefault();
//     // }
//   });
  
//   adharno.addEventListener('input', () => {
//     if (!validateAadharCardNumber(adharno.value)) {
//       console.log('Please enter a valid Aadhar card number.');
//       adharno.style.border = "2px solid red";
//     } else {
//       adharno.style.border = "2px solid green";
//     }
//   });
  
  
//   const validateAge=(age)=>parseInt(age)>=18?true:false;
    
//   function validateIndianPhoneNumber(number) {
//       // Regular expression for Indian phone numbers
//       var indianNumberPattern = /^[6-9]\d{9}$/;
//       return indianNumberPattern.test((number));
//   }
  
  
//   function validatePANCardNumber(panNumber) {
//       // PAN card numbers follow a specific pattern
//       var panPattern = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//       return panPattern.test(panNumber);
//     }
    
//     // Function to validate Aadhar card numbers
//     function validateAadharCardNumber(aadharNumber) {
//       // Aadhar card numbers have a specific pattern
//       var aadharPattern = /^\d{4}\s\d{4}\s\d{4}$/;
//       return aadharPattern.test(aadharNumber);
//     }
  
//   //   function calculateAge() {
//   //     var birthdate = new Date(document.getElementById("birthdate").value);
//   //     var today = new Date();
//   //     var age = today.getFullYear() - birthdate.getFullYear();
//   //     var monthDiff = today.getMonth() - birthdate.getMonth();
//   //     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
//   //         age--;
//   //     }
//   //     return age;
//   //     const AGE =document.getElementById("age")
//   //     AGE.value = age;
//   //     parseInt(AGE.value)>18?AGE.style.border = "2px solid green":AGE.style.border = "2px solid red";
  
//   // }
  
//   function calculateAge() {
//     var birthdate = new Date(document.getElementById("birthdate").value);
//     var today = new Date();
//     var age = today.getFullYear() - birthdate.getFullYear();
//     var monthDiff = today.getMonth() - birthdate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
//         age--;
//     }
  
//     const AGE = document.getElementById("age");
//     AGE.value = age;
  
//     // Age validation: Must be greater than 18 and less than 50
//     if (age > 18 && age < 50) {
//         AGE.style.border = "2px solid green";
//     } else {
//         AGE.style.border = "2px solid red";
//     }
//   }
  
  
  