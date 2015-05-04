function logout()
{
	sessionStorage.id = (-1);
	alert(sessionStorage.getItem("id"));
}