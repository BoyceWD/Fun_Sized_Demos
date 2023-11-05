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

function extractInput(){
    let input = document.forms["binaryInputForm"]["binaryInput"].value

    //ToDo

    // check if input is a length of eight characters
    // check that input contains only ones and zeros
    // if the input fails to meet the previous two criteria alert user
    // if input is valid instantiate a stack and insert input into the stack
    console.log(input);
}