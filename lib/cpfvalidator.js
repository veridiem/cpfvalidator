function cpfValidator (cpfInsert) {
  const cpfArray = cpfInsert.split('')
  const cpfFirstPart = cpfArray.slice(0,9);

  let firstNumber = cpfMultiply(cpfFirstPart, 10);
  const sumFirstNumber = cpfSum(firstNumber);
  let secondNumber = cpfMultiply(cpfFirstPart, 11);
  const firstResult = moduleCpf(sumFirstNumber);
  const sumSecondNumber = cpfSum(secondNumber)+firstResult*2; 
  const secondResult = moduleCpf(sumSecondNumber);

  return (parseInt(cpfArray[9]) ===firstResult && parseInt(cpfArray[10]) === secondResult)
}

function cpfMultiply(cpfFirstPart, numberCount){
  return ( cpfFirstPart.map( num => 
    num*numberCount--))
}

function cpfSum(blablabla){
  return blablabla.reduce((num, sum) => 
  num+sum, 0);
}

function moduleCpf (sum){
  if (11-sum%11 > 9) {
    return 0;
  }
  else{
    return 11-sum%11
  }
}