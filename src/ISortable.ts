

// export interface ISortable{
// data: number[] | string;
// get length(): number {} 
// swap(leftPos: number, rightPos: number):void {}
// compare(leftPos: number, rightPos: number): boolean { }
// }

export interface ISortable {
    length: number;
    compare(leftPos: number, rightPos: number): boolean;
    swap(left: number, right: number): void;
  }