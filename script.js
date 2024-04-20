document.querySelector("#form").addEventListener('submit', function(e) {
    e.preventDefault()
    myText()
})

function myText() {
    let message, text;
    let errElement = document.getElementById('text');
    message = document.getElementById('err');
    text = document.getElementById('text').value;



    try {
        if (text == "") {
            errElement.classList.remove('valid');
            errElement.classList.add('err');
            throw 'bosh'
        }
        if (text.length > 0) {
            errElement.classList.remove('err');
            errElement.classList.add('valid');
            message.innerHTML = '';
        }
    } catch (e) {
        message.innerHTML = 'Qiymat' + e;
    }
}