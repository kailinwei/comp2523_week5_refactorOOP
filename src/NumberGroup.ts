import { ISortable } from "./ISortable";

export class NumberGroup implements ISortable{
    private _data: number[];

    constructor(data:number[]){
      this._data = data;
    }

    get data(){
      return this._data;
    }

    set data(newData: number[]){
       this._data= newData; 
    }
    get length(): number { 
      return this._data.length;
    }


    swap(leftPos: number, rightPos: number):void { 
      
      let tempLeft =this._data [leftPos];
      this._data[leftPos] = this._data[leftPos+1];
      this._data[leftPos+1] =this._data[rightPos];
      this._data[rightPos] = tempLeft;
      }
       


    compare(leftPos: number, rightPos: number): boolean{
      //when leftPos is bigger than rightPos, need to swap = true
     
      // if (this._data[leftPos] < this._data[rightPos]){
      //   return  true;
      // }else {
      //   return false;}


      return this.data[leftPos] > this.data[rightPos];
      }
    
  };

