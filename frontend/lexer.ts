export enum TokenType {
    //literal types
    Null,
    Number,
    Identifier,
    
    //keywords
    Let,

    //operators, grouping
    Equals,
    OpenParen,
    CloseParen,
    BinaryOperator,
    
    EOF, // signifies end of file
}

const KEYWORDS: Record<string, TokenType> = {
    "let": TokenType.Let,
    null: TokenType.Null,   
}
export interface Token {
    value: string,
    type: TokenType,
}

function token(value = "", type: TokenType): Token {
    return {value, type};
} 

function isalpha(src: string) { 
    return src.toUpperCase() != src.toLowerCase();
}

function isskippable(src: string) {
    return src == " " || src == "\n" || src == "\t";
}
function isint (str: string) {
    const c = str.charCodeAt(0);
    const bounds = ['0'.charCodeAt(0), '9'.charCodeAt(0)];
    return (c >= bounds[0] && c <= bounds[1]);
}

export function tokenize(sourceCode: string): Token[] {
    const tokens = new Array<Token>();
    const src = sourceCode.split("");

    //build each token until end of file
    while (src.length > 0) {
        if(src[0] == "(") {
            tokens.push(token(src.shift(), TokenType.OpenParen));
        } else if(src[0] == ")") {
            tokens.push(token(src.shift(), TokenType.CloseParen));
        } else if(src[0] == "+" || src[0] == "-" || src[0] == "*" || src[0] == "/"  || src[0] == "%") {
            tokens.push(token(src.shift(), TokenType.BinaryOperator));
        } else if(src[0] == "=") {
            tokens.push(token(src.shift(), TokenType.Equals));
        } else {
            //handle multi character tokens

            //build number token
            if(isint(src[0])) {
                let num = "";
                while(src.length > 0 && isint(src[0])) {
                    num += src.shift();
                }

                tokens.push(token(num, TokenType.Number));
            } else if(isalpha(src[0])) {
                let ident = "";
                while(src.length > 0 && isalpha(src[0])) {
                    ident += src.shift();
                }
                //check if keyword
                const reserved = KEYWORDS[ident];
                 
                if(typeof reserved == "number") {
                    tokens.push(token(ident, reserved));
                } else {
                    tokens.push(token(ident, TokenType.Identifier));
                }
            } else if(isskippable(src[0])) {
                src.shift(); // skip whitespace
            } else {
               console.log("Unrecognized character found: ",src[0]);
               Deno.exit(1);
            }
        }
    }
    tokens.push({type: TokenType.EOF, value: "EndOfFile"}); // signify end of file
    return tokens; 
} 

// const source = await Deno.readTextFile("./test.txt");
// for (const token of tokenize(source)) {
//     console.log(token);
// }  