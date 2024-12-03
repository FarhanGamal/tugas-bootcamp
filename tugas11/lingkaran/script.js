function lingkaran() {
    let phi = 3.14
    let jari = document.getElementById("jari").value;
    let luas = phi * jari ** 2;
    let keliling = 2 * phi * jari;
    let hasil = `hasil : ${luas} keliling : ${keliling}`
    document.getElementById("hasil").innerHTML = hasil;
}
