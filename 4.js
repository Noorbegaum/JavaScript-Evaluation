class Stack{
    constructor() {
        this.items = [1,6,3,4,2,7,8];
    }
    Top() {
        return this.items[this.items.length - 1];
    }
    Push(element) {
        return this.items.push(element);
    }
    Pop() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    isEmpty(){
        return this.items.length == 0;
     }
    size(){
        return this.items.length;
    }

}
let stack = new Stack();
function removeOdd(items){
   
    items.forEach(element => {
        if (element % 2 == 0){
            stack.Push(element);
        }
      
    });
    
}
console.log(stack.items);
console.log(removeOdd(stack.items));