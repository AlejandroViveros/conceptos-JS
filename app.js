function multiply() {
    const number = document.getElementById("txtNumber").value;
    let content = ` <table class="table"> 
        <tr> <td> Operacion </td> <td> Resultado </td> </tr>`;
    for (let c = 1; c <= 10; c++) {
        content += `<tr>
        <td>${number} x ${c}</td>
        <td>${number*c}</td>
     </tr>`
    }
    content += `</table>`
    document.getElementById("response").innerHTML = content;
}

function binary() {
    let number = document.getElementById("txtNumber2").value;
    let q = "";
    do {
        if (number % 2 == 0) {
            q += "0";
        } else {
            q += "1";
        }
        number = parseInt(number/2); 

    } while (number!=0);
    document.getElementById("txtResponse").value = q;

}