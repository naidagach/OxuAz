const detail = document.getElementById('detail')
const dataDetail = []
const id = new URLSearchParams(location.search).get('id')

useDetailNews(id)
.then(info => {
  dataDetail.length = 0
  dataDetail.push(info)
  showDetail()
})
 
function showDetail() {
  const item = dataDetail[0]
    detail.innerHTML = 
    `<a class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline dark:bg-gray-50">
    <img src="${item.img}" alt="" class="object-cover mx-auto s:w-[60%] h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
    <div class=" space-y-2 lg:col-span-5 text-center">
    <div class="flex items-center justify-around text-[#1794a0] p-3">
      <p><i class="fa-solid fa-calendar-days"></i> ${item.date}</p>
      <p><i class="fa-solid fa-eye"></i> ${item.view}</p>
    </div>
      <h3 class="text-xl font-semibold sm:text-2xl group-hover:underline group-focus:underline">${item.title}</h3>
      <p>${item.description}</p>
      <a href="../index.htm" class="block max-w-[250px] mx-auto px-8 py-3 m-3 font-semibold rounded bg-[#1794a0] dark:text-gray-50">Back to HomePage</a>
    </div>
    </a>`

}
