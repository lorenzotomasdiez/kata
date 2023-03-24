/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const isAM = s.substring(s.length-2, s.length) === 'AM';
  const hour = s.substring(0, 2);
  const rest = s.substring(2,s.length-2);
  
  if(isAM){
    console.log((parseInt(hour) === 12 ? "00" : hour)+rest);
    return (parseInt(hour) === 12 ? "00" : hour)+rest;
  }else{
    console.log(`${(parseInt(hour) === 12 ? 12 : parseInt(hour)+12)+rest}`)
    return(`${(parseInt(hour) === 12 ? 12 : parseInt(hour)+12)+rest}`)
  }
}


timeConversion('12:01:45AM');
