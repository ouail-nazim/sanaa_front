class Modal{
    constructor(btn){
        this.btnTrigger=btn;
        this.modal=document.querySelector(btn.getAttribute('data-target'));
        this.btnClose=this.modal.querySelector('[data-toggle="close-modal"]');

        this.btnTrigger.addEventListener('click',()=>this.showModal())
        this.btnClose.addEventListener('click',()=>this.closeModal())
        this.modal.addEventListener('click',e=>{
            if(e.target.getAttribute('data-toggle')==="overlay"){
                this.closeModal()
            }
        })  
    }

    showModal=()=>{
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    closeModal=()=>{
        this.modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}


let modals=Array.from(document.querySelectorAll('[data-toggle="modal"]'))
modals.forEach(modal_button =>new Modal(modal_button));



