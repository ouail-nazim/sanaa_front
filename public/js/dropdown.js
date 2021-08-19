window.addEventListener('click',e=>{
    if(["menu-button","menu-button-content"].indexOf(e.target.getAttribute('role')) === -1){
        if (e.target.getAttribute('role')!=="menu") {
            document.querySelectorAll('[role="menu"]').forEach(menu => {
                menu.classList.add('hidden');
            })
        }
    }
    
})
Array.from(document.querySelectorAll('[role="menu-button"]')).forEach(menu_button => {
    menu_button.addEventListener('click',()=>{
        document.querySelectorAll('[role="menu"]').forEach(menu => {
            if(menu_button.nextElementSibling !== menu ){
                menu.classList.add('hidden');
            }  
        })
        menu_button.nextElementSibling.classList.toggle("hidden")
    })
});