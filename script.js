function changeColor() {

    let hex_numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'B', 'C', 'D', 'E', 'F'];

    let hexCode = '';

    for (let index = 0; index < 6; index++) {
        let randomIndex = Math.floor(Math.random() * hex_numbers.length);
        hexCode += hex_numbers[randomIndex];

    }

    let body = document.getElementsByTagName('body')[0];
    let span = document.getElementById('hex-code');
    
    body.style.background = `#${hexCode}`;
    span.innerHTML = hexCode;
}




