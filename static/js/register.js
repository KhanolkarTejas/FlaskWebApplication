document.addEventListener("DOMContentLoaded", () => {
    // Define constants for each field
    const registerButton = document.getElementById('register');
    const aadharNoField = document.getElementById('user_aadhar_no');
    const panCardField = document.getElementById('user_pancard_no');
    const contactField = document.getElementById('user_contact');
    const birthdateField = document.getElementById('birthdate');
    const ageField = document.getElementById('age');
    const errorMsg = document.getElementById('error-msg');

    // Define constants for error message fields
    const userContactError = document.getElementById('user_contact_error');
    const userPanCardError = document.getElementById('user_pancard_no_error');
    const userAadharError = document.getElementById('user_aadhar_no_error');
    const ageError = document.getElementById('age_error');

    // Validation functions
    const validateAge = (age) => parseInt(age) >= 18;

    function validateIndianPhoneNumber(number) {
        const indianNumberPattern = /^[6-9]\d{9}$/;
        return indianNumberPattern.test(number);
    }

    function validatePANCardNumber(panNumber) {
        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panPattern.test(panNumber);
    }

    function validateAadharCardNumber(aadharNumber) {
        const aadharPattern = /^\d{4}\s\d{4}\s\d{4}$/;
        return aadharPattern.test(aadharNumber);
    }

    function calculateAge() {
        const birthdate = new Date(birthdateField.value);
        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        ageField.value = age;
        return age;
    }

    // Register button click event
    registerButton.addEventListener('click', (e) => {
        let isValid = true;

        // Validate contact number
        if (!validateIndianPhoneNumber(contactField.value)) {
            userContactError.innerText = 'Invalid contact number';
            isValid = false;
        } else {
            userContactError.innerText = '';
        }

        // Validate PAN card number
        if (!validatePANCardNumber(panCardField.value)) {
            userPanCardError.innerText = 'Invalid PAN card number';
            isValid = false;
        } else {
            userPanCardError.innerText = '';
        }

        // Validate Aadhar card number
        if (!validateAadharCardNumber(aadharNoField.value)) {
            userAadharError.innerText = 'Invalid Aadhar card number';
            isValid = false;
        } else {
            userAadharError.innerText = '';
        }

        // Validate age
        const age = calculateAge();
        if (!validateAge(age)) {
            ageError.innerText = 'You must be at least 18 years old';
            isValid = false;
        } else {
            ageError.innerText = '';
        }

        if (!isValid) {
            e.preventDefault();
            errorMsg.innerText = 'Please correct the errors in the form';
        }
    });

    // Real-time validation for Aadhar card number
    aadharNoField.addEventListener('input', () => {
        if (validateAadharCardNumber(aadharNoField.value)) {
            aadharNoField.style.border = "2px solid green";
            userAadharError.innerText = '';
        } else {
            aadharNoField.style.border = "2px solid red";
            userAadharError.innerText = 'Invalid Aadhar card number';
        }
    });

    // Real-time validation for PAN card number
    panCardField.addEventListener('input', () => {
        if (validatePANCardNumber(panCardField.value)) {
            panCardField.style.border = "2px solid green";
            userPanCardError.innerText = '';
        } else {
            panCardField.style.border = "2px solid red";
            userPanCardError.innerText = 'Invalid PAN card number';
        }
    });

    // Real-time validation for contact number
    contactField.addEventListener('input', () => {
        if (validateIndianPhoneNumber(contactField.value)) {
            contactField.style.border = "2px solid green";
            userContactError.innerText = '';
        } else {
            contactField.style.border = "2px solid red";
            userContactError.innerText = 'Invalid contact number';
        }
    });
});
