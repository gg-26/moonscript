import Parser from "./frontend/parser.ts";
import { evaluate } from "./runtime/interpreter.ts";
import { tokenize } from "./frontend/lexer.ts";

repl();

function repl() {
  const parser = new Parser();
  console.log("\nRepl v0.1");

  while (true) {
    const input = prompt("> ");
    // Check for no user input or exit keyword.
    if (!input || input.includes("exit")) {
      Deno.exit(1);
    }

    // Produce AST From sourc-code
    const program = parser.produceAST(input);
    
    const tokens = tokenize(input);
    console.log("Tokens:", tokens);

    console.log("AST:", JSON.stringify(program, null, 2));
    const result = evaluate(program);
    console.log(result);
  }
}
