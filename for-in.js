const panggilObject =()=>{       //Constanta model baruuuu
  let mahassiswa = {
    nama: 'Ryan',
    kelas: 12212,
    jurusan: 'FIKTI'
  }
  for (var x in mahassiswa) {
    // if (mahassiswa.hasOwnProperty(x)) {
      console.log(mahassiswa[x]);
    // }
  }
}
panggilObject();
