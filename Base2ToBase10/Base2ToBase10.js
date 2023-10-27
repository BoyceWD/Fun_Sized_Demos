class Stack {
    constructor(){
        this.items = [];
        this.top =0;
    }

    push(element){
        this.items[this.top] = element;
        this.top = this.top +1;

    }

    pop(){
        if( this.isEmpty === false){
            this.top = this.top - 1;
            return this.items.pop();
        }
        
    }

    peek(){
        return this.items[this.top - 1];
    }

    length(){
        return this.top;
    }

    isEmpty(){
        return this.top === 0;
    }

    print(){
        var top = this.top - 1;
        while(top >= 0){
            console.log(this.items[top]);
            top--;
        }
    }
}

