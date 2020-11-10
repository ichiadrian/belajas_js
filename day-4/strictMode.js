// mengatifkan strict mode menjadikan code menjadi lebih terjaga
'use strict'

b = 1;            // akan menghasilkan error karena b blum pernah di declare
let a;
a = 'test';       // tidak error karena a sudah pernah di declare

function b(){
  c = 1;          // akan error karena c belum pernah di declare
  console.log(a);
  console.log(c);
}

b();