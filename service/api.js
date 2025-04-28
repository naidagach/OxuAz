const BASE_URL = 'https://67ee3f32c11d5ff4bf78e023.mockapi.io/Oxuaz'
const BASE_AUTH_URL = 'https://neptunbk.vercel.app/auth'

async function useGetAllNews() {
  const res = await fetch(BASE_URL)
  return await res.json()
}

async function useDeleteNews(id) {
  const res = await fetch(`${BASE_URL}/${id}` ,{
    method: 'DELETE'
  })
  return await res.json()
}

async function usePostNews(item) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    body: item,
    headers: {
      "Content-Type": "application/json",
    }
  })
  return await res.json()
}
async function useEditNews(id, item) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: item
  })
  return await res.json()
}
async function useVerify(token) {
  const res = await fetch(`${BASE_AUTH_URL}/verify-token`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
  return await res.json()
}

async function useLogin(item) {
  const res = await fetch(`${BASE_AUTH_URL}/login`, {
    method: 'POST',
    headers: {'Content-type': 'application/json'}, 
    body: JSON.stringify(item)
  })
  return await res.json()
}

async function useDetailNews(id) {
  const res = await fetch(`${BASE_URL}/${id}`)
  return await res.json()
}


