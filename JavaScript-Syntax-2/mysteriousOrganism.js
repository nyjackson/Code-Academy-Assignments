// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, dnaArr) => {
  const obj = {
    specimenNum: num,
    dna: dnaArr,
    mutate() {
      let posDNA = Math.floor(Math.random() * this.dna.length)
      let randBase = returnRandBase()
      while (this.dna[posDNA] === randBase) {
        randBase = returnRandBase();
      }
      this.dna[posDNA] = randBase
      return this.dna;
    },
    compareDNA(otherOrg) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === otherOrg.dna[idx]) {
          return acc + 1
        }
        else {
          return acc
        }
      }, 0);
      const percentShared = (similarites / this.dna.length) * 100
      const percentageToDecimal = percentShared.toFixed(2);
      console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`);

    },
    willLikelySurvive() {
      const compOrg = this.dna.filter(elt => elt === 'C' || elt === 'G');
      return compOrg.length / this.dna.length >= 0.6;
    },
    complementStrand() {
      let complementArr = []
      const compOrg = this.dna.map(strand => {
        switch (strand) {
          case 'A':
            complementArr.push('T')
            break;
          case 'T':
            complementArr.push('A')
            break;
          case 'G':
            complementArr.push('C')
            break;
          case 'C':
            complementArr.push('G')
            break;
        }
      })
      return complementArr;
    },
  }
  return obj
};

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)


let newOrg = pAequorFactory(0, mockUpStrand());
console.log(newOrg.dna)
console.log(newOrg.complementStrand())




