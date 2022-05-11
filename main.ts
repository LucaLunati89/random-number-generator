function randomNumberGenerator (min : number, max : number) : number {
  const initialRandomNumber = Math.random();
  return Math.trunc(initialRandomNumber * (max - min) + min);
}

function randomNumberGeneratorSeq(len : number, min : number, max : number) : number[]{
  if (len > (max - min)){
    throw new Error(`cannot find ${len} numbers between  ${min} and ${max}`);
  }
  const res : number[] = [];
  while(res.length < len){
    const rn = randomNumberGenerator(min, max);
    if(!res.includes(rn)){
      res.push(rn);
    }
  }
return res;
}

const ruote : string[] = ["Bari", "Cagliari", "Firenze", "Genova", "Milano", "Napoli", "Palermo", "Roma", "Torino", "Venezia", "Nazionale"];

const estrazioni : {[ruota : string] : number[]} = {};

for (const ruota of ruote) {
  const estrazione = randomNumberGeneratorSeq(5, 1, 100);
  estrazioni [ruota] = estrazione;
}
console.log(JSON.stringify(estrazioni, null, 2));

function createRuotaContainer(ruotaName : string, estrazioni : number[] ) : HTMLDivElement{
  
  const ruotaDiv = document.createElement('div');
  ruotaDiv.className = `ruota ${ruotaName.toLowerCase()}`;
  const nameH2 = document.createElement('h2');
  nameH2.className = 'ruota-title';
  nameH2.innerText = ruotaName;
  ruotaDiv.appendChild(nameH2);

  for (const num of estrazioni) {
    const numPar = document.createElement('p');
    numPar.innerText = `${num}`;
    const numDiv = document.createElement('div');
    numDiv.className = 'ruota-estrazione';
    numDiv.appendChild(numPar)
    ruotaDiv.appendChild(numDiv);
  }
  
  return ruotaDiv;
}

const container = document.getElementById("estrazioni");
if(container){
  const pre = document.createElement('pre');

  for(const name of ruote) {
    const ruotaEstrazioni = estrazioni[name];
    const nameDiv = createRuotaContainer(name, ruotaEstrazioni);
    container.appendChild(nameDiv);
  }
  // pre.innerText = JSON.stringify(estrazioni, null, 2);
  // container.appendChild(pre);
}
