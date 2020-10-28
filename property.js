function panggilObject(){
  var mobil = {
    merek: 'Honda CRZ',
    type: 'City Car',
    warna : 'Merah',
    harga: 200000000
  }
  mobil.harga = 100000000; // mengurangi/merubah nilai dari suatu harga lewat variable
  mobil.tahun = 2008; // menambahkan properti di luar bracket

  console.log(mobil); // menampilkan smuanya

  // console.log(mobil.merek);
  // console.log(mobil.type);
  // console.log(mobil.harga);
  // console.log(mobil.warna);
  // console.log(mobil.tahun[3]);
}
panggilObject()
