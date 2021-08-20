function _scrollTo(id){
    let distance = document.getElementById(id).getBoundingClientRect().top
    window.scrollTo(0,  distance - 80);
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('scrollToTop').classList.remove('hidden')
    }else{
        document.getElementById('scrollToTop').classList.add('hidden')
    }
}