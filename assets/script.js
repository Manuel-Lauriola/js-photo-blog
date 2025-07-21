//prendo le variabili (album)
const album = document.getElementById(`album`)

//definisco la funzione che mi metterà le card nell'album
function createCard(destination) {
  //svuoto le card messe nell'html
      destination.innerHTML = ""
  //utilizzo un ciclo for per prendere 6 immagini
  for (let i=0; i<6; i++) {
    axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then((resp)=>{
      //prendo l'array dal sito
      const cards = resp.data
      //l'oggetto iterato
      const card = cards[i]
      //inserisco i dati dell'oggetto
      destination.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12 mt-5">
        <div class="card position-relative p-3">
          <img class="position-absolute" src="./assets/img/pin.svg" alt="#">
          <img src="${card.url}" class="card-img-top" alt="${card.title}">
          <div class="card-body">
            <p class="card-text font">${card.title}</p>
            <p class="card-text date">${card.date}</p>
          </div>
        </div>
      </div>`
    })
  }
}

//invoco la funzione 
createCard(album)