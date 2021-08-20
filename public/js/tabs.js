
class NavTab{
    constructor(tab){
        this.tab=tab;
        this.tabBtns=Array.from(this.tab.querySelectorAll('[data-toggle="tab"]'));
        this.tabPanels=Array.from(this.tab.querySelectorAll('[role="tabpanel"]'));

        this.tabBtns.forEach(btn => {
            btn.addEventListener('click',()=>this._toggelTab(btn))
        });
    }
    _toggelTab=(btn)=>{
        var target = btn.getAttribute('data-target')
        this.tabPanels.forEach(panel => {
            if('#'+panel.getAttribute('id') === target){
                panel.classList.remove("hidden")
            }else{
                panel.classList.add("hidden")
            }
        })
        this.tabBtns.forEach(tab_btn => {
            if(tab_btn.getAttribute('data-target') === target){
                tab_btn.classList.add("sn-text-primary");
            }else{
                tab_btn.classList.remove("sn-text-primary");
            }
        })

    }

}

let tablist=Array.from(document.querySelectorAll('[role="tablist"]'))
tablist.forEach(tab =>new NavTab(tab));
