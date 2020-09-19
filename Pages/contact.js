function validateForm() {
	var n = document.submit.name.value;
	var e = document.submit.email.value;
	var msg = document.submit.message.value;
	var y = document.submit.anon.value;
	if (msg == "") {
		document.getElementById("submitError").innerHTML =
			"Can't send an empty message...";
		document.submit.message.focus();
		return false;
	} else if (n == "") {
		document.getElementById("submitError").innerHTML = "Please enter your name";
		document.submit.name.focus();
		return false;
	} else if (y == "anonno" && e == "") {
		document.getElementById("submitError").innerHTML =
			"Please enter your email or click on 'Send Anonymously'";
		document.submit.email.focus();
		return false;
	}
	return true;
}
