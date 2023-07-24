// Subscription Notification Modal Code
const subscriptionModal = () => {
    document.querySelector('.subscription__form').addEventListener('submit', e => {
        e.preventDefault();
        document.querySelector('#email').value = '';
        document.querySelector('.subscription__notification').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.subscription__notification').style.display = 'none';
        }, 2000)
    });
};

export default subscriptionModal;