function panggilShift(){
    var data = ["Bekasi","Jakarta","Bogor","Bandung","Tambun"]
    console.log(data);
    console.log("=======================================");

    //kota = data.shift();
/*menghapus data atau menghide data dri data yg pling awal stiap di
create shift maka akan bertambah
yg di hapus*/
    kota2 = data.shift();
    console.log(kota2);

    return data
  }
console.log(panggilShift());
