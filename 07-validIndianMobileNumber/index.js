const number = '+919876543210';

//Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits
const regex = /^(\+91|0)?(\s)?\d{10}$/;
function validateMobile(number) {
    return regex.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
