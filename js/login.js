const password = document.getElementById('password')
const email = document.getElementById('email')

function handleLogin() {
  const emailVal = email.value
  const passVal = password.value

  fetch('https://neptunbk.vercel.app/auth/login', {
    method: 'POST',
    headers: {'Content-type': 'application/json'}, 
    body: JSON.stringify({
      login: emailVal,
      password: passVal
    })
  })
  .then(res => res.json())
  .then(info => {
    const {refresh, token, status} = info

    if (status) {
      localStorage.setItem('token', token)
      localStorage.setItem('status', status)
      location.href = '/admin/admin.htm'
    } else {
      alert('Seysen')
    }
  })
}