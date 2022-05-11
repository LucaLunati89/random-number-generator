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
