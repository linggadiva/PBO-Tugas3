class Kapal {
    constructor(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar){
        this.nama = nama,
        this.nama1 = nama1,
        this.jenis = jenis,
        this.jenis1 = jenis1,
        this.kapasitas = kapasitas,
        this.kapasitas1 = kapasitas1
        this.panjang = panjang,
        this.lebar = lebar
    }

    infoKapal(){
        return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki dimensi ${this.panjang} x ${this.lebar}`;
    }
}

class InfoTiket extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, jumlahTiket){
        super(nama, jenis, kapasitas, panjang, lebar)
        this.jumlahTiket = jumlahTiket
        this._status = 'tidak tersedia'
    }

    tiketSedia(){
        this._status = 'Tersedia'
        return `Tiket kapal ${this.nama} jenis ${this.jenis}, dengan kapasitas ${this.kapasitas} masih tersedia ${this.jumlahTiket}.`
    }

    tiketSedikit(){
        this._status = 'tidak tersedia'
        return `Tiket kapal ${this.nama} jenis ${this.jenis}, dengan kapasitas ${this.kapasitas} hampir habis.`
    }

    getStatus(){
        return `Tiket kapal ${this.nama} jenis ${this.jenis}, dengan kapasitas ${this.kapasitas} ${this._status}.`
    }
}

class Tujuan extends Kapal {
    constructor(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar, tujuanKapal1, tujuanKapal2){
        super(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar)
        this.tujuanKapal1 = tujuanKapal1,
        this.tujuanKapal2 = tujuanKapal2
        this._sailing = 12.55
        this._arrival = 20.15
    }

    timeSailing(){
        return `Kapal ${this.nama1} jenis ${this.jenis1} dengan kapasitas ${this.kapasitas1} dengan tujuan ${this.tujuanKapal1} akan berangkat pada pukul ${this._sailing} `
    }

    timeArrival(){
        return `Kapal ${this.nama} jenis ${this.jenis} dengan kapasitas ${this.kapasitas} dengan tujuan ${this.tujuanKapal2} akan tiba pada pukul ${this._arrival}`
    }
}
let kapalPenumpang = new Kapal('Budiono Siregar', 'Sucipto', 'Ferry', 'Kargo', 500, 450, 200, 100)
console.log(kapalPenumpang.infoKapal())
let kapalTiket = new InfoTiket('Budiono Siregar', 'Sucipto', 'Ferry', 'Kargo', 500, 200, 100, 1200)
console.log(kapalTiket.tiketSedia())
console.log(kapalTiket.tiketSedikit())
console.log(kapalTiket.getStatus())
let jadwalKapal = new Tujuan('Budiono Siregar', 'Sucipto', 'Ferry', 'Kargo', 500, 450, 200, 100, 'Pelabuhan Ratu', 'Pelabuhan Merak')
console.log(jadwalKapal.timeSailing())
console.log(jadwalKapal.timeArrival())

document.getElementById('object').innerHTML = kapalPenumpang.infoKapal() + '<br>'
document.getElementById('object').innerHTML += kapalTiket.tiketSedia() + '<br>'
document.getElementById('object').innerHTML += kapalTiket.tiketSedikit() + '<br>'
document.getElementById('object').innerHTML += kapalTiket.getStatus() + '<br>'
document.getElementById('object').innerHTML += jadwalKapal.timeSailing() + '<br>'
document.getElementById('object').innerHTML += jadwalKapal.timeArrival() + '<br>'

