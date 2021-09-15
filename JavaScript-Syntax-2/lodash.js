var _ = {
    clamp(num, lb, ub){
      const lbClamp = Math.max(num,lb)
      const clampVal = Math.min(lbClamp,ub)
       return clampVal; 
    },
    
    inRange(num, start, end = start){
      let tempNum; 
      if(end === start){
        start = 0;
      }
      if(start > end){
        tempNum = start; 
        start = end; 
        end = tempNum; 
      }
      return num >= start && num < end ? true : false
    },
 
    words(str){
     const words = str.split(' ')
     return words
    },
 
    pad(str, len){
      if(len <= str.length) {return str}
      else{
      const padStart = Math.floor((len - str.length) / 2)
      const padEnd = Math.abs(len - str.length - padStart) 
      const newStr = ' '.repeat(padStart) + str + ' '.repeat(padEnd)
      return newStr;
      }
    },
 
    has(obj, key){
      return obj[key] !== undefined
    },
 
   invert(obj){
     let invertObject = {}
     for(key in obj){
       let originalVal = key.value;
       invertObject[obj[key]] = key;
     }
     return invertObject
   }, 
 
   findKey(obj, pred){
     for(key in obj){
       let value = obj[key]
       let predReturnVal = pred(value)
       if(predReturnVal){
         return key;
       }
     }   
     return undefined
   },
 
   drop(arr, num = 1){
     return arr.slice(num)
   },
 
   dropWhile(arr,pred){ // pred(currElt, currEltIndex, arr)
   
   let dropNum = arr.findIndex(function(elt, index){
     return !pred(elt,index,arr);
   })
   let dropArr = this.drop(arr,dropNum);
   return dropArr;  
   }, 
 
   chunk(arr, size = 1){
     let genArray = [];
     for(let i = 0; i < arr.length; i+=size){
       let arrChunk = arr.slice(i, i + size)
       genArray.push(arrChunk) 
     }
     return genArray
   }
  }
 // Do not write or modify code below this line.
 module.exports = _;