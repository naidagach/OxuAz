const modal = document.getElementById('modal')
const xeberler = document.getElementById('xeberler')
const titleInp = document.getElementById('inp1')
const descInp = document.getElementById('inp2')
const imgInp = document.getElementById('inp3')
const dateInp = document.getElementById('inp4')
const viewInp = document.getElementById('inp5')
const btn = document.getElementById('btn')
const data = []

function handleModal() {
  modal.classList.toggle('hidden')
}

function getAllNews() {
  fetch('https://67ee3f32c11d5ff4bf78e023.mockapi.io/Oxuaz')
    .then(res => res.json()) 
    .then(info => {
      data.length = 0
      data.push(...info.reverse())
      showNews()
    })
}
getAllNews()

function showNews() {
  xeberler.innerHTML = ''
  data.map(item => {
    xeberler.innerHTML += `
    <tr class="h-[70px] bg-[#fbfbfd] m-2 shadow-custom">
                <td class="w-[15%] p-1"><img class="" src="${(item.img)}"/></td>
                <td class="w-[30%] p-1">${item.title}</td>
                <td class="w-[30%] p-1">${(item.description).slice(0, 100)}...</td>
                <td class="w-[10%] p-1">${item.date}</td>
                <td class="w-[5%] p-1">${item.view}</td>
                <td class="w-[5%] p-1"><i onclick="xeberiSil(${item.id})" class="fa-solid fa-trash text-red-600"></i></td>
                <td class="w-[5%] p-1"><i onclick="editNews(${item.id})" class="fa-solid fa-edit text-red-600"></i></td>
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
      alert('XEBER SILINDI')
      const yeniData = data.filter(elem => elem.id != id)
      data.length = 0
      data.push(...yeniData)
      showNews()
    })
}

function xeberiElaveEt() {

  if (validation()) return;
     
  fetch(`https://67ee3f32c11d5ff4bf78e023.mockapi.io/Oxuaz`, {
    method: 'POST',
    body: getAllInpsVal(),
    headers: {
      "Content-Type": "application/json",
    },
    })
    .then(res => res.json()) 
    .then(info => {
      getAllNews()
      handleModal()
      // alert("XEBER ELAVE OLUNDU")
      clearInputs()
    })

}

function validation() {
  if(titleInp.value.trim() == ''){
    titleInp.focus()
    titleInp.style.borderColor = "red"
    alert('Title xanasini doldurmaq lazimdir')
    return true
  }
  if (descInp.value.trim() == '') {
    descInp.focus()
    descInp.style.borderColor = "red"
    alert('Metn xanasini doldurmaq lazimdir')
    return true
  }
  if (imgInp.value.trim() == '') {
    imgInp.focus()
    imgInp.style.borderColor = "red"
    alert('Img xanasini doldurmaq lazimdir')
    return true
  }
  if (dateInp.value.trim() == '') {
    dateInp.focus()
    dateInp.style.borderColor = "red"
    alert('Date xanasini doldurmaq lazimdir')
    return true
  }
  if (viewInp.value.trim() == '') {
    viewInp.focus()
    viewInp.style.borderColor = "red"
    alert('Title xanasini doldurmaq lazimdir')
    return true
  }
}

function editNews(id) {
  handleModal()

  btn.innerHTML = "Edit News"
  btn.onclick = () => {
    editFetchNews(id)
  }
  const elem = data.find(item => item.id == id)
  
  titleInp.value = elem.title
  descInp.value = elem.description
  imgInp.value = elem.img
  dateInp.value = elem.date
  viewInp.value = elem.view
}

function editFetchNews(id) {
  if(validation()) return;

  fetch(`https://67ee3f32c11d5ff4bf78e023.mockapi.io/Oxuaz/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: getAllInpsVal()
  })
  .then(res => res.json())
  .then(info => {
    alert("Xebere duzelis eledim")
    getAllNews()
    handleModal()
    clearInputs()

    btn.innerHTML = "Yukle"
    btn.onclick = xeberiElaveEt
  })

}

function clearInputs() {
  modal.querySelectorAll('input') == ''
  descInp.value = ''
}

function getAllInpsVal() {
    return JSON.stringify({
      title: titleInp.value,
      description: descInp.value,
      img: imgInp.value,
      date: dateInp.value,
      view: viewInp.value,
    })
}