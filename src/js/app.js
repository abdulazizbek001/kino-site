const elList = document.getElementById('list');

fetch('https://6537a88fbb226bb85dd39095.mockapi.io/student/movie')
    .then((rec) => rec.json())
    .then((data) => getMovie(data));

function getMovie(item) {
    item.forEach((element) => {
        const elItem = document.createElement('li');
        const elItemImg = document.createElement('img');
        const elItemName = document.createElement('h4');
        const elItemLink = document.createElement('a');
        const elItemReyting = document.createElement('p');

        elItemImg.src = element.avatar;
        elItemName.textContent =  `name: ${element.name.slice(0, 14)}...`;
        elItemLink.textContent = 'Batafsil';
        elItemReyting.textContent = `Renting: ${element.renting}`;


        elList.append(elItem);
        elItem.append(elItemImg, elItemLink, elItemName, elItemReyting);

        elItemImg.addEventListener('mouseover', () => {
            elItemLink.style.display = 'inline-block';
        });

        elItemImg.addEventListener('mouseout', () => {
            elItemLink.style.display = 'none';
        });
    });
};