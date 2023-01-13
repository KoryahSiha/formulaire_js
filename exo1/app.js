const contactForm = document.getElementById("contactForm");

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        password: passwordInput.value,
    }

    const errors = {
        name: false,
        email: false,
        phone: false,
        password: false
    }
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    passwordError.style.display = 'none';
    
    
    
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
        const nameRegex = /^[a-zA-Z ]+$/;
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,30}$/;
        
        if (!formData.name || !nameRegex.test(formData.name)) {
            errors.name = true;
            nameError.style.display = 'block';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = true;
            emailError.style.display = 'block';
        }
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            errors.phone = true;
            phoneError.style.display = 'block';
        }
        if (!formData.password || !passwordRegex.test(formData.password)) {
            errors.password = true;
            passwordError.style.display = 'block';
        }
        const buttonSubmit = document.getElementById('submit');
        
        buttonSubmit.addEventListener('click', (event) => {
            if (errors.name || errors.email || errors.phone || errors.password) {
                event.preventDefault();
            } else {
                console.log(formData)
            }
        })
        
    } else {
        console.log(formData)
    }
})
