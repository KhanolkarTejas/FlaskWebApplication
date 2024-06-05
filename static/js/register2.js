const register = document.getElementById('register')
const adharno  = document.getElementById('user_aadhar_no')
const pancard  = document.getElementById('user_pancard_no')

register.addEventListener('click',(e)=>{
  if(
    validateIndianPhoneNumber(document.getElementById('user_contact').value)  &&
    validatePANCardNumber(pancard.value)  &&
    validateAadharCardNumber(adharno.value)&&
    validateAge(calculateAge()) || e.preventDefault()  
  ){
    e.preventDefault()
  }else{
    document.getElementById('error-msg').innerText='enter wrong credentionals';
  }

})

adharno.addEventListener('input',()=>{
  validateAadharCardNumber(adharno.value) || console.log('wrong credential');
  validateAadharCardNumber(adharno.value)?adharno.style.border = "2px solid green":adharno.style.border = "2px solid red";
})



const validateAge=(age)=>parseInt(age)>=18?true:false;
  
function validateIndianPhoneNumber(number) {
    // Regular expression for Indian phone numbers
    var indianNumberPattern = /^[6-9]\d{9}$/;
    return indianNumberPattern.test((number));
}

function validatePANCardNumber(panNumber) {
    // PAN card numbers follow a specific pattern
    var panPattern = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panPattern.test(panNumber);
  }
  
  // Function to validate Aadhar card numbers
  function validateAadharCardNumber(aadharNumber) {
    // Aadhar card numbers have a specific pattern
    var aadharPattern = /^\d{4}\s\d{4}\s\d{4}$/;
    return aadharPattern.test(aadharNumber);
  }

  function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
    const AGE =document.getElementById("age")
    AGE.value = age;
    parseInt(AGE.value)>18?AGE.style.border = "2px solid green":AGE.style.border = "2px solid red";

}


