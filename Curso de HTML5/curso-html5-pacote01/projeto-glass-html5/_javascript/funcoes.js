function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}


function calc_total(){
    var quantidade = parseInt(document.getElementById('cqtd'). value);
    total = quantidade * 1500;
    document.getElementById('cpreco'). value = total;
}