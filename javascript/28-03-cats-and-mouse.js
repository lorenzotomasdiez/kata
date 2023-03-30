// Complete the catAndMouse function below.
function catAndMouse(catA, catB, mouse) {
  return Math.abs(mouse - catA) < Math.abs(mouse - catB) 
    ? 'Cat A' 
    : Math.abs(mouse - catB) < Math.abs(mouse - catA)
      ? 'Cat B'
      : 'Mouse C'
}


console.log(catAndMouse(1,2,3));
console.log(catAndMouse(1,3,2));
