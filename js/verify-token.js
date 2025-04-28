function verify() {
  const token = localStorage.getItem('token')
  const status = localStorage.getItem('status')

  if(!token || !status) {
    location.href = '/auth/login.htm'
  } else{
    useVerify(token)
    .then(info => {
      console.log(info);
    })
  }
}