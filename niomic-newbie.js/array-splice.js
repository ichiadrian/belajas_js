function panggilSplice() {
	let dataKota = ['Jakarta','Bekasi','Wonosobo','Bengkulu','Ponti'];
	console.log(dataKota);
	//menambahkan data di tengah" array
	dataKota.splice(2,0,'DODOL GARUT');

	// menghapus array 2 data
	// dataKota.splice(2,2,'DODOL GARUT');	

	// menghapus array 1 data
	// dataKota.splice(2,1,'DODOL GARUT');

	// apabilsa sperti ini maka di baca adalah menghapus index nomer ke 2 hapus 1 data
	// dataKota.splice(2,1);





	return dataKota;
}

console.log(panggilSplice());