
/* Dato un array di oggetti rappresentante un team di un’azienda,
creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato).

//Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina.
(usate una foto qualunque, anche vostra se volete sentirvi parte del team! :D). */


/* Array di oggetti */
const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "assets/img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "assets/img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "assets/img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "assets/img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "assets/img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "assets/img/female3.png"
    }
  ];

  /* Creo un ciclo for che mi generi le varie card */
  let rowEl = document.querySelector(".row");

  for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];
    console.log(member);
    let {img, name, role, email} = member;
    let markup = `
        <div class="col-sm-12 col-md-6 col-xl-4">
            <div class="card1">
              <div class="row">
                <span class="col-4">
                  <img src="${img}" alt="">
                  </span>
                  <span class="col-8">
                  <h3 class="white">${name}</h3>
                  <h5 class="white">${role}</h5>
                  <p class="blue">${email}</p>
                </span>
              </div>
            </div>
        </div>
    `
    rowEl.innerHTML += markup;
  }