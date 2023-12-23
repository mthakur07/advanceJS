const form = document.querySelector('form')

/* The code is adding an event listener to the form element. When the form is submitted, the function
inside the event listener is executed. The `e.preventDefault()` method prevents the default form
submission behavior, which is to refresh the page. The code then retrieves the values of the height
and weight input fields, converts them to integers using `parseInt()`, and assigns them to the
`height` and `weight` variables, respectively. */

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = parseInt(document.querySelector('#results').value)

    if (height === "" || height > 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === "" || weight > 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    }

    else {
       const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       results.innerHTML = `<span>${bmi}</span>` 
    }

}) 