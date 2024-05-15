function Change(){
    window.location.href='CGPA.html';
}
function check(){
const user=document.getElementById('user').value;
const pas=document.getElementById('pass').value;
if (user=='pranav_07'&& pas=='200519'){
    Change();
}
else{
    alert('Either your username or password is wrong or else both are wrong, Try Again');
}
}
