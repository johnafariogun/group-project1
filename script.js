// function detectNumber() {
//     const phoneNumber = document.getElementById('phoneNumber').value;
//     const result = document.getElementById('result');
    

//     if (phoneNumber !== '') {
//         let number = phoneNumber.split(" ").join('')
        
//         if (number.length >= 11) {
//             if (number.substring(0, 4) === "+234"){
//                 number = 0 + number.slice(4);
//             }
//             console.log(number);
//             const prefix = number.substring(0, 4);
//             if (prefix === '0803' ||
//             prefix === '0703' ||
//             prefix === '0903' ||
//             prefix === '0806' ||
//             prefix === '0706' ||
//             prefix === '0813' ||
//             prefix === '0810' ||
//             prefix === '0814' ||
//             prefix === '0816') {
//             result.textContent = 'Mobile Provider: MTN';
//         } else if (prefix === '0805' ||
//             prefix === '0705' ||
//             prefix === '0905' ||
//             prefix === '0807' ||
//             prefix === '0815' ||
//             prefix === '0811' ||
//             prefix === '0905') {
//             result.textContent = 'Mobile Provider: GLO';
//         } else if (prefix === '0809' ||
//             prefix === '0909' ||
//             prefix === '0817' ||
//             prefix === '0818') {
//             result.textContent = 'Mobile Provider: 9MOBILE';
//         } else if (prefix === '0802' ||
//             prefix === '0902' ||
//             prefix === '0701' ||
//             prefix === '0808' ||
//             prefix === '0708' ||
//             prefix === '0812') {
//             result.textContent = 'Mobile Provider: AIRTEL';
//         } else {
//             result.textContent = 'Mobile Provider: UNKNOWN';
//         }
           
//         } else {
//             result.textContent = 'Please enter a valid phone number.';
//         }
//     } else {
//         result.textContent = 'Phone number field cannot be empty.';
//     }
// }

function detectNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const result = document.getElementById('result');

    if (phoneNumber !== '') {
        let number = phoneNumber.split(" ").join('');

        if (number.length >= 11) {
            if (number.substring(0, 4) === "+234") {
                number = '0' + number.slice(4);
            }
            const prefix = number.substring(0, 4);
            let imageSource = getOperatorImageSource(prefix);

            // Create an image element
            let img = new Image();
            img.src = imageSource;
            img.width = 100; // Set the width of the image
            img.height = 100; // Set the height of the image

            // Clear the previous result text
            result.textContent = '';

            // Append the image to the result div
            result.appendChild(img);
        } else {
            result.textContent = 'Please enter a valid phone number.';
        }
    } else {
        result.textContent = 'Phone number field cannot be empty.';
    }
}

function getOperatorImageSource(prefix) {
    switch (prefix) {
        case '0803':
        case '0703':
        case '0903':
        case '0806':
        case '0706':
        case '0813':
        case '0810':
        case '0814':
        case '0816':
            return 'mtn.png'; // Replace with the actual MTN image source

        case '0805':
        case '0705':
        case '0905':
        case '0807':
        case '0815':
        case '0811':
        case '0905':
            return 'Glo_Limited.png'; // Replace with the actual GLO image source

        case '0809':
        case '0909':
        case '0817':
        case '0818':
            return '9mobile.png'; // Replace with the actual 9MOBILE image source

        case '0802':
        case '0902':
        case '0701':
        case '0808':
        case '0708':
        case '0812':
            return 'airtel.png'; // Replace with the actual AIRTEL image source

        default:
            return ''; // Replace with the actual UNKNOWN image source
    }
}

