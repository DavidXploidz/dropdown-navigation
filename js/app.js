

const menu = document.querySelector('.menu')
const features = document.querySelector('.features')
const company = document.querySelector('.company')
const careers = document.querySelector('.careers')
const featuresDesk = document.querySelector('#features')
const companyDesk = document.querySelector('#company')

menu.addEventListener('click', mostrarMenu)


features.addEventListener('click', () => {

    const existe = document.querySelector('.error')
    

    if(!existe){

        const imagenAlt = document.querySelector('.features img')
        const divFeatures = document.createElement('DIV')
    
        divFeatures.classList.add('features-contenido')
        divFeatures.classList.add('error')
        imagenAlt.src = 'images/icon-arrow-up.svg'
        divFeatures.innerHTML = `
                                <div class="flex-icons">
                                    <img src="images/icon-todo.svg" alt="icono de todo" class="iconos" />
                                    <p>Todo List</p>
                                </div>
                                <div class="flex-icons">
                                    <img src="images/icon-calendar.svg" alt="icono de todo" class="iconos"  />
                                    <p>Calendar</p>
                                </div>
                                <div class="flex-icons">
                                    <img src="images/icon-reminders.svg" alt="icono de todo" class="iconos"  />
                                    <p>Reminders</p>
                                </div>
                                <div class="flex-icons">
                                    <img src="images/icon-planning.svg" alt="icono de todo" class="iconos"  />
                                    <p>Planning</p>
                                </div>
                                
        `;
        features.parentElement.insertBefore(divFeatures, company)
        
    }
})

company.addEventListener('click', () => {

    const existe = document.querySelector('.error2')

    if(!existe){
        const imagenAlt = document.querySelector('.company img')
        const divCompany = document.createElement('DIV')
        divCompany.classList.add('company-contenido')
        divCompany.classList.add('error2')
        imagenAlt.src = 'images/icon-arrow-up.svg'
        divCompany.innerHTML = `
                                <p>History</p>
                                <p>Our Team</p>
                                <p>Blog</p>
                                
        `;
        features.parentElement.insertBefore(divCompany, careers)
    }
})


function mostrarMenu(){
    document.body.style.backgroundColor = 'rgba(0,0,0, 0.7)'
    const menuOculto = document.querySelector('.menu-slider')
    menuOculto.classList.add('activo')
    const btnCerrar = document.querySelector('.btn-cerrar')
    btnCerrar.addEventListener('click', () => {
        menuOculto.classList.remove('activo')
        document.body.style.backgroundColor = 'white'
    })
}


/*Para desktop */

featuresDesk.addEventListener('click',() => {
    const existe = document.querySelector('.error')
    
    if(!existe){

        const imagenAlt = document.querySelector('#features img')
        const divFeatures = document.createElement('DIV')
    
        
        divFeatures.classList.add('error')
        divFeatures.classList.add('shadow')
        divFeatures.style.position = 'fixed'
        divFeatures.style.zIndex = '10'
        divFeatures.style.top = '10%'
        divFeatures.style.left = '30%'
        divFeatures.style.borderRadius = '1rem'
        divFeatures.style.backgroundColor = 'white'
        divFeatures.style.padding = '1rem 2rem'
        imagenAlt.src = 'images/icon-arrow-up.svg'
        divFeatures.innerHTML = `
                                <div class="flex-icons">
                                    <img src="images/icon-todo.svg" alt="icono de todo" class="iconos" />
                                    <p>Todo List</p>
                                </div>
                                <div class="flex-icons">
                                    <img src="images/icon-calendar.svg" alt="icono de todo" class="iconos"  />
                                    <p>Calendar</p>
                                </div>
                                <div class="flex-icons">
                                    <img src="images/icon-reminders.svg" alt="icono de todo" class="iconos"  />
                                    <p>Reminders</p>
                                </div>
                                <div class="flex-icons">
                                    <img src="images/icon-planning.svg" alt="icono de todo" class="iconos"  />
                                    <p>Planning</p>
                                </div>
                                
        `;
        document.body.appendChild(divFeatures)
        
    }
})


companyDesk.addEventListener('click',() => {
    const existe = document.querySelector('.error2')
    
    if(!existe){

        const imagenAlt = document.querySelector('#company img')
        const divFeatures = document.createElement('DIV')
    
        
        divFeatures.classList.add('error2')
        divFeatures.classList.add('shadow')
        divFeatures.style.position = 'fixed'
        divFeatures.style.zIndex = '10'
        divFeatures.style.top = '10%'
        divFeatures.style.left = '40%'
        divFeatures.style.borderRadius = '1rem'
        divFeatures.style.backgroundColor = 'white'
        divFeatures.style.padding = '1rem 2rem'
        imagenAlt.src = 'images/icon-arrow-up.svg'
        divFeatures.innerHTML = `
                                <p>History</p>
                                <p>Our Team</p>
                                <p>Blog</p>
                                
        `;
        document.body.appendChild(divFeatures)
        
    }
})