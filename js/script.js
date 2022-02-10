document.addEventListener('DOMContentLoaded', function () {
    var elems1 = document.querySelectorAll('.sidenav');
    var instances1 = M.Sidenav.init(elems1, {
        
    });


    var elems2 = document.querySelectorAll('.dropdown-trigger');
    var instances2 = M.Dropdown.init(elems2, {});
   


    var elems4 = document.querySelectorAll('.parallax');
    var instances4 = M.Parallax.init(elems4, {});


    var elems5 = document.querySelectorAll('.slider');
    var instances5 = M.Slider.init(elems5, {
        height:450,
        interval:1500
    });

    var elems6= document.querySelectorAll('.materialboxed');
    var instances6 = M.Materialbox.init(elems6, {});



});
