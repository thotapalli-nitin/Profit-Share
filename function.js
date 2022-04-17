window.function = function (num1, num2, num3, num4, num5) {

  let n1 = num1.value ?? 0;
  let n2 = num2.value ?? 0;
  let n3 = num3.value ?? 0;
  let n4 = num4.value ?? 0;
  let n5 = num5.value ?? 0;
  var revshare;
  
  if(n1>0){
    revshare=n2*n3*n4/(n1*n5);
  }
  else{
    return 0;
  }
  
  
  
  return revshare*100;
}