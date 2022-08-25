import image1 from './assets/burger.png'
import image2 from './assets/burger2.png'

const menupage = () => {

    const Card = (title,description,ingredients,price,image) => {
        let content = document.createElement('div');
        content.classList.add('card');
        let _title = document.createElement('div');
        _title.classList.add('title');
        _title.textContent=title;
        let _desc = document.createElement('div');
        _desc.classList.add('desc');
        _desc.textContent=description;
        let _img = document.createElement('img');
        _img.src = image;
        let _imgCont = document.createElement('div');
        _imgCont.classList.add('img');
        _imgCont.append(_img);
    
        let _ingredients = document.createElement('div');
        _ingredients.classList.add('ingredients');
        let _ing_list = document.createElement('ul');
        ingredients.forEach( ingredient => {
            let _ing = document.createElement('li');
            _ing.textContent = ingredient;
            _ing_list.append(_ing);
        })
        _ingredients.append(_ing_list);
        let _price = document.createElement('div');
        _price.classList.add('price');
        _price.textContent="$"+price;
        let _btn = document.createElement('button');
        _btn.classList.add('btn');
        _btn.textContent = "View product";
    
        content.append(_title,_desc,_imgCont,_ingredients,_price,_btn);
    
        const getHTML = () => {
            return content;
        }
    
        const getObject = () => {
            return {title,description,button,image};
        }
        return {getHTML,getObject}
    }
    
    let menu = document.createElement('div');
    menu.classList.add('menu');
    let title = document.createElement('h1');
    menu.append(title);
    menu.appendChild(
        Card('Rainy Day Burger','Your favourite, created during a long, heavy rain in London.',['Onion Rings','Cheddar','BBQ','Meat'],"9,99",image1)
        .getHTML()
    )
    menu.appendChild(
        Card('Double F Burger','Flavors! Fun! What else do you need?',['Lettuce','Bacon','Pickle','Meat'],"4,99",image2)
        .getHTML()
    )    

    return menu;
}

export {menupage}