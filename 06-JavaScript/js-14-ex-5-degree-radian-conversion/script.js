/*
- function to convert degrees to radians
- ona param: degrees
- output: radians
- convert formula: degrees * (pi/180)

e.g. 90 deg returns aprox.  1.57079 radians

*/




const degreesToRadians = (degrees) => {
  let result = degrees * (Math.PI / 180);
  return result;
}


let conversion = degreesToRadians(90);
console.log(conversion);




