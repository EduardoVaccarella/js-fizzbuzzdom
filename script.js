const ul = document.querySelector("ul.list");

for (let x = 1; x < 101; x++) {
    const element = `<li class="box box--${x}">${x}</li>`;
    ul.innerHTML += element;
}