useGetAllNews()
  .then(info => {
    data.length = 0
    data.push(...info)
    showCards()
  })

function showCards() {
  cards.innerHTML = ''
  data.map(item => {
    cards.innerHTML += `
    <article onclick="window.location = '../pages/detail.htm?id=${item.id}'" class="flex flex-col bg-[#f3f4f6] rounded-xl overflow-hidden">
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