const locationCard = () => {
    let locationIcon = document.createElement('i');
    locationIcon.classList.add('material-icons','location_pin');
    let locationText1 = document.createElement('div');
    locationText1.classList.add('info-text');
    locationText1.textContent="3131 Trimble Way";
    let locationText2 = document.createElement('div');
    locationText2.classList.add('info-text');
    locationText2.textContent="Sacramento, CA 95825";
    let locationText = document.createElement('div');
    locationText.classList.add('info-content');
    locationText.append(locationText1,locationText2);
    
    let locationCard = document.createElement('a');
    locationCard.classList.add('info-card');
    locationCard.append(locationIcon,locationText);
    locationCard.href ="https://goo.gl/maps/WN9n2zYX8p6jZKuC9";
    console.log(locationCard);
    return locationCard;
};

const timeCard = () => {
    let timeIcon = document.createElement('i');
    timeIcon.classList.add('material-icons','access_time_filled');
    let timeText1 = document.createElement('div');
    timeText1.classList.add('info-text');
    timeText1.textContent="Mon-Thurs: 8am-8pm";
    let timeText2 = document.createElement('div');
    timeText2.classList.add('info-text');
    timeText2.textContent="Fri-Sun: 8am-11pm";
    let timeText = document.createElement('div');
    timeText.classList.add('info-content');
    timeText.append(timeText1,timeText2);

    let timeCard = document.createElement('div');
    timeCard.classList.add('info-card');
    timeCard.append(timeIcon,timeText);

    return timeCard;
};

const contactpage = () => {
    let contact = document.createElement('div');
    let title = document.createElement('h1');
    title.textContent = 'Contact Us';
    contact.classList.add('contact');
    let map = document.createElement('iframe');
    map.classList.add('map');
    map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3117.9716650255086!2d-121.3911203!3d38.6035224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809adbcf0428813d%3A0x53d43556d6235409!2s3131%20Trimble%20Way%2C%20Sacramento%2C%20CA%2095825%2C%20EE.%20UU.!5e0!3m2!1ses-419!2scl!4v1661432141120!5m2!1ses-419!2scl";
    map.setAttribute('loading','lazy');
    map.setAttribute('allowFullscreen','');
    map.setAttribute('referrerpolicy','no-referrer-when-downgrade');

    let location = locationCard();
    let time = timeCard();

    let info = document.createElement('div');
    info.classList.add('contact-info');
    info.append(location,time);

    let contactCard = document.createElement('div');
    contactCard.classList.add('contact-card');
    contactCard.append(map,info);
    contact.append(title,contactCard);
    return contact
}

export {contactpage,locationCard,timeCard};