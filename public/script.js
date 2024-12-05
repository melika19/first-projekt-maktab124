// get list from local storage
// const storedData = localStorage.getItem("list")
// const listData = JSON.parse(storedData) || []

// const form = document.getElementById("form")

// // create card
// const createCard = (title, subtitle) => `
// <div class="p-2 border border-sm shadow-md bg-gray-100 cursor-pointer">
// <h3>${title}</h3>
// <h5>${subtitle}</h5>
// </div>`

// form.addEventListener("submit", (e) => {
// e.preventDefault()

// const { taskName, subtitle } = e.target

// listData.push({
// title: taskName.value,
// subtitle: subtitle.value,
// id: Math.random()
// })

// listRenderer(listData)
// form.classList.add("bg-red-200")

// localStorage.setItem("list", JSON.stringify(listData))

// })

// const listRenderer = (listData) => {
// const list = document.getElementById("list")
// list.innerHTML = ""
// listData.forEach(item => {
// list.innerHTML += createCard(item.title, item.subtitle)
// })
// }

// listRenderer(listData)
// setTimeout(() => {
//   alert("سلام به همگی");
// }, 5000);
// alert("Hello");

// setTimeout(function () {
//   alert("World");
// }, 0);
function sayHello() {
  console.log("سلام!");
}

function sayGoodbye(callback) {
  setTimeout(callback, 2000); // بعد از 2 ثانیه، کالبک اجرا می‌شود
}

sayHello(); // این پیام فوری نمایش داده می‌شود

sayGoodbye(function () {
  console.log("خداحافظ!");
});
