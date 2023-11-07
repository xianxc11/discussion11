function challenge1() {
    if(document.querySelector('#subscribe').checked) {
        document.getElementById("emailDiv").style.display = "block";
    } else {
        document.getElementById("emailDiv").style.display = "none";
    }
}

document.querySelector('#subscribe').addEventListener('click', challenge1);