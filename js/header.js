const sidebar = document.getElementById('sidebar')
const menular = document.getElementById('menular')
const cards = document.getElementById('cards')
const menuArr = ['Ana səhifə','Siyasət','İqtisadiyyat','Cəmiyyət','Ordu','Şou','Kriminal','İdman','Mədəniyyət','Dünya','Hadisə','Müsahibə','Turizm','İKT','Baku TV','CineMastercard','Digər','Maraqlı']
const data = []
function handleSidebar() {
    sidebar.classList.toggle('hidden')
    if (!sidebar.classList.contains('hidden')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
}

function menuShow() {
    menular.innerHTML = ''
    menuArr.map(item => {
      menular.innerHTML +=
      `<a class="text-[12px] w-[45%] xs:text-[16px] s:w-[18%] p-[2px] xs:p-2 flex items-center justify-center font-[600] border border-[#d1d5dc] rounded-[30px] hover:bg-[#e5e7eb] cursor-pointer">${item}</a>`
    })
  }
  menuShow()