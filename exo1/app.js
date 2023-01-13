// récupère le formulaire par son id
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // // récupère les éléments par leur id  
    // const nameInput = document.getElementById("name");
    // const emailInput = document.getElementById("email");
    // const phoneInput = document.getElementById("phone");
    // const passwordInput = document.getElementById("password");
    

    /* récupére les données du formulaire. */
    const formData = new FormData(contactForm);
    
    /* récupère les éléments "error". */
    const errors = {
        name: document.getElementById('nameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError'),
        password: document.getElementById('passwordError'),
    }


    /* crée une variable pour vérifier s'il y a une erreur ou non. */
    let error = false;

    /* crée un objet pour stocker les données de l'itilisateur */
    const userData = {};
    
    // crée les regex
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{minlength,maxlength}$/;
    
/* forEach() = pour chaque élément */
    formData.forEach((value, key) => {
    /* vérifie si la valeur est vide ou non. Si oui il attribue une erreur à l'élément et affiche l'erreur. */
        if (!value) {
            error = true;
            errors[key].style.display = 'block';
        /* si la valeur n'est pas vide, il vérifie si celle-ci et valide ou pas. Si elle n'est pas valide, il attribue une erreur à l'élement. Si elle est valide, il enlève l'erreur. */
        /* test() vérifie la correspondance et renvoie vrai ou faux (valide ou pas) */
        } else {
            if (key === 'name' && !nameRegex.test(value)) {
                error = true;
                return errors[key].style.display = 'block';
            } else if (key === 'email' && !emailRegex.test(value)) {
                error = true;
                return errors[key].style.display = 'block';
            } else if (key === 'phone' && !phoneRegex.test(value)) {
                error = true;
                return errors[key].style.display = 'block';
            } else if (key === 'password' && !passwordRegex.test(value)) {
                error = true;
                return errors[key].style.display = 'block';
            }

            /* vérifie s'il y a une erreur.*/
            error = false;
            errors[key].style.display = 'none';
        }
    });

    /* s'il n'y a pas d'erreur, affiche les données et efface les champs du formulaire. */
    if (!error) {
        console.log(formData);
        contactForm.reset();
    }
});