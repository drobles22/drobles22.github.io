const menuicon = document.querySelector('.menuicon');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(menuicon);


menuicon.addEventListener('click',()=>{

menu.classList.toggle("spread")

})

window.addEventListener("click", e=>{


    if(menu.classList.contains('spread')&& e.target != menu && e.target !=menuicon){

        menu.classList.toggle("spread")




    }
})