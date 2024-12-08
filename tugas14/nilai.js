class Nilai {
    constructor (mata_kuliah, nilai){
        this.mata_kuliah = mata_kuliah;
        this.nilai = nilai;
    }

    grade() {
        if (this.grade >= 0 && this.grade <= 35) {
            return "kekurangan berat badan";
        } else if (this.grade >= 36 && this.grade <= 55 ) {
            return 'normal (ideal)';
        } else if (this.grade >= 56 && this.grade <= 69 ) {
            return 'kelebihan berat badan';
        } else if (this.grade >= 70 && this.grade <= 84 ) {
            return 'kegemukan (obesitas)';
        } else if (this.grade >= 85 && this.grade <= 100 ){
            return 'tidak valid!';
        } else {
            return 'tidak valid!';
        }

    }

    getHasil() {
        if (this.getHasil <= 60) {
            return "Tidak lulus";
        } else if (this.getHasil > 60) {
            return 'Lulus';
        } else {
            return 'tidak valid!';
        }
    }
}

export default Nilai;