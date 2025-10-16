////////////////////////////////////////////////////////////
samples('github:switchangel/pad')

setCps(140/60/4)


let supersaw = n(irand(rand.range(0,10)).sound("supersaw")
  .sub(rand).seg(16))
  .lpenv(4)
  .crush(9)
  .lpf(300)
  .slow(1)

let supersaw2 = n(irand(rand.range(0,5)).sound("saw")
  .sub(rand).seg(16))
  .crush(9)
  .lpf("<1000>")
  .slow(1)
  .delay(2)
  .gain(.7)

let music = n("<[0 3 7 5] [6 8 10 15] [0 3 7 5] [12 10 8 6]>").sound("sawtooth")
  .scale("c:phrygian")
  // .lpf(sine.range(200, 8800).slow(4))
  .lpq(10)
  .every(4, x => x.set(n("[6 8 10 15]")))
  .gain(0.8)
  .room(0.3)
  .cutoff(2000)
  .fit().chop("<3 4>")

// let music2= n("<[0 3 7 10 12 10 7 3] [5 8 12 15 17 15 12 8] [3 7 10 14 15 14 10 7] [0 3 7 10 12 15 17 19]>").sound("supersaw")
let music2= s("~ ~ supersaw ~ ~ ~ supersaw ~").n("<[0 3 7 10 12 10 7 3] [5 8 12 15 17 15 12 8] [3 7 10 14 15 14 10 7] [0 3 7 10 12 15 17 19]>").sound("supersaw")
  .scale("c:minor")
  .cutoff(2000).fit().chop(12)
  // .lpf(sine.range(200, 800).slow(4))
  .lpq(10)
  .gain(0.8)
  .room(0.3)
  .slow(2)


let perc = s("~ cp ~ cp").bank("RolandTR808")
  .delay(0.5)
  .lpf(sine.range(600, 800).slow(4))
  .gain(0.7)

let bd = s("[bd*2*2] [bd*2*2, bd*2*2 bd*2*2]").bank("RolandTR808")

let hats = s("hh*16").bank("RolandTR808")
  .gain("1 0.5 0.7 0.5")
  .speed(rand.range(0.95, 1.05))
  .hpf(9000)
  .gain(0.4)

let drone = note("c1").s("sawtooth")
  .lpf(150)
  .gain(0.4)
  .room(0.8)
  .slow(2)



stack(
  drone,
  bd,
  perc,
  hats,
  supersaw,
  supersaw2,
  music,
  music2,
).color("violet").scope()
// -- Jack --


// -- Video reference  --
// -- https://www.youtube.com/watch?v=v-bo4HxIMbQ&t --
/////////////////////////////////////////////////////////////////////////////
