// const toggleBtn = document.querySelector(".dark");
// toggleBtn.style.cursor='pointer'
// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   document.body.classList.toggle("light");
// });





// let button=document.querySelector('#button')
// button.onclick = () => {
//     if (!document.documentElement.classList.contains("dark")) {
//       document.documentElement.classList.add("dark");
//     }  else document.documentElement.classList.remove("dark")
// }
// let main = document.querySelector(".main");
// button.addEventListener('click',function() {
//   if (button.classList==dark) {
//     main.style.backgroundColor = "#202C36";
//   }
//   else {
//     console.log('hato');
    
//   }
// })




let button = document.querySelector("#button");
let main = document.querySelector(".main");

button.onclick = () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    main.style.backgroundColor = "#202C36";
  } else {
    main.style.backgroundColor = "";
  }
};
let price = document.querySelector('#price')
let x = document.querySelector("#x");
price.addEventListener('click',function() {
  x.style.display='block'
})
x.addEventListener('click',function() {
  price.value = ''
  x.style.display='none'
})

// if (price) {
//   price.addEventListener("click", function () {
//     if (price.style.display === "none" || price.style.display === "") {
//       price.style.display = "block";
//       console.log(true);
      
//     } else {
//       price.style.display = "none";
//       console.log('hato');
      
//     }
//   });
// } else {
//   console.log(false);
  
// }
