//Language Switch Logic
const langData = {
  en: {
    langBtnText: "Norsk",
    menuHome: "Home",
    menuArtists: "Artists",
    menuTickets: "Tickets",
    menuFaq: "FAQ",
    counterTitle: "Time until fest start",
    daysLabel: "Days",
    hoursLabel: "Hours",
    minLabel: "Min.",
    secLabel: "Sec.",
    heroTitle: "WELCOME TO MUSICFESTIVAL",
    heroSub: "Five days of electronic music, live sets, and unforgettable nights together.",
    exploreBtn: "EXPLORE ARTISTS",
    joinTitle: "Do you want to join?",
    buyBtn: "Buy Tickets",
    ourArtistsTitle: "OUR ARTISTS",
    ourArtistsSub: "Headliners and rising talents across EDM, techno, house, and trance.",
    programTitle: "Festival Program",
    programSub: "Five days of music from July 15 to July 19, 2027.",
    buyTicketsHeader: "BUY TICKETS",
    yourInfoTitle: "Your info",
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    faqQ1: "Where does MUSIKKFESTIVAL take place?",
    faqA1: "The festival takes place at Havneparken Open Arena, Trondheim, Norway. Gates open 1 hour before the first set each day.",
    faqQ2: "What is the age limit?",
    faqA2: "The general age limit is 18+. Guests aged 15-17 may enter until 21:00 only when accompanied by a legal guardian over 25.",
    faqQ3: "Can I get a refund on my tickets?",
    faqA3: "Tickets are non-refundable unless the event is canceled. You can transfer your ticket name up to 48 hours before the festival starts.",
    faqQ4: "What items are prohibited inside?",
    faqA4: "Outside food and drinks, glass bottles, professional cameras, drones, and sharp objects are not allowed inside the festival area.",
    faqQ5: "How do wristbands and re-entry work?",
    faqA5: "Multi-day and All Fest tickets are exchanged for a personal wristband at the entrance. Re-entry is allowed until 22:00 each evening.",
    ftrT1: "About",
    ftrP1: "MUSIKKFESTIVAL is an annual music gathering bringing together artists and fans for five days of live sound.",
    ftrT2: "Info & Tickets",
    ftrP2: "Festival runs 15.07 - 19.07.2027. Single day, multi-day, weekend, and full festival passes available.",
    ftrT3: "Contact",
    ftrP3: "Questions about lineup, passes, or venue? Reach out via our official channels or check our FAQ."
  },
  no: {
    langBtnText: "English",
    menuHome: "Hjem",
    menuArtists: "Artister",
    menuTickets: "Billetter",
    menuFaq: "FAQ",
    counterTitle: "Tid til festivalstart",
    daysLabel: "Dager",
    hoursLabel: "Timer",
    minLabel: "Min.",
    secLabel: "Sek.",
    heroTitle: "VELKOMMEN TIL MUSIKKFESTIVAL",
    heroSub: "Fem dager med elektronisk musikk, live-sett og uforglemmelige netter sammen.",
    exploreBtn: "UTFORSK ARTISTER",
    joinTitle: "Vil du bli med?",
    buyBtn: "Kjøp billetter",
    ourArtistsTitle: "VÅRE ARTISTER",
    ourArtistsSub: "Hovedartister og nye talenter innen EDM, techno, house og trance.",
    programTitle: "Festivalprogram",
    programSub: "Fem dager med musikk fra 15. juli til 19. juli 2027.",
    buyTicketsHeader: "KJØP BILLETTER",
    yourInfoTitle: "Din informasjon",
    faqTitle: "OFTE STILTE SPØRSMÅL",
    faqQ1: "Hvor finner MUSIKKFESTIVAL sted?",
    faqA1: "Festivalen arrangeres på Havneparken Open Arena i Trondheim, Norge. Portene åpner 1 time før første konsert hver dag.",
    faqQ2: "Hva er aldersgrensen?",
    faqA2: "Generell aldersgrense er 18 år. Gjester mellom 15 og 17 år kan komme inn frem til kl. 21:00 kun i følge med verge over 25 år.",
    faqQ3: "Kan jeg få refundert billettene mine?",
    faqA3: "Billetter refunderes ikke med mindre arrangementet blir avlyst. Du kan endre navn på billetten inntil 48 timer før festivalstart.",
    faqQ4: "Hvilke gjenstander er forbudt inne på området?",
    faqA4: "Medbrakt mat og drikke, glassflasker, profesjonelle kameraer, droner og skarpe gjenstander er ikke tillatt på festivalområdet.",
    faqQ5: "Hvordan fungerer armbånd og innslipp?",
    faqA5: "Flerdagerspass og All Fest-billetter byttes mot personlig armbånd ved inngangen. Ut- og innslipp er tillatt frem til kl. 22:00 hver kveld.",
    ftrT1: "Om oss",
    ftrP1: "MUSIKKFESTIVAL er en årlig musikkfestival som samler artister og publikum til fem dager med livemusikk.",
    ftrT2: "Info & Billetter",
    ftrP2: "Festivalen varer fra 15.07 til 19.07.2027. Dagspass, flerdagerspass, helgepass og festivalpass er tilgjengelig.",
    ftrT3: "Kontakt",
    ftrP3: "Spørsmål om program, billetter eller område? Ta kontakt via våre offisielle kanaler eller sjekk vår FAQ."
  }
};

const langButt = document.getElementById('langButt');
let currentLang = localStorage.getItem('festLang') || 'en';

function applyLanguage(lang) {
  const dict = langData[lang];
  if (!dict) return;

  if (langButt) {
    langButt.textContent = dict.langBtnText;
  }

  const langElements = document.querySelectorAll('[data-lang]');
  langElements.forEach(el => {
    const key = el.getAttribute('data-lang');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

applyLanguage(currentLang);

if (langButt) {
  langButt.addEventListener('click', (e) => {
    e.preventDefault();
    currentLang = currentLang === 'en' ? 'no' : 'en';
    localStorage.setItem('festLang', currentLang);
    applyLanguage(currentLang);
  });
}

//Schedule buttons
const scheduleData = [
  {
    day: "Wed. 15.07",
    lineup: [
      "16:30-17:30 Zayro",
      "17:30-19:00 Noir",
      "19:00-20:30 Elian",
      "20:30-22:00 Kairo",
      "22:00-23:30 Nova Kay",
      "23:30-01:00 Alex Vane"
    ]
  },
  {
    day: "Thur. 16.07",
    lineup: [
      "16:00-17:30 Zayro",
      "17:30-19:00 Elian",
      "19:00-20:30 Noir",
      "20:30-22:00 Kairo",
      "22:00-23:30 Alex Vane",
      "23:30-01:30 Nova Kay"
    ]
  },
  {
    day: "Fri. 17.07",
    lineup: [
      "16:30-18:00 Kairo",
      "18:00-19:30 Zayro",
      "19:30-21:00 Nova Kay",
      "21:00-22:30 Elian",
      "22:30-00:00 Noir",
      "00:00-02:00 Alex Vane"
    ]
  },
  {
    day: "Sut. 18.07",
    lineup: [
      "16:00-17:30 Elian",
      "17:30-19:00 Kairo",
      "19:00-20:30 Zayro",
      "20:30-22:00 Nova Kay",
      "22:00-23:45 Alex Vane",
      "23:45-01:30 Noir"
    ]
  },
  {
    day: "Sun. 19.07",
    lineup: [
      "15:30-17:00 Jonny McRap",
      "17:00-18:30 Elian",
      "18:30-20:00 Kairo",
      "20:00-21:30 Zayro",
      "21:30-23:00 Nova Kay",
      "23:00-01:00 Alex Vane"
    ]
  }
];

const schButt = document.querySelectorAll('.schButt');
const scheduleList = document.getElementById('scheduleList')

function renderSchedule(dayIndex) {
  const dayInfo = scheduleData[dayIndex];
  if (!dayInfo) return;

  // Очищаем текущий список и наполняем новыми строками
  scheduleList.innerHTML = '';
  dayInfo.lineup.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    scheduleList.appendChild(li);
  });
}

// 3. Обработчик клика по кнопкам дней
schButt.forEach((button, index) => {
  button.addEventListener('click', () => {
    schButt.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderSchedule(index);
  });
});

//Artists Button Logic
const artistsData = [
  {
    name: "Alex Vane",
    genre: "EDM / Progressive House",
    bio: "ALEX VANE is a world-famous DJ known for energetic sets and impressive visual performances. His music combines powerful beats with emotional melodies, making every performance a unique experience.",
    image: "img/Artists/AlexVane.jpg"
  },
  {
    name: "Nova Kay",
    genre: "Melodic Techno / Synthwave",
    bio: "NOVA KAY brings hypnotic rhythms and futuristic synth lines to the mainstage.",
    image: "img/Artists/NovaKay.jpg"
  },
  {
    name: "Noir",
    genre: "Dark Techno / Industrial",
    bio: "NOIR delivers heavy basslines and mysterious underground atmospheres.",
    image: "img/Artists/Noir.jpg"
  },
  {
    name: "Kairo",
    genre: "Tech House / Bass",
    bio: "KAIRO is known for infectious grooves and high-energy crowd interaction.",
    image: "img/Artists/Kairo.jpg"
  },
  {
    name: "Zayro",
    genre: "Future Rave / Electro",
    bio: "ZAYRO blends massive festival drops with cinematic sound design.",
    image: "img/Artists/Zayro.jpg"
  },
  {
    name: "Elian",
    genre: "Trance / Progressive",
    bio: "ELIAN creates euphoric soundscapes that take listeners on an emotional journey.",
    image: "img/Artists/Elian.jpg"
  }
];
const artistsDataNo = [
  {
    name: "Alex Vane",
    genre: "EDM / Progressive House",
    bio: "ALEX VANE er en verdenskjent DJ, kjent for energiske sett og imponerende visuelle opptredener. Musikken hans kombinerer kraftige rytmer med følelsesladde melodier, noe som gjør hver opptreden til en unik opplevelse.",
    image: "img/Artists/AlexVane.jpg"
  },
  {
    name: "Nova Kay",
    genre: "Melodic Techno / Synthwave",
    bio: "NOVA KAY bringer hypnotiske rytmer og futuristiske synthlinjer til hovedscenen.",
    image: "img/Artists/NovaKay.jpg"
  },
  {
    name: "Noir",
    genre: "Dark Techno / Industrial",
    bio: "NOIR leverer tunge basslinjer og mystiske undergrunnsatmosfærer.",
    image: "img/Artists/Noir.jpg"
  },
  {
    name: "Kairo",
    genre: "Tech House / Bass",
    bio: "KAIRO er kjent for fengende grooves og energisk samspill med publikum.",
    image: "img/Artists/Kairo.jpg"
  },
  {
    name: "Zayro",
    genre: "Future Rave / Electro",
    bio: "ZAYRO kombinerer massive festival-drops med filmatisk lyddesign.",
    image: "img/Artists/Zayro.jpg"
  },
  {
    name: "Elian",
    genre: "Trance / Progressive",
    bio: "ELIAN skaper euforiske lydlandskap som tar lytterne med på en emosjonell reise.",
    image: "img/Artists/Elian.jpg"
  }
];


const butt = document.querySelectorAll('.artistButt');
const photo = document.getElementById('artPhoto');
const name = document.getElementById('artName');
const genre = document.getElementById('artGenre');
const bio = document.getElementById('artBio');
const langButtActive = document.getElementById('langButt');

if (langButtActive.textContent == 'English') {
    butt.forEach((btn, index) => {
        btn.addEventListener('click', () => {

        butt.forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        const artist = artistsDataNo[index];

        photo.src = artist.image;
        photo.alt = artist.name;
        name.textContent = artist.name;
        genre.textContent = artist.genre;
        bio.textContent = artist.bio;
  });
});
}
else {
    butt.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        butt.forEach(b => b.classList.remove('active'));
    
        btn.classList.add('active');

        const artist = artistsData[index];

        photo.src = artist.image;
        photo.alt = artist.name;
        name.textContent = artist.name;
        genre.textContent = artist.genre;
        bio.textContent = artist.bio;
  });
});
}

console.log(langButtActive.textContent)



//Tickets Button Logic
const ticketsData = [
  {
    name: "1 day ticket",
    price: "200kr",
    desc: "Access for one selected day of MUSIKKFESTIVAL (15.07 - 19.07.2027). Includes all stages and performances on your chosen day."
  },
  {
    name: "Wed. - Fri.",
    price: "500kr",
    desc: "Three-day pass for Wednesday 15.07, Thursday 16.07 and Friday 17.07. Full festival access for the first three days."
  },
  {
    name: "Weekends",
    price: "300kr",
    desc: "Weekend pass for Saturday 18.07 and Sunday 19.07. Enjoy closing sets and full access across the weekend."
  },
  {
    name: "All Fest",
    price: "800kr",
    desc: "Full five-day pass from Wednesday 15.07 to Sunday 19.07.2027. Complete access to the entire festival program."
  }
];

const tcktButt = document.querySelectorAll('.tcktButt');
const tcktName = document.getElementById('tcktName');
const tcktPrice = document.getElementById('tcktPrice');
const tcktDesc = document.getElementById('tcktDesc');

tcktButt.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    tcktButt.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const ticket = ticketsData[index];
    if (!ticket) return;

    tcktName.textContent = ticket.name;
    tcktPrice.textContent = ticket.price;
    tcktDesc.textContent = ticket.desc;
  });
});

//Menu Logic
const hdrMenuButt = document.getElementById('hdrMenuButt');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuButt = document.getElementById('closeMenuButt');

if (hdrMenuButt && menuOverlay && closeMenuButt) {
  hdrMenuButt.addEventListener('click', (e) => {
    e.preventDefault();
    menuOverlay.classList.add('open');
  });

  closeMenuButt.addEventListener('click', (e) => {
    e.preventDefault();
    menuOverlay.classList.remove('open');
  });

  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove('open');
    }
  });
}

//FAQ Logic
const faqItems = document.querySelectorAll('.faqItem');

faqItems.forEach(item => {
  const questBtn = item.querySelector('.faqQuest');
  if (!questBtn) return;

  questBtn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});