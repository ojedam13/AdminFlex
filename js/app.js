const menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener('click', (e) => {
    const claseMenu = e.target.classList;

    //crear variables q seleccionen las flechas y la pagina

    const contenedor = document.querySelector('.pagina'),
         flechaIzq = document.querySelector('.fa-chevron-left'),
         flechaDer = document.querySelector('.fa-chevron-right');
    
    if (claseMenu.contains('fa-chevron-left')) {
        //cerrar menu
        flechaIzq.style.display = 'none';
        flechaDer.style.display = 'block';
        contenedor.classList.add('no-menu');
    } else if(claseMenu.contains('fa-chevron-right')) {
        flechaIzq.style.display = 'block';
        flechaDer.style.display = 'none';
        contenedor.classList.remove('no-menu');
    }
})