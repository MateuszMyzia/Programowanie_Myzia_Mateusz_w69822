document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Imię
    const firstName = document.getElementById('first-name');
    if (!hasValue(firstName)) {
        showError(firstName, 'Pole Imię jest wymagane.');
        valid = false;
    } else {
        clearError(firstName);
    }

    // Nazwisko
    const lastName = document.getElementById('last-name');
    if (!hasValue(lastName)) {
        showError(lastName, 'Pole Nazwisko jest wymagane.');
        valid = false;
    } else {
        clearError(lastName);
    }

    // Email
    const email = document.getElementById('email');
    if (!hasValue(email)) {
        showError(email, 'Pole Email jest wymagane.');
        valid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Adres email jest nieprawidłowy.');
        valid = false;
    } else {
        clearError(email);
    }

    // Hasło
    const password = document.getElementById('password');
    if (!hasValue(password)) {
        showError(password, 'Pole Hasło jest wymagane.');
        valid = false;
    } else if (!isValidPassword(password.value)) {
        showError(password, 'Hasło musi zawierać co najmniej 8 znaków, w tym jedną wielką literę, jedną małą literę i jedną cyfrę.');
        valid = false;
    } else {
        clearError(password);
    }

    // Powtórz Hasło
    const confirmPassword = document.getElementById('confirm-password');
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Hasła muszą się zgadzać.');
        valid = false;
    } else {
        clearError(confirmPassword);
    }

    // Płeć
    const gender = document.getElementById('gender');
    if (!hasValue(gender)) {
        showError(gender, 'Pole Płeć jest wymagane.');
        valid = false;
    } else {
        clearError(gender);
    }

    // Telefon
    const phone = document.getElementById('phone');
    if (!hasValue(phone)) {
        showError(phone, 'Pole Telefon jest wymagane.');
        valid = false;
    } else if (!isValidPhone(phone.value)) {
        showError(phone, 'Numer telefonu musi składać się z 9 cyfr.');
        valid = false;
    } else {
        clearError(phone);
    }

    // Data Urodzenia
    const birthDate = document.getElementById('birth-date');
    if (!hasValue(birthDate)) {
        showError(birthDate, 'Pole Data Urodzenia jest wymagane.');
        valid = false;
    } else if (!isAdult(birthDate.value)) {
        showError(birthDate, 'Musisz być pełnoletni.');
        valid = false;
    } else {
        clearError(birthDate);
    }

    // Kraj
    const country = document.getElementById('country');
    if (!hasValue(country)) {
        showError(country, 'Pole Kraj jest wymagane.');
        valid = false;
    } else {
        clearError(country);
    }

    if (valid) {
        alert('Formularz został poprawnie wypełniony!');
        // Można tu dodać dalszą logikę, np. wysłanie formularza
    }
});

function hasValue(input) {
    return input.value.trim() !== '';
}

function showError(input, message) {
    const errorDiv = document.getElementById(`${input.id}-error`);
    errorDiv.textContent = message;
    input.setCustomValidity(message);
}

function clearError(input) {
    const errorDiv = document.getElementById(`${input.id}-error`);
    errorDiv.textContent = '';
    input.setCustomValidity('');
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordPattern.test(password);
}

function isValidPhone(phone) {
    const phonePattern = /^[0-9]{9}$/;
    return phonePattern.test(phone);
}

function isAdult(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        return age > 18;
    }
    return age >= 18;
}
