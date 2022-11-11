
let button = document.getElementById("add-item-btn");
let container = document.getElementById("container");
button.addEventListener('click', function(evt) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML += `<div class="modalWindow" id="modalWindow" style="background-color: blue; width: 300px; height: 50px; text-align: center">
    <span style="font-size: 15px;">Здравствуйте, модалка сама исчезнет через 5 секунд.</span>
    <input class="exit" id="exit" type="button" value="Закрыть"></div>`;
    container.append(newDiv);
    setTimeout(() => newDiv.remove(), 5000);
    document.getElementById("exit").addEventListener('click', () => newDiv.remove());
})

