var form = document.getElementById('form');

form.onsubmit=function(e){
	e.preventDefault();
	var user = document.getElementById('user');
	var senha = document.getElementById('senha');
	if(user.value=='' && senha.value ==''){
		user.style.border='2px solid red';
		senha.style.border='2px solid red';
		alert('os campos devem ser preenchidos')
		user.focus();
	}
	else{
		user.value="";
		senha.value="";
	}
}