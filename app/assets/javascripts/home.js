var x = document.querySelector('.expand');

x.addEventListener('mouseenter', function(){
   x.innerHTML = "COLLEGE";
});

x.addEventListener('mouseleave', function(){
   x.innerHTML = "CO";
});