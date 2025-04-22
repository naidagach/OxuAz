const modal = document.getElementById('modal')
const xeberler = document.getElementById('xeberler')
const inp1 = document.getElementById('inp1')
const inp2 = document.getElementById('inp2')
const inp3 = document.getElementById('inp3')
const inp4 = document.getElementById('inp4')
const inp5 = document.getElementById('inp5')
const data = []

function handleModal() {
  modal.classList.toggle('hidden')
}

function addAllNews() {
  fetch('https://67ee3f32c11d5ff4bf78e023.mockapi.io/Oxuaz')
    .then(res => res.json()) 
    .then(info => {
      data.length = 0
      data.push(...info)
      showNews()
    })
}
addAllNews()

function showNews() {
  xeberler.innerHTML = ''
  data.map(item => {
    xeberler.innerHTML += `
    <tr class="h-[70px] bg-[#fbfbfd] m-2 shadow-custom">
                <td class="w-[15%] p-1"><img class="" src="${(item.img)}"/></td>
                <td class="w-[35%] p-1">${item.title}</td>
                <td class="w-[30%] p-1">${(item.description).slice(0, 100)}...</td>
                <td class="w-[10%] p-1">${item.date}</td>
                <td class="w-[5%] p-1">${item.view}</td>
                <td class="w-[5%] p-1"><i onclick="xeberiSil(${item.id})" class="fa-solid fa-trash text-red-600"></i></td>
            </tr>
            `
  })
}

function xeberiSil(id) {
  fetch(`https://67ee3f32c11d5ff4bf78e023.mockapi.io/Oxuaz/${id}` ,{
    method: 'DELETE'
    })
    .then(res => res.json()) 
    .then(info => {
      alert('SILINDIM')
      const yeniData = data.filter(elem => elem.id != id)
      data.length = 0
      data.push(...yeniData)
      showNews()
    })
}

function xeberiElaveEt() {
  modal.classList.toggle('hidden');

  fetch(`https://67ee3f32c11d5ff4bf78e023.mockapi.io/Oxuaz`, {
    method: 'POST',
    body: JSON.stringify({
      title: inp1.value,
      description: inp2.value,
      img: inp3.value,
      date: inp4.value,
      view: inp5.value,
      is_popular: true,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(res => res.json()) 
    .then(info => {
      addAllNews()
    })

    if ((inp1.value && inp2.value && inp3.value && inp4.value && inp5.value) == '') {
      alert('Bosluqlari doldurun')
    } 
}