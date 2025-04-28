verify()

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
  useGetAllNews()
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
              <tr onclick="window.location = '../pages/detail.htm?id=${item.id}'" class="h-[70px] bg-[#fbfbfd] m-2 shadow-custom">
                  <td class="w-[15%] p-1"><img class="" src="${(item.img)}"/></td>
                  <td class="w-[30%] p-1">${item.title}</td>
                  <td class="w-[30%] p-1">${(item.description).slice(0, 100)}...</td>
                  <td class="w-[10%] p-1">${item.date}</td>
                  <td class="w-[5%] p-1">${item.view}</td>
                  <td class="w-[5%] p-1"><i onclick="xeberiSil(event, ${item.id})" class="fa-solid fa-trash text-red-600"></i></td>
                  <td class="w-[5%] p-1"><i onclick="editNews(event, ${item.id})" class="fa-solid fa-edit text-red-600"></i></td>
              </tr>
            `
            
  })
}

function xeberiSil(e, id) {
  e.stopPropagation()
  useDeleteNews(id)
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
  usePostNews( getAllInpsVal() )
    .then(info => {
      getAllNews()
      handleModal()
      // alert("XEBER ELAVE OLUNDU")
      clearInputs()
    })
}

function editNews(e, id) {
  e.stopPropagation()
  handleModal()
  btn.innerHTML = "Edit News"
  btn.onclick = () => {
    editFetchNews(id)
  }
  const elem = data.find(item => item.id == id)
  titleInp.value = elem.title
  descInp.value = tinymce.get('inp2').setContent(elem.description)
  imgInp.value = elem.img
  dateInp.value = elem.date
  viewInp.value = elem.view
}

function editFetchNews(id) {
  if(validation()) return;

useEditNews(id, getAllInpsVal() )
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
  modal.querySelectorAll('input').forEach(item => item.value  = '')
  tinymce.get('inp2').setContent(" ")
}

function getAllInpsVal() {
    return JSON.stringify({
      title: titleInp.value,
      description: tinymce.get('inp2').getContent(),
      img: imgInp.value,
      date: dateInp.value,
      view: viewInp.value,
    })
}