function nestedObject(){
  var nama = {
    nama:'Roy',
    ipk:{
      semester1: 2.75,
      semester2: 2.85,
      semester3: 3.25,
      semester4: 3.55,
    }
  }
  console.log(nama.ipk.semester3);
}
nestedObject()
