function convertToRoman(num) {
    let val = '';
    while (num != 0) {
        let div = num / 10;
        let rev = num % 10;
        while (div > 1) {
            let x = div % 5;
            val = 'V'
            switch (x) {
                case 1: val += 'I';
                    break;
                case 2: val += 'II';
                    break;
                case 3: val += 'III';
                    break;
                case 4: val += 'IV';
                    break;
            }
            div / 10;
        }


    }
    return num;
}

convertToRoman(36);