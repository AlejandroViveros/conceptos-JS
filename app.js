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