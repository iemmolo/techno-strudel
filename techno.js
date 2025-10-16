samples('github:switchangel/pad')


setCps(140/60/4)


let supersaw = n(irand(rand.range(0,10)).sound("supersaw")
  .sub(rand).seg(16))
  // .scale("c:minor g:minor")
  // .add("<100>")
  .lpenv(4)
  .crush(9)
  .lpf(100)
  .slow(1)

let supersaw2 = n(irand(rand.range(0,10)).sound("supersaw")
  .sub(rand).seg(16))
  .scale("c:dorian")
  // .echo(1,1, 2)
  // .add("100")
  // .lpenv(4)
  // .crush(7)
  .lpf("<300 600>")
  .slow(1)
  .delay(2)
  // .gain(.7)

let supersaw3 = n(irand(rand.range(0,10)).sound("supersaw")
  .sub(rand).seg(16))
  .scale("c:dorian")
  // .echo(1,1, 2)
  // .add("100")
  // .lpenv(4)
  // .crush(7)
  .lpf("<300 400>")
  .slow(1)
  .delay(1)
  // .gain(.7)


let bd = s("[bd*2*2] [bd*2*2, bd*2*2 bd*2*2]").bank("RolandTR808")

let piano =  n("[2, 2] [3 3]").add("< e f g >").sound("piano")

stack(
  // supersaw,
  supersaw2,
  // bd,
  // supersaw3,
  // piano
)._scope()
