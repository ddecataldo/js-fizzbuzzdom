const containerFizzBuzz = document.getElementById("fizzBuzz-container");

const row = document.createElement("div");
row.classList.add("row", "g-3");


for (let i = 1; i <= 100; i++) {

    let bgColor = "bg-primary";
    let text = i;

    const multiplo3 = i % 3 === 0;
    const multiplo5 = i % 5 === 0;


    if (multiplo3 && multiplo5) {
        bgColor = "bg-danger";
        text = "fizzbuzz"
    } else if (multiplo5) {
        bgColor = "bg-warning";
        text = "buzz"
    } else if (multiplo3) {
        bgColor = "bg-success";
        text = "fizz"
    }

    row.innerHTML += `<div class="my-col-7">
                        <div class="ratio ratio-1x1 border ${bgColor}">
                          <div class="d-flex align-items-center justify-content-center">${text}</div>
                        </div>
                      </div>`;

    containerFizzBuzz.append(row);

}