const ul = document.querySelector("ul.list");

for (let x = 1; x < 101; x++) {
    if (x % 15 == 0) {
        const element15 = `<li class="box box15">FizzBuzz</li>`;
        ul.innerHTML += element15;
    }

    else if (x % 3 == 0) {
        const element3 = `<li class="box box3">Fizz</li>`;
        ul.innerHTML += element3;
    }

    else if (x % 5 == 0) {
        const element5 = `<li class="box box5">Buzz</li>`;
        ul.innerHTML += element5;
    }

    else {
        const element = `<li class="box box1">${x}</li>`;
        ul.innerHTML += element;
    }
}