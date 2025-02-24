const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens';
h1.className = 'title';
document.body.appendChild(h1);

const mainContent = document.createElement('main');
mainContent.className = 'main-content'
document.body.appendChild(mainContent);

const centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

const paragraph = document.createElement('p');
paragraph.innerText = 'Algum texto';
centerContent.appendChild(paragraph);

const leftContent = document.createElement('section');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

const rightContent = document.createElement('section');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
leftContent.appendChild(img);

const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const ul = document.createElement('ul');
ul.innerHTML = numbers.map(number => `<li>${number}</li>`).join('');
rightContent.appendChild(ul);

const titles = ['Título 1', 'Título 2', 'Título 3'];

const h3 = document.createElement('h3');
h3.className = 'description';
h3.innerHTML = titles.map(title => `<h3>${title}</h3>`).join('');
mainContent.appendChild(h3);

const removeLeftContent = document.getElementsByClassName('left-content')[0];
mainContent.removeChild(removeLeftContent);

const sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight = 'auto';

const backgroundColor = document.getElementsByClassName('center-content');
mainContent.style.backgroundColor = 'green';

ul.lastChild.remove();
ul.lastChild.remove();