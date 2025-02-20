document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Survey-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const roleField = document.getElementById('role');
    const recommendationField = document.getElementById('recommendation');
    const errorMessages = document.getElementById('errorMessages');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        errorMessages.innerHTML = '';
        successMessage.innerHTML = '';

        let isValid = true;
        let errors = [];

        if (nameField.value.trim() === '') {
            isValid = false;
            errors.push('Name is required.');
        }

        if (emailField.value.trim() === '') {
            isValid = false;
            errors.push('Email is required.');
        } else if (!validateEmail(emailField.value.trim())) {
            isValid = false;
            errors.push('Email format is invalid.');
        }

        if (roleField.value.trim() === '') {
            isValid = false;
            errors.push('Role selection is required.');
        }

        if (recommendationField.value.trim() === '') {
            isValid = false;
            errors.push('Recommendation is required.');
        }

        if (!isValid) {
            errors.forEach(function (error) {
                const errorItem = document.createElement('li');
                errorItem.textContent = error;
                errorMessages.appendChild(errorItem);
            });
        } else {
            successMessage.textContent = 'Form submitted successfully!';
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});