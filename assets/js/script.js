document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', sticky);
    var nav = document.getElementById("menubar");
    var stop = nav.offsetTop;

    function sticky(){
        if(window.pageYOffset >= stop){
            nav.classList.add("stick");
        }
        else{
            nav.classList.remove("stick");
        }
    }
})