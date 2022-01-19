document.querySelectorAll('#sidebar nav ul li img').forEach((el)=>{
    el.addEventListener('click',function(e){
        e.target.parentElement.classList.toggle('border-bottom-0');
        e.target.classList.toggle('rotate');
        el.closest('li').nextElementSibling.classList.toggle('accordion-show');
    });
});

document.querySelectorAll('#reports > nav > ul > li a').forEach((el)=>{
    el.addEventListener('click',function(e){
        document.querySelectorAll('#reports > nav > ul > li a').forEach((e)=>{
            e.classList.remove('active');
        });
        el.classList.add('active')
    })
})