import './style.css';
import "@fontsource/roboto";
import { homepage } from './home';
import { menupage } from './menu';
import { contactpage} from './contact';

const updateContent = (newContent) => {
    while (view.lastElementChild) {
        view.removeChild(view.lastElementChild);
    }
    view.append(newContent);
};


let content = document.createElement('div');
content.classList.add('content');

let header = document.createElement('header');
header.classList.add('header');

let headerLogo = document.createElement('div');
headerLogo.classList.add('logo');
headerLogo.textContent = 'Burger Lord';

let headerNav = document.createElement('div');
headerNav.classList.add('nav');

let headerHome = document.createElement('div');
headerHome.classList.add('tab');
headerHome.textContent = 'Home';
headerHome.addEventListener('click', e => {
    updateContent(home);
});

let headerMenu = document.createElement('div');
headerMenu.classList.add('tab');
headerMenu.textContent = 'Menu';
headerMenu.addEventListener('click', e => {
    updateContent(menu);
});

let headerContact = document.createElement('div');
headerContact.classList.add('tab');
headerContact.textContent = 'Contact';
headerContact.addEventListener('click', e => {
    updateContent(contact);
});

headerNav.append(headerHome,headerMenu,headerContact);

header.append(headerLogo,headerNav);

let view = document.createElement('div');
view.classList.add('view');

let contact = contactpage();
let home = homepage();
let menu = menupage();

view.append(home);

let footer = document.createElement('footer');
footer.classList.add('footer');
footer.textContent = 'Copyright © 2022 Adrián Bravo';

content.append(header,view,footer);

document.body.append(content);

export {updateContent,menu};