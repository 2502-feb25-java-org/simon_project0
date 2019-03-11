function doSort(){
    var temp=document.querySelector('#tb').value;
    var temp2=temp.split(" ");
    var output="";
    triggerSort(temp2);
    temp2.forEach(element => {
        output+=String(element)+", ";
    });
    var o2 = output.substr(2,output.length-2)
    document.querySelector("#out2").innerHTML=o2;
}
function triggerSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var t = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = t;
         }
      }
    }
    return arr;
 }
