const showModal=id=>{
    document.querySelector(id).classList.remove('hidden')
}

Array.from(document.querySelectorAll('[data-toggle="modal"]')).forEach(modal_button => {
    modal_button.addEventListener('click',()=>{
        showModal(modal_button.getAttribute('data-target'));
    })
});

