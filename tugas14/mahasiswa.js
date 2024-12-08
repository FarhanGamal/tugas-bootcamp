class Mahasiswa {
    constructor(nim, nama, jenis_kelamin, ipk) {
        this.nim = nim;
        this.nama = nama;
        this.jenis_kelamin = jenis_kelamin;
        this.ipk = ipk;
    }

    predikat () {
        if (this.predikat > 0 && this.predikat < 2.0) {
            return "Cukup";
        } else if (this.predikat >= 2.0 && this.predikat < 3.0) {
            return 'Baik';
        } else if (this.predikat >= 3.0 && this.predikat <= 3.75) {
            return 'Memuaskan';
        } else if (this.predikat >= 3.75 && this.predikat <= 4) {
            return 'CumLaude';
        } else {
            return 'Tidak valid!';
        }
    }
}

export default Mahasiswa;