class CoworkingPage {
  constructor() {
    const navbar = new Navbar();
    navbar.render();

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const coworkingCards = new CoworkingCards();
    fetch('./database/coworkings.json').then((response) => {
      response.json().then(data => {
        const coworking = data.find(el => el.id === parseInt(id))

        if (coworking)
          coworkingCards.render('coworking', coworking);
      })
    })
  }
}

const coworkingPage = new CoworkingPage();