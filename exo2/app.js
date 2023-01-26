const contactForm = document.getElementById("contactForm");


contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const addressInput = document.getElementById("address");
    const sizeInput = document.getElementById("size");
    const pizzaInput = document.getElementById("pizza");

    
    const formData = {
        name: nameInput.value,
        phone: phoneInput.value,
        address: addressInput.value,
        size: sizeInput.value,
        pizza: pizzaInput.value,
    }
   
    const errors = {
        nameError: false,
        phoneError: false,
        addressError: false,
        tailleError: false,
        pizzaError: false,
    }
    
    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const addressError = document.getElementById("addressError");
    const sizeError = document.getElementById("sizeError");
    const pizzaError = document.getElementById("pizzaError");
    
    nameError.style.display = 'none';
    phoneError.style.display = 'none';
    addressError.style.display = 'none';
    sizeError.style.display = 'none';
    pizzaError.style.display = 'none';

    
    
    if (!formData.name || !formData.phone || !formData.address || !formData.size || !formData.pizza) {
        const nameRegex = /^[a-zA-Z ]+$/;
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        const addressRegex = /([0-9]*) ?([a-zA-Z,\. ]*) ?([0-9]{5}) ?([a-zA-Z]*)/;
            
        if (!formData.name || !nameRegex.test(formData.name)) {
            errors.name = true;
            nameError.style.display = 'block';
        }
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
                errors.phone = true;
                phoneError.style.display = 'block';
            }
            if (!formData.address || !addressRegex.test(formData.address)) {
                errors.address = true;
                addressError.style.display = 'block';
            }
            if (!size.value) {
                errors.size = true;
                sizeError.style.display = 'block';
            }
            if (!pizza.value) {
                errors.pizza = true;
                pizzaError.style.display = 'block';
            }
        }
                     
        if (!Object.values(errors).includes(true)) {
            console.log(formData);
            contactForm.reset();           
            const button = document.getElementById('submit');
            button.addEventListener('click', function() {
                alert('Votre commande a bien été prise en compte !')           
            })        
        }
        
});   
    
    
const sizesPrice = {
    small: 3,
    medium: 6,
    large: 9
}
    
const ingredientsPrice = {
    classique: 8,
    buffalo: 12,
    poulet: 10,
    fromage: 11,
    blanche: 9,
    mer: 12,
    vegan: 9    
}

const sizeSelect = document.getElementById('size');
const ingredientSelect = document.getElementById('pizza');
const total = document.getElementById('total');
    
let sizePrice = 0;
let ingredientPrice = 0
    

sizeSelect.addEventListener('change', () => {

    if (sizeSelect.value) {
        sizePrice = sizesPrice[sizeSelect.value];
    } else {
        sizePrice = 0;
    };

    total.textContent = `Total de la commande = ${sizePrice + ingredientPrice}€`;
        
});

ingredientSelect.addEventListener('change', (event) => {

    if (ingredientSelect.value) {
        ingredientPrice = ingredientsPrice[ingredientSelect.value];
    } else {
        ingredientPrice = 0;
    };

    total.textContent = `Total de la commande = ${sizePrice + ingredientPrice}€`;

});