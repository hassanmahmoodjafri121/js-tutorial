for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 6) {
       // console.log("6 is the best number");
    
    }
   // console.log(element);
}
for (let i = 0; i <= 10; i++) {
    console.log('outer loop value: $(i)');
    for (let j = 0; j <=10; j++) {
      //  console.log('inner loop value ${j} and inner loop $(i)');
        console.log(i + '*' + j + '=' + i*j);
        
    }
    
}