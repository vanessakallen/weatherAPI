//setting variables using querySelector
let input = document.querySelector('.input_text');
let button = document.querySelector('.submit');
let main = document.querySelector('#name');

let report = document.querySelector('.report');
let temp = document.querySelector('.temp');
let clouds = document.querySelector('.clouds');


//button that with onlick, runs the API function
button.addEventListener('click', function (name) {
    //api link and key
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&vancouver&appid=7e94a1a3c6e07c79264dd3c5ef5abf83')
        //if successful, then...
        .then(response => response.json())
        .then(data => {
            //setting variables for data values
            let tempValue = data['main']['temp'];
            let nameValue = data['name'];
            let reportValue = data['weather'][0]['description'];

            //how it displays in the browser
            main.innerHTML = nameValue;
            report.innerHTML = "Report: " + reportValue;
            temp.innerHTML = "Temperature: " + tempValue;
            //resetting the input to blank string
            input.value = "";

        })

        //error if the city name is not a real city
        .catch(err => alert("Not a valid city name :("));
})