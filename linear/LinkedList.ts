import LinearStruct from './LinearStruct';

class ListNode {
  private _data: any;
  private _next: number;

  constructor(data: any){
    this._data = data;
    this._next = 0;
  }

  public get data(): any { return this._data; }

  public set data(nData: any){ this._data = nData; }

  public get next(): number { return this._next; }

  public set next(nNext: number){ this._next = nNext; }
}

class LinkedList extends LinearStruct {
  private _head: ListNode;
  private _last: ListNode;

  constructor(){
    super();
    super.front = new ListNode("HEAD");
    super.back = new ListNode("NULL");
    super.struct = [super.front, super.back];
    super.length = 2;
    super.front.next = 1;
    super.back.next = null;
    this._head = super.front;
    this._last = super.back;
  }

  public insert(data: any): void {
    const node = new ListNode(data);

    if(this.isEmpty()){
      node.next = super.length;

      super.struct[this.head.next] = node;
      super.struct[node.next] = this.last;
    }else if(!super.isFull()){
      const lastButOne = super.length - 1;
      node.next = super.length;

      super.struct[lastButOne] = node;
      super.struct[node.next] = this.last;
    }

    super.length += 1;
  }

  public remove(): void {
    if(!super.isEmpty()){
      const lastButOne = super.length - 2;
    
      super.struct.splice(lastButOne, 1);

      super.length -= 1;
    }
  }

  public isEmpty(): boolean {
    super.isEmpty();
    return super.length - 2 === 0;
  }

  public get head(): ListNode { return this._head; }

  public set head(nHead: ListNode){ this._head = nHead; }

  public get last(): ListNode { return this._last; }

  public set last(nLast: ListNode){ this._last = nLast; }
}
