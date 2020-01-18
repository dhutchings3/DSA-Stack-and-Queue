class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}
class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }

        const node = new _Node(data, this.top)
        this.top = node
    }

    pop() {
        const node = this.top
        this.top = node.next

        return node.data
    }
}

const peek = (stack) => {
    if (!stack.top) {
        console.log('Ain\'t nothing in here')
        return;
    }
    console.log(stack.top)
    return stack.top;
}

const isEmpty = (stack) => {
    if (!stack.top) {
        // console.log('The cake is a lie')
        return true;
    }
    // console.log('OMG! There\'s stuff in here!')
    return false;
}

const display = (stack) => {
    if (!stack.top) {
        console.log('Stop giving me empty stacks')
        return;
    }
    let current = stack.top;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
    return;
}

const starTrek = new Stack()

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')
starTrek.push('Scotty')

// console.log(starTrek)

// display(starTrek)

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    const apples = new Stack()
    let orangess = ''

    for (let char of s) {
        apples.push(char)
    }
    while (!isEmpty(apples)) {
        oranges += apples.pop()
    }

    return boots === s
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

const textParser = (expression) => {
    const groceries = new Stack()
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let char in expression) {
        if (expression[char] === "(" || expression[char] === "[" || expression[char] === "{") {
            groceries.push({
                character: expression[char],
                index: char
            })
        }

        if (isEmpty(groceries)) {
            if (expression[char] === ")") {
                console.log(`You are missing a '(' after character index ${char}`)
                return false;
            }
            if (expression[char] === "]") {
                console.log(`You are missing a '[' after character index ${char}`)
                return false;
            }
            if (expression[char] === "}") {
                console.log(`You are missing a '{' after character index ${char}`)
                return false;
            }
        }

        if (expression[char] === ")" || expression[char] === "]" || expression[char] === "}") {
            let priorChar = groceries.pop();
            if (expression[char] !== map[priorChar.character]) {
                console.log(`Expecting a ${map[priorChar.character]} but received a ${expression[char]}`);
                return false;
            }
        }

        //randomChar OR Closing
        // if (expression[char] === ")") {
        //     let priorChar = groceries.pop();
        //     if (priorChar.character === "[") {
        //         console.log(`Expecting a "]" but received a ")"`);
        //         return false;
        //     }
        //     if (priorChar.character === "{") {
        //         console.log(`Expecting a "}" but received a ")"`);
        //         return false;
        //     }
        // }

        // if (expression[char] === "]") {
        //     let priorChar = groceries.pop();
        //     if (priorChar.character === "(") {
        //         console.log(`Expecting a "(" but received a "]"`);
        //         return false;
        //     }
        //     if (priorChar.character === "{") {
        //         console.log(`Expecting a "}" but received a "]"`);
        //         return false;
        //     }
        // }

        // if (expression[char] === "}") {
        //     let priorChar = groceries.pop();
        //     if (priorChar.character === "[") {
        //         console.log(`Expecting a "]" but received a "}"`);
        //         return false;
        //     }
        //     if (priorChar.character === "(") {
        //         console.log(`Expecting a "(" but received a "}"`);
        //         return false;
        //     }
        // }
    }
    if (isEmpty(groceries)) {
        return true;
    }
    console.log(`Holding an open ${groceries.top.data.character} after character index ${groceries.top.data.index}`)
    return false;
}
console.log(textParser("I need apples, bananas, eggs, milk(dairy-free), cheese, breakd[gluten-free], and peanut butter(or almond butter)"))