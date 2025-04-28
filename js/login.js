const password = document.getElementById('password')
const email = document.getElementById('email')

function handleLogin() {
  const emailVal = email.value
  const passVal = password.value

  useLogin({login: emailVal, password: passVal})
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