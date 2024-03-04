/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

// ** Premessa **

// L'esercizio parte 1 l'ho svolto inserendo due promt che acquisiscono i dati dall'esterno e li elaborano all'interno della funzione e vengono stampati in console. 
//Facendo partire l'html viene prima chiesto di inserire i dati tramite promt e successivamente è possibile accedere all'inserimento dei dati su html.
//Avrei potuto creare due file distinti e separati ma non ero a conoscenza se si potesse fare o meno.  Spero venga apprezzato.


//Esercizio  Parte 1
//Inserisco tramite dei prompt i campi della ricera e successivamente li trasformo in .toLowerCase()

// trasformo campo lavoro valore inserito in toloweCase
let lavoro = prompt("inserire nome del lavoro che vuoi cercare");
let lavoro1 = lavoro.toLowerCase()

// trasformo campo luogo valore inserito in toloweCase
let luogo = prompt("inserire luogo del lavoro che vuoi cercare");
let luogo1 = luogo.toLowerCase()



// Inserisco funzione che va a ciclare tutto l'array e metterli a confronto con i campi lavoro1 e luogo1 e se entrambi contengono i campi inseriti viene fornito 
//il risultato.
function lavoriTrovati (lavoro1,luogo1) {
 let risultati =  {
 contatore: 0,
 lavori: []
};

 for (let i=0; i<jobs.length; i++)
 if (jobs[i].title.toLowerCase().includes(lavoro1) && jobs[i].location.toLowerCase().includes(luogo1)) {
  risultati.lavori.push(jobs[i]);
  risultati.contatore += 1;
 } else {
  console.log("nessun risultato trovato")
 }
  return risultati;
}
// Fornisco il risultato
let risultatoRicerca = lavoriTrovati(lavoro1, luogo1);
console.log("Risultato della ricerca:");
console.log(risultatoRicerca.lavori);
console.log("Numero di risultati trovati:", risultatoRicerca.contatore);


/*PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!*/

  document.getElementById('pulsante').addEventListener('click', function () {

    // richiamo il valore del campo input "lavoro" e "località" da html a js
  const lavoroInput = document.getElementById('lavoro').value.toLowerCase();
  const luogoInput = document.getElementById('località').value.toLowerCase();

  

  const risultati = lavoriTrovati(lavoroInput, luogoInput);

  const risultatiInfo = document.getElementById('risultatiInfo');
  risultatiInfo.textContent = `La ricerca ha prodotto ${risultati.contatore} risultati: `;

  const cList = document.getElementById('cList');
  cList.innerHTML = ''; 

  risultati.lavori.forEach((lavoro) => {
      const li = document.createElement('li');
      li.textContent = `${lavoro.title} - ${lavoro.location}`;
      li.style.color = 'black';
      cList.appendChild(li);
  });
});
// imposto la funzione al pulsante reset per cancellare quello che è stato stampato dalla ricarca precedente.

document.getElementById('reset').addEventListener('click', function () {
  // Rimuove tutti gli elementi <li> dentro l'ul con id 'cList'
  const cList = document.getElementById('cList');
  cList.innerHTML = '';

  const risultatiInfo = document.getElementById('risultatiInfo');
  risultatiInfo.textContent = '';
});



