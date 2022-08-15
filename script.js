(function () {
    const btnCta = document.querySelector('.submit');
    btnCta.addEventListener('click', (e) => checkPassword(e));

    function checkPassword(e) {
        const errorMessage = document.querySelector('.error-message');
        const passwordsNodeList = document.querySelectorAll('input[type=password]');
        if (passwordsNodeList[0].value !== '' && passwordsNodeList[1].value !== '') {
            if (passwordsNodeList[0].value !== passwordsNodeList[1].value) {
                e.preventDefault();
                for (const elmt of passwordsNodeList) {
                    errorMessage.innerHTML = 'Passwords do not match';
                    elmt.setAttribute('class', 'error');
                    elmt.addEventListener('input', () => {
                        if (elmt.hasAttribute('class', 'error')) {
                            elmt.removeAttribute('class', 'error');
                            errorMessage.innerHTML = '&nbsp;';
                        }
                    });
                }
            }
        }
    }

})();