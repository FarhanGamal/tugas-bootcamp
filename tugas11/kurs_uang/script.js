function convert() {
    let v1 = document.getElementById('valuta1').value;
    let s1 = document.getElementById('nilaiTukar').value;
    let hasil = v1 / 15945;

    if (s1 == 'USD') {
        hasil = v1 * 15945;
    } else if (s1 == 'SGD'){
        hasil = v1 * 11837;
    } else if (s1 == 'Ringgit'){
        hasil = v1 * 3566;
    } else if (s1 == 'Yen'){
        hasil = v1 * 106;
    } else if (s1 == 'Euro'){
        hasil = v1 * 16723;
    } else if (s1 == 'Riyal'){
        hasil = v1 * 4241;
    } else {
        hasil = '0';
    }

    document.getElementById('valuta2').value = hasil; 
}

function convert2() {
    let v2 = document.getElementById('valuta2').value;
    let s2 = document.getElementById('nilaiTukar').value;
    let hasil2 = v2 * 15945;

    if (s2 == 'USD') {
        hasil2 = v2 / 15945;
    } else if (s2 == 'SGD'){
        hasil2 = v2 / 11837;
    } else if (s2 == 'Ringgit'){
        hasil2 = v2 / 3566;
    } else if (s2 == 'Yen'){
        hasil2 = v2 / 106;
    } else if (s2 == 'Euro'){
        hasil2 = v2 / 16723;
    } else if (s2 == 'Riyal'){
        hasil2 = v2 / 4241;
    } else {
        hasil2 = '0';
    }

    document.getElementById('valuta1').value = hasil2; 
}