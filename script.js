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
            img.width = 100; 
            img.height = 100; 

           
            result.textContent = '';

            
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
            return 'mtn.png'; 

        case '0805':
        case '0705':
        case '0905':
        case '0807':
        case '0815':
        case '0811':
        case '0905':
            return 'Glo_Limited.png'; 

        case '0809':
        case '0909':
        case '0817':
        case '0818':
            return '9mobile.png'; 

        case '0802':
        case '0902':
        case '0701':
        case '0808':
        case '0708':
        case '0812':
            return 'airtel.png'; 

        default:
            return ''; 
    }
}

