console.log("Holi");

const getRandomID = (min,max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAPI();
})

const fetchAPI = async () => {
    try {
        const id = getRandomID(150,300);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json();
        renderCard(data);
    } catch (error) {
        console.log(error);
    }
}

const renderCard = (data) => {
    console.log(data);
    const main = document.querySelector('main.flex');
    const template = document.getElementById('card-template').content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();
    const {sprites,name,stats,base_experience} = data;

    clone.querySelector('.card-body-img').setAttribute('src',sprites.other.dream_world.front_default);
    clone.querySelector('.card-body-title').innerHTML = `${name}<span> ${stats[0].base_stat}(hp)</span>`;
    clone.querySelector('.card-body-text').textContent = `${base_experience}Exp` ;

    clone.querySelectorAll('.card-footer-social h3')[0].textContent = `${stats[1].base_stat}K `;
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = `${stats[3].base_stat}K `;
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = `${stats[2].base_stat}K `;
    fragment.appendChild(clone);
    main.appendChild(fragment);
    
}