function Change(){
    window.location.href='sample1.html';
}
function check(){
    const user=document.getElementById('user').value;
const pas=document.getElementById('pass').value;
if (user=='admin'&& pas=='admin123'){
    Change();

}
else{
    alert('Either your username or password is wrong, Try Again');

}
}
