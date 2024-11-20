document.querySelectorAll('.method').forEach(method => {
    method.addEventListener('click', function() {
        document.querySelectorAll('.method').forEach(m => m.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.getElementById('submit-button').addEventListener('click', function() {
    const selectedMethod = document.querySelector('.method.selected span').innerText;
    document.getElementById('selected-method').innerText = selectedMethod;
    document.querySelector('.payment-container').classList.add('hidden');
    document.querySelector('.form-container').classList.remove('hidden');
});

document.getElementById('user-details-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    console.log(`Name: ${name}, Email: ${email}, Address: ${address}`);
    
    document.querySelector('.form-container').classList.add('hidden');
    document.querySelector('.result').classList.remove('hidden');
});
