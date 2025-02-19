function fibonacci(n){
if (n===0) return 0;                                       //f(0) =0                  o
if (n===1) return 1;                                       //f(1) =1                   1
return fibonacci(n-1)+fibonacci(n-2);                      // f(1)+f(0) 1+0=1          2
}                                                          //f(2)+f(1) (1)+(1)=2       3
for(i=0; i<10; i++){                                       //f(3)+f(2)  (2)+(1)=3      4
  console.log(fibonacci(i));                               //f(4)+f(3)   (3)+(2)=5     5
}