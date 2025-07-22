//prendo le variabili (album, overlay, imageOverlay, btn)
const album = document.getElementById(`album`)
const overlay = document.getElementById(`overlay`)
const imageOverlay = document.getElementById(`image-overlay`)
const btn = document.querySelector(".btn")

//definisco la funzione che mi metterà le card nell'album
function createCard(destination) {
  //svuoto le card messe nell'html
      destination.innerHTML = ""
  //utilizzo un ciclo for per prendere 6 immagini
  for (let i=0; i<6; i++) {
    axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then((resp)=>{
      //prendo l'array dal sito
      const objects = resp.data
      //l'oggetto iterato
      const object = objects[i]
      //inserisco i dati dell'oggetto
      // destination.innerHTML += `
      // <div class="col-lg-4 col-md-6 col-sm-12 mt-5">
      //   <div class="card position-relative p-3">
      //     <img class="position-absolute" src="./assets/img/pin.svg" alt="#">
      //     <img src="${object.url}" class="card-img-top" alt="${object.title}">
      //     <div class="card-body">
      //       <h4 class="card-text font">${object.title}</h4>
      //       <p class="card-text date">${object.date}</p>
      //     </div>
      //   </div>
      // </div>`
      //creo gli elementi della card
      const col = document.createElement(`div`)
      col.classList.add(`col-lg-4`, `col-md-6`, `col-sm-12`, `mt-5`)
      const card = document.createElement(`div`)
      card.classList.add(`card`, `position-relative`, `p-3`, `pointer`)
      const pin = document.createElement(`img`)
      pin.classList.add(`position-absolute`)
      pin.src = `./assets/img/pin.svg`
      pin.alt = `pin`
      const photo = document.createElement(`img`)
      photo.src = object.url
      photo.alt = object.title
      const cardBody = document.createElement(`div`)
      cardBody.classList.add(`card-body`)
      const title = document.createElement(`h4`)
      title.classList.add(`card-text`, `font`, `uppercase`)
      title.innerText = object.title
      const paragraph = document.createElement(`p`)
      paragraph.classList.add(`card-text`, `date`)
      paragraph.innerText = object.date
      //costruisco la card
      col.appendChild(card)
      card.appendChild(pin)
      card.appendChild(photo)
      card.appendChild(cardBody)
      cardBody.appendChild(title)
      cardBody.appendChild(paragraph)
      destination.appendChild(col)
      //richiamo l'overlay
      card.addEventListener(`click`,function() {
        overlay.classList.remove(`d-none`)
        imageOverlay.src = object.url
        imageOverlay.alt = object.title
      })
      //effetti hover
      card.addEventListener(`mouseover`, function(){
        card.classList.remove(`rotate-back`)
        card.classList.add(`rotate`)
        pin.classList.add(`d-none`)
      })
      card.addEventListener(`mouseleave`, function(){
        card.classList.remove(`rotate`)
        card.classList.add(`rotate-back`)
        pin.classList.remove(`d-none`)
      })
  })
}

//aggiungo la funzione al bottone nell'overlay
btn.addEventListener(`click`, function() {
  overlay.classList.add(`d-none`)
})
}

//invoco la funzione 
createCard(album)