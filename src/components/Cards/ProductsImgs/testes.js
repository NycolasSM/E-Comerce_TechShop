let a = 1
let b = 0
let c = 3
let d = 0

function somar () {
  b = a + a
  console.log(b)
}

function somar2() {
  d = b + c
  console.log(d)
}

function somar3() {
  let a = 1
  let b = 1
  let resultato = a + b
  let resultato2 = this.a + this.b
  console.log(`global ${resultato}`)
  console.log(`local ${resultato2}`)
}

somar()
somar2()
somar3()