function doStuff(){
    var num = document.querySelector("#in").value;
    var output = "";
    if(num>0 && num<=1000){
        if(num%3==0 && num%5==0){output="Fizz Buzz";
    num=1;}
        if(num%3==0){output="Fizz";}
        if(num%5==0){output="Buzz";}
        document.querySelector("#out").innerHTML = output;
    }
    else{console.log("Number sent was not in range");}

}