let noClickCount = 0;

function yesClick() {
    document.getElementById('main-image').src = '5.gif';
    document.getElementById('main-text').innerText = 'Hehehehe, I knew it! Love you a lot 😘';
    document.getElementById('sub-text').style.display = 'none';
    document.getElementById('yes-button').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
}

function noClick() {
    noClickCount++;
    if (noClickCount === 1) {
        document.getElementById('main-image').src = '2.gif';
        document.getElementById('main-text').innerText = 'Please think again! 🙄';
        document.getElementById('sub-text').innerText = 'itni jaldi nahi matt bolo😢';
    } else if (noClickCount === 2) {
        document.getElementById('main-image').src = '3.gif';
        document.getElementById('main-text').innerText = 'Ek aur baar Soch lo! 😠';
        document.getElementById('sub-text').innerText = 'kyu aisa kar rahi ho 😢';
    } else if (noClickCount === 3) {
        document.getElementById('main-image').src = '4.gif';
        document.getElementById('main-text').innerText = 'Baby Man jao na! Kitna bhav khaoogi 😭';
        document.getElementById('sub-text').innerText = 'bhut glt baat hai yaar😭';
        document.getElementById('no-button').onmouseover = moveNoButton;
    }
}

function moveNoButton() {
    const noButton = document.getElementById('no-button');
    noButton.classList.add('moving');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const newTop = Math.random() * (containerRect.height - buttonRect.height);
    const newLeft = Math.random() * (containerRect.width - buttonRect.width);

    noButton.style.top = `${newTop}px`;
    noButton.style.left = `${newLeft}px`;
}
