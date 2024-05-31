/*
- calc area and volume of a box
- three params: width, height, depth
- area = width x height
- volume = w x h x d
- return both in a readable format

*/

const calcAreaAndVolume = (w, h, d) => {
  let area = w * h;
  let volume = w * h * d;
  return [area, volume];
}

let result = calcAreaAndVolume(2, 2, 4);
let rArea = result[0];
let rVolume = result[1];
console.log(rArea);
console.log(rVolume);
