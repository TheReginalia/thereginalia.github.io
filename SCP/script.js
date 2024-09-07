function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validCombinations = {
        '1': '1',
        'DanielleGonzalez': '5053318662',
        'MargaretThien': '2696716504',
        'TunaTerry': '2892564990',
        'EdgarGraves': '7416615711'
    };

    if (validCombinations[username] === password) {
        const formattedUsername = username.replace(/([a-z])([A-Z])/g, '$1 $2');

        localStorage.setItem('username', formattedUsername);

        const logo = document.getElementById('logo');
        logo.classList.add('grow-spin');

        setTimeout(() => {
            const fade = document.getElementById('fade');
            fade.classList.add('visible');

            setTimeout(() => {
                window.location.href = 'scpnext/scphome.html';
            }, 1000);
        }, 2000);

        return false;
    } else {
        alert('Invalid username or password');
        return false;
    }
}
