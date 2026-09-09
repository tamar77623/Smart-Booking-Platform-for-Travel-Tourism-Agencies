let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let select1 = document.getElementById('select1');
let inp3 = document.getElementById('inp3');
let select2 = document.getElementById('select2');
let inp4 = document.getElementById('inp4')
let btn = document.getElementById('btn')
let h3 = document.getElementById('h3')
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let Totalindinars;
function h3text(){
    setTimeout(() => {
        h3.innerText=  '';
    }, 1600);
}
btn.onclick = function() {
    if (inp1.value === "") { h3.innerText = "Please enter your name"; h3text(); return; }
    if (inp2.value === "") { h3.innerText = "Please enter your phone number"; h3text(); return; }
    if (inp2.value.length != 11) { h3.innerText = 'Please enter a valid phone number'; h3text(); return; }
    if (select1.value === "") { h3.innerText = "Please select a tourist destination"; h3text(); return; }
    if (inp3.value === "") { h3.innerText = "Please enter the travel date"; h3text(); return; }
    if (select2.value === "") { h3.innerText = 'Please select a mode of travel'; h3text(); return; }
    account();
    sendresult();
    clearinput();
}

function account() {
    let Costperperson = Number(select1.value) + Number(select2.value);
    let Totalindollars = Number(inp4.value) * Costperperson;
    Totalindinars = Totalindollars * 1500;
    span1.innerText = 'Cost per person: ' + Costperperson;
    span2.innerText = "Final cost: " + Totalindinars + " Dinars";
}

function clearinput() {
    inp1.value = '';
    inp2.value = '';
    inp3.value = '';
    inp4.value = '';
    select1.value = '';
    select2.value = '';
}

function sendresult() {
    let destinationText = select1.options[select1.selectedIndex].text;
    let travelMethodText = select2.options[select2.selectedIndex].text;
    let result = `New booking request ✈️ • Name: ${inp1.value} • Phone Number: ${inp2.value} • Destination: ${destinationText} • Travel Date: ${inp3.value} • Travel Method: ${travelMethodText} • Number of Travelers: ${inp4.value} 💳 Total: ${Totalindinars} Iraqi Dinars`;
    let encodedMessage = encodeURIComponent(result);
    let phoneNumber = "9647833555193";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}
