const sidebar = document.getElementById('sidebar')
const menular = document.getElementById('menular')
const cards = document.getElementById('cards')
const menuArr = ['Ana səhifə','Siyasət','İqtisadiyyat','Cəmiyyət','Ordu','Şou','Kriminal','İdman','Mədəniyyət','Dünya','Hadisə','Müsahibə','Turizm','İKT','Baku TV','CineMastercard','Digər','Maraqlı']
const data = []
function handleSidebar() {
    sidebar.classList.toggle('hidden')
}

fetch('https://67ee925ac11d5ff4bf7a1d4d.mockapi.io/oxuaz')
  .then(res => res.json())
  .then(info => {
    data.length = 0
    data.push(...info)
    showCards()
  })

function menuShow() {
  menular.innerHTML = ''
  menuArr.map(item => {
    menular.innerHTML +=
    `<a class="text-[12px] w-[45%] xs:text-[16px] s:w-[18%] p-[2px] xs:p-2 flex items-center justify-center font-[600] border border-[#d1d5dc] rounded-[30px] hover:bg-[#e5e7eb] cursor-pointer">${item}</a>`
  })
}
menuShow()

function showCards() {
  cards.innerHTML = ''
  data.map(item => {
    cards.innerHTML += `
    <article class="flex flex-col bg-[#f3f4f6] rounded-xl overflow-hidden">
    <a>
      <img alt="" class="object-cover w-full h-52 dark:bg-gray-500" src="${item.img}">
    </a>
    <div class="flex flex-col flex-1 p-6">
      <div class=" flex justify-between text-[#9ca3af]">
        <p><i class="fa-solid fa-calendar-days"></i> ${item.date}</p>
        <p><i class="fa-solid fa-eye"></i> ${item.view}</p>
      </div>
      <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">${item.title}</h3>
      <div class="flex justify-between pt-3 space-x-2">
        <span><i class="fa-regular fa-comments text-[#7c3aed]"></i> 30</span>
        <span><i class="fa-regular fa-thumbs-up text-[#7c3aed]"></i> 300</span>
      </div>
    </div>
  </article>`
  })
}
showCards()