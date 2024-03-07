document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.information__name, .information__email');

    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            input.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            if (input.value === '') {
                input.classList.remove('focused');
            }
        });
    });
});
