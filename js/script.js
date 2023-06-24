const galeriaContainer = document.querySelector('.galeria-container');
const galeriaControlesContainer = document.querySelector('.galeria-controles');
const galeriaControles = ['anterior','proximo'];
const galeriaItem = document.querySelector('.galeria-item');

class Carrossel{
    constructor(container, items, controles){
        this.carrosselConteiner = container;
        this.carrosselControles = controles;
        this.carrosselArray = [...items];
    }

    updateGaleria(){
        this.carrosselArray.forEach(el => {
            el.classList.remove('galeria-item-1');
            el.classList.remove('galeria-item-2');
            el.classList.remove('galeria-item-3');
            el.classList.remove('galeria-item-4');
            el.classList.remove('galeria-item-5');
            el.classList.remove('galeria-item-6');
            el.classList.remove('galeria-item-7');
            el.classList.remove('galeria-item-8');
            el.classList.remove('galeria-item-9');
            el.classList.remove('galeria-item-10');
            el.classList.remove('galeria-item-11');
        });

        this.carrosselArray.slice(0, 5).forEach((el , i) =>{
            el.carrosselList.add(`galeria-item-${i+1}`);
        });
    }

    selecionarAtual(direction){
        if(direction.classNome == 'galeria-controles-anterior'){
            this.carrosselArray.unshift(this.carrosselArray.pop());
        }else{
            this.carrosselArray.push(this.carrosselArray.shift());
        }
        this.updateGaleria();
    }

    setControles(){
        this.carrosselControles.forEach(control=>{
            galeriaControlesContainer.appendChild(document.createElement('button')).classNome = `galeria-controles-${control}`;
            document.querySelector(`galeria-controles-${control}`).innerText = control;
        });
    }

    useControles(){
        const triggers = [...galeriaControlesContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.selecionarAtual(control);
            })
        })
    }

}

const exemploCarrossel = new Carrossel(galeriaContainer, galeriaItem, galeriaControles);

exemploCarrossel.setControles();
exemploCarrossel.useControles();