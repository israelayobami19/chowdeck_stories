const navigation = document.querySelector('.navigation');
const toggle_btn = document.querySelector('.dropdown_toggle');

toggle_btn.addEventListener('click', () => {
    if (navigation.classList.conatins('active')) {
        navigation.classList.remove('active')
    } else {
        navigation.classList.add('active')
    }
});