// Definisikan kelas Kapal
class Kapal {
    constructor(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar) {
      this.nama = nama;
      this.nama1 = nama1;
      this.jenis = jenis;
      this.jenis1 = jenis1;
      this.kapasitas = kapasitas;
      this.kapasitas1 = kapasitas1;
      this.panjang = panjang;
      this.lebar = lebar;
    }
  
    infoKapal() {
      return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki dimensi ${this.panjang} x ${this.lebar}`;
    }
  }
  
  // Definisikan kelas InfoTiket yang extends Kapal
  class InfoTiket extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, jumlahTiket) {
      super(nama, jenis, kapasitas, panjang, lebar)
      this.jumlahTiket = jumlahTiket;
      this._status = 'tidak tersedia';
    }
  
    tiketSedia() {
      this._status = 'Tersedia';
      return `Tiket kapal ${this.nama} jenis ${this.jenis}, dengan kapasitas ${this.kapasitas} masih tersedia ${this.jumlahTiket}.`;
    }
  
    tiketSedikit() {
      this._status = 'tidak tersedia';
      return `Tiket kapal ${this.nama} jenis ${this.jenis}, dengan kapasitas ${this.kapasitas} hampir habis.`;
    }
  
    getStatus() {
      return `Tiket kapal ${this.nama} jenis ${this.jenis}, dengan kapasitas ${this.kapasitas} ${this._status}.`;
    }
  }
  
  // Definisikan kelas Tujuan yang extends Kapal
  class Tujuan extends Kapal {
    constructor(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar, tujuanKapal1, tujuanKapal2) {
      super(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar)
      this.tujuanKapal1 = tujuanKapal1;
      this.tujuanKapal2 = tujuanKapal2;
      this._sailing = 12.55;
      this._arrival = 20.15;
    }
  
    timeSailing() {
      return `Kapal ${this.nama1} jenis ${this.jenis1} dengan kapasitas ${this.kapasitas1} dengan tujuan ${this.tujuanKapal1} akan berangkat pada pukul ${this._sailing}`;
    }
  
    timeArrival() {
      return `Kapal ${this.nama} jenis ${this.jenis} dengan kapasitas ${this.kapasitas} dengan tujuan ${this.tujuanKapal2} akan tiba pada pukul ${this._arrival}`;
    }
  }
  
  class KapalPesiar extends Kapal {
    constructor(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar, fasilitas) {
      super(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar)
      this.fasilitas = fasilitas
    }
  
    infoFasilitas() {
      return `Kapal pesiar ${this.nama} jenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki fasilitas ${this.fasilitas}.`
    }
  }
  
  class KapalTanker extends Kapal {
    constructor(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar, isiTanker) {
      super(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar)
      this.isiTanker = isiTanker
    }
  
    infoIsiTanker() {
      return `Kapal tanker ${this.nama} jenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki isi tanker ${this.isiTanker}.`
    }
  }
  
  class KapalCruise extends KapalPesiar {
    constructor(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar, fasilitas, ruteCruise) {
      super(nama, nama1, jenis, jenis1, kapasitas, kapasitas1, panjang, lebar, fasilitas)
      this.ruteCruise = ruteCruise
    }
  
    infoRuteCruise() {
      return `Kapal cruise ${this.nama} jenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki rute cruise ${this.ruteCruise}.`
    }
  }
  
  class KapalFerryExpress extends InfoTiket {
    constructor(nama, jenis, kapasitas, panjang, lebar, jumlahTiket, kecepatan) {
      super(nama, jenis, kapasitas, panjang, lebar, jumlahTiket)
      this.kecepatan = kecepatan
    }
  
    infoKecepatan() {
      return `Kapal ferry express ${this.nama} jenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki kecepatan ${this.kecepatan}.`
    }
  }
  

  let kapalKapal = [
    new Kapal('Budiono Siregar', 'Sucipto', 'Ferry', 'Kargo', 500, 450, 200, 100, 1200, 30),
    new InfoTiket('Budiono Siregar', 'Sucipto', 'Ferry', 'Kargo', 500, 200, 100, 1200),
    new Tujuan('Budiono Siregar', 'Sucipto', 'Ferry', 'Kargo', 500, 450, 200, 100, 'Pelabuhan Ratu', 'Pelabuhan Merak'),
    new KapalPesiar('Sumbul', 'Luxury', 'Pesiar', 'Mewah', 500, 450, 200, 100, 'kolam renang, gym, restoran'),
    new KapalTanker('Japota', 'Tanker', 'Minyak', 500, 450, 200, 100, 'minyak mentah'),
    new KapalCruise('Unni Bakwan', 'Cruise', 'Pesiar', 'Mewah', 500, 450, 200, 100, 'kolam renang, gym, restoran', 'Singapura - Bali - Lombok'),
    new KapalFerryExpress('Ferry Express', 'Ferry', 500, 450, 200, 100, 1200, 30)
  ];
  
 
  for (let kapal of kapalKapal) {
    console.log(kapal.infoKapal());
    if (kapal instanceof InfoTiket) {
       console.log(kapal.tiketSedia()); 
       console.log(kapal.tiketSedikit());
       console.log(kapal.getStatus());
    } else if (kapal instanceof Tujuan) {
       console.log(kapal.timeSailing());
       console.log(kapal.timeArrival());
    } else if (kapal instanceof KapalPesiar) {
      console.log(kapal.infoFasilitas());
    } else if (kapal instanceof KapalTanker) {
      console.log(kapal.infoIsiTanker());
    } else if (kapal instanceof KapalCruise) {
      console.log(kapal.infoFasilitas());
      console.log(kapal.infoRuteCruise());
    } else if (kapal instanceof KapalFerryExpress) {
      console.log(kapal.tiketSedia());
      console.log(kapal.infoKecepatan());
    }
  }