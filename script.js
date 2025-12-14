document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');

 
    successMessage.style.display = 'none';

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        // Reset success message
        successMessage.style.display = 'none';

        // Get input values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const age = document.getElementById('age').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validation checks

        if (fullName === '') {
            alert('Full Name is required.');
            return;
        }
        if (fullName.split(/\s+/).length < 2) {
            alert('Full Name must contain at least two words (e.g., first and last name).');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address (e.g., example@domain.com).');
            return;
        }

        if (age === '' || isNaN(age) || Number(age) < 18) {
            alert('You must be at least 18 years old.');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long and contain:\n- One uppercase letter\n- One number\n- One special character (@$!%*?&)');
            return;
        }

        if (password !== confirmPassword) {
            alert('Confirm Password does not match the Password.');
            return;
        }

        successMessage.style.display = 'block';
        alert('Registration successful! Welcome!');

        form.reset();
    });
});