function load(){
    if(typeof(localStorage.fname) != 'undefined'){
        document.querySelector('#fname').value=localStorage.fname;}
    if(typeof(localStorage.lname) != 'undefined'){
        document.querySelector('#lname').value=localStorage.lname;}
    if(typeof(localStorage.gn) != 'undefined'){
        document.querySelector("#"+localStorage.gn).checked=true;}
    if(typeof(localStorage.age) != 'undefined'){
        document.querySelector('#age').value=localStorage.age;}
    if(typeof(localStorage.phone) != 'undefined'){
        document.querySelector('#phone').value=localStorage.phone;}
    if(typeof(localStorage.email) != 'undefined'){
        document.querySelector('#email').value=localStorage.email;}

};
function setfname(item){
    localStorage.fname=item.value;
}
function setlname(item){
    localStorage.lname=item.value;
}
function setg(item){
    localStorage.gn=item.id;
}
function setage(item){
    localStorage.age=item.value;
}
function setphone(item){
    localStorage.phone=item.value;
}
function setemail(item){
    localStorage.email=item.value;
}