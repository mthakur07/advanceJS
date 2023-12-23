const API_KEY = 'c9b6927b5db19d8ae51c7aa02721a6bf';
const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');

form.addEventListener(
    'submit', function(event){
        console.log(search.value);
        event.preventDefault();
        // form ka by default nature hota hai submit hote hi 
        //reload hona lekin preventdefault iske by default nature ko rukwa deta hai
    })

const getWeather = async(city)=> {
    const url = 'https://api.openwhethermap.org/data/2.5/weather?${city}&appid=${API_KEY}&units=metric';


    } 