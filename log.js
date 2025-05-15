function Clicked(){
var Username=document.getElementById('UserName');
var password=document.getElementById('password');
var User="leonard";
var pass="1234";
if ((Username.value==User) && (password.value==pass))
{
window.alert("You are loged in as"+User);
}
else{
window.alert("You have entered wrong username or password");
}
}