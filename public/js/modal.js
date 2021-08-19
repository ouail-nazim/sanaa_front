class Modal{
    constructor(btn){
        this.btnTrigger=btn;
        this.model=document.querySelector(btn.getAttribute('data-target'));
        this.btnClose=this.model.querySelector('[data-toggle="close-modal"]');

        this.btnTrigger.addEventListener('click',()=>this.showModal())
        this.btnClose.addEventListener('click',()=>this.closeModal())
    }

    showModal=()=>{
        this.model.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    closeModal=()=>{
        this.model.classList.add('hidden');
        document.body.style.overflow = '';
    }
}


let modals=Array.from(document.querySelectorAll('[data-toggle="modal"]'))
modals.forEach(modal_button =>new Modal(modal_button));



