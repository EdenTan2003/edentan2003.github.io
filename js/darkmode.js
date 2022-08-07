//Use localstorage to store darkmode
let darkMode = localStorage.getItem('darkMode');
const darkModeBtn = document.querySelector('#darkModeButton');

// Check if darkmode is enabled

const enableDarkMode = () => {
    //Add class darkmode to body
    document.body.classList.add('darkmode');
    //Update darkmode in localstorage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    //Add class darkmode to body
    document.body.classList.remove('darkmode');
    //Update darkmode in localstorage
    localStorage.setItem('darkMode', 'disabled');
};

//Make sure darkmode stays if previous time is darkmode
if (darkMode === 'enabled') {
    enableDarkMode();
    darkModeBtn.innerHTML = "Light Mode";
}

//Toggle between dark and light mode
darkModeBtn.addEventListener('click', function (e) {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        e.target.innerHTML = "Light Mode";
    } else {
        disableDarkMode();
        e.target.innerHTML = "Dark Mode";
    }

})
