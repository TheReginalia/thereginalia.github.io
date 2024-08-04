function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validCombinations = {
        'SarahSmith': 'Pass',
        'Test2U': 'Test2P',
        'Test3U': 'Test3P',
        'Test4U': 'Test4P',
        'Test5U': 'Test5P'
    };

    if (validCombinations[username] === password) {
        // Format the username (e.g., add a space between 'Sarah' and 'Smith')
        const formattedUsername = username.replace(/([a-z])([A-Z])/g, '$1 $2');

        // Store the formatted username in localStorage
        localStorage.setItem('username', formattedUsername);

        const logo = document.getElementById('logo');
        logo.classList.add('grow-spin');

        setTimeout(() => {
            const fade = document.getElementById('fade');
            fade.classList.add('visible');

            setTimeout(() => {
                window.location.href = 'scpnext/scphome.html';
            }, 1000); // Wait for the fade animation to complete (1 second)
        }, 2000); // Wait for the logo animation to complete (2 seconds)

        return false; // Prevent form submission
    } else {
        alert('Invalid username or password');
        return false; // Prevent form submission
    }
}
