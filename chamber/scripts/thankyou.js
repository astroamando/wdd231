const params = new URLSearchParams(window.location.search);

document.getElementById('displayFirstName').textContent = params.get('firstName') || '';
document.getElementById('displayLastName').textContent = params.get('lastName') || '';
document.getElementById('displayEmail').textContent = params.get('email') || '';
document.getElementById('displayPhone').textContent = params.get('phone') || '';
document.getElementById('displayOrganization').textContent = params.get('organization') || '';
document.getElementById('displayTimestamp').textContent = params.get('timestamp') || '';