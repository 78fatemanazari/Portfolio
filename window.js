const cards = [
  {
    id: 1,
    imageSource: './images/1.PNG',
    titleOfProjects: 'Tonic',
    theClient: 'CANOPY',
    theRole: 'Back End Dev',
    theYear: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
  },
  {
    id: 2,
    imageSource: './images/card2.png',
    titleOfProjects: 'Multi-Post Stories',
    theClient: 'CANOPY',
    theRole: 'Back End Dev',
    theYear: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
  },
  {
    id: 3,
    imageSource: './images/card3.png',
    titleOfProjects: 'Tonic',
    theClient: 'CANOPY',
    theRole: 'Back End Dev',
    theYear: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
  },
  {
    id: 4,
    imageSource: './images/card4.png',
    titleOfProjects: 'Multi-Post Stories',
    theClient: 'CANOPY',
    theRole: 'Back End Dev',
    theYear: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
  },
];

let cardHtml = '';
cards.forEach((project) => {
  cardHtml += `
    <div class="cards-container">
        <div class="cards">
            <div class="cards-img">
                <img src="${project.imageSource}" alt="card1 img">
            </div> 
            <div class="cards-heading">
                <h3>${project.titleOfProjects}</h3>
                <div class="cards-details">
                    <h6>${project.theClient}</h6>
                    <div>●</div>
                    <h6>${project.theRole}</h6>
                    <div>●</div>
                    <h6>${project.theYear}</h6>
                </div>
                <div class="cards-para">
                    <p>${project.description}</p>
                </div>
                <div class="cards-languages">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <button class="cards-button" type="submit" id='${project.id}'>See project</button>
            </div>
        </div>
    </div>`;
});

const cardsContainerSection = document.getElementById('cards-container-section');
cardsContainerSection.innerHTML = cardHtml;

const popUpWindow = document.querySelector('.popup-cards-container');
const openWindow = function () {
  popUpWindow.classList.add('open-window');
};

function Selection(e) {
  if (e.target.id !== null) {
    const theItem = cards.find((projects) => projects.id === Number(e.target.id));
    if (theItem !== undefined) {
      const popUpCardHhtml = `
            <div class="popup-cards">
            <div class="popup-cards-title">
                <h2>${theItem.titleOfProjects}</h2>
                <img id="close" src="images/Icon - Cancel.png" alt="card1 img">
            </div>
            <div class="popup-cards-details">
                <h6>${theItem.theClient}</h6>
                <div>●</div>
                <h6>${theItem.theRole}</h6>
                <div>●</div>
                <h6>${theItem.theYear}</h6>
            </div>
            <div class="popup-cards-img">
                <img src="${theItem.imageSource}" alt="card1 img">
            </div>
            <div class="popup-cards-description">
                <div class="popup-cards-para">
                    <p>${theItem.longDescription}</p>
                </div>
                <div class="popup-cards-tech">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Ruby</li>
                        <li>Bootstrap</li>
                    </ul>
                    <div class="popup-cards-button">
                        <a href="https://78fatemanazari.github.io/Capstone-project/">
                        <button type="submit">See live 
                          <img class="purple" src="images/Icon - Export.svg" alt="export icon">
                          <img class="white" src="images/Icon - Export 2.svg" alt="export icon">
                        </button>
                        </a>
                        <a href="https://github.com/78fatemanazari/Capstone-project">
                        <button type="submit">See source 
                          <img class="purple" src="images/Frame.svg" alt="frame icon">
                          <img class="white" src="images/Frame 2.svg" alt="frame icon">
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
      document.querySelector('.popup-cards-container').innerHTML = popUpCardHhtml;
      openWindow();
      const closeWindow = document.querySelector('#close');
      closeWindow.addEventListener('click', () => {
        popUpWindow.classList.remove('open-window');
      });
    }
  }
}

cardsContainerSection.addEventListener('click', Selection);
