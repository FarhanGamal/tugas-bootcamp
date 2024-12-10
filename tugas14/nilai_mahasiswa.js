import Mahasiswa from './mahasiswa.js'
import Nilai from './nilai.js'

class nilaiMahasiswa {
    constructor (id, nim, nama, jenis_kelamin, ipk, mata_kuliah, nilai) {
        this.id = id;
        // this.nim = nim;
        // this.nama = nama;
        // this.jenis_kelamin = jenis_kelamin;
        // this.ipk = ipk;
        // this.mata_kuliah = mata_kuliah;
        // this.nilai = nilai;

        this.mahasiswa = new Mahasiswa(nim, nama, jenis_kelamin, ipk);
        this.nilai = new Nilai(mata_kuliah, nilai);
    }
}

export default nilaiMahasiswa;