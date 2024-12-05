function hitung () {
    const panjang = document.getElementById('panjang').value;
    const lebar = document.getElementById('lebar').value;
    const tinggi = document.getElementById('tinggi').value;

    const balok1 = new Balok(panjang, lebar, tinggi);
    
    const luas = (balok1).hitungLuas();
    const keliling = (balok1).hitungKeliling();
    const volume = (balok1).hitungVolume();
    
    document.getElementById('hasil').textContent = `Luas: ${luas} cm, Keliling ${keliling} cm, volume ${volume}`
}