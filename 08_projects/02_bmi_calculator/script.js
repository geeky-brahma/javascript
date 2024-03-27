const form = document.querySelector('form')
// console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    // const height = document.querySelector('#height')
    console.log(height);
    console.log(weight);
    const results = document.querySelector('.results');
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Enter a valid number!!'
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Enter a valid number!!'
    }
    else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)
        results.innerHTML = `BMI is ${bmi}`  // Result Output
    }

})