import 'material-design-icons-iconfont'
import { locationCard, timeCard } from './contact.js';
import { updateContent,menu } from "./index.js";

const homepage = () => {
    let home = document.createElement('div');
    home.classList.add('home');
    let hero = document.createElement('div');
    hero.classList.add('home-hero');
    let heroImg = document.createElement('img');
    heroImg.classList.add('hero-img');
    heroImg.src = new URL('./assets/home.webp',import.meta.url);
    let heroCont = document.createElement('div');
    heroCont.classList.add('hero-cont');
    let heroContTitle = document.createElement('div');
    heroContTitle.classList.add('hero-cont-title');
    heroContTitle.textContent='Welcome to the Burger Kingdom';
    let heroContDesc = document.createElement('div');
    heroContDesc.classList.add('hero-cont-desc');
    heroContDesc.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    let heroContBtn = document.createElement('button');
    heroContBtn.textContent='See our products';
    heroContBtn.addEventListener('click', e => {
        updateContent(menu);
    });
    heroCont.append(heroContTitle,heroContDesc,heroContBtn);
    
    let location = locationCard();
    let time = timeCard();

    let infoCards = document.createElement('div');
    infoCards.classList.add('info-cards');
    infoCards.append(location,time);
    
    
    hero.append(heroImg,heroCont);
    home.append(infoCards,hero);
    return home;
}

export {homepage};