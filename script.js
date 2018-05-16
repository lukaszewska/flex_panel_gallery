const parts = document.querySelectorAll('.part');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')) { //jesli transition zawieraz słówko flex
        this.classList.toggle('open-active'); //dodoajemy klasę 'open-active'
    }
}

//lub jedna funkcja, wtedy transition flex i pojawaijące się czcionki dzieją się równocześnie: 
// function toggleOpen() {
//     this.classList.toggle('open');
//     this.classList.toggle('open-active');
// }

parts.forEach(part => part.addEventListener('click', toggleOpen));
parts.forEach(part => part.addEventListener('transitionend', toggleActive)); //nasłuchujemy końca transition czyli 'transionend'