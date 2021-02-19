import { ISortable } from "./ISortable";


export class CharacterGroup implements ISortable {
    private _data: string;

    constructor (data: string){
      this._data = data;
    }

    get data(){
      return this._data;
    }

    set data (newData: string){
      this._data = newData;
    }


    get length(): number { 
      return this._data.length;
     };


    swap(leftPos: number, rightPos: number):void {
      //first i need to split the words into letters in array;

      let letterArray = this._data.split("");
      let tempLeft = letterArray [leftPos];
      letterArray[leftPos] =letterArray[leftPos+1] ;
      letterArray[leftPos+1] = letterArray[rightPos] 
      letterArray[rightPos] = tempLeft;

      //i need to use join() to combine the letters back to the string
      this._data=letterArray.join("");
    };

       
    compare(leftPos: number, rightPos: number): boolean { // logic };
    let letterArray = this._data.split("");
    
    // localeCompare allow me compare two letters case insensitively.
    // negative means the letter on the left is alphabetically ahead of the letter on the right 

    if (letterArray[leftPos].localeCompare(letterArray[rightPos])<0){
      return false;
    } else{
      return true;
    }
   
    // return letterArray[leftPos] > letterArray[rightPos];


    
  }
}