function tipeData(){
  var data = "Bekasi"
    console.log(typeof(data)); // untuk menampilkan type data apakah string atau number
  if(data === "Bekasi"){
    return data
  }else{
    return 'salah'
  }

}
console.log(tipeData())
