import Parser from "./frontend/parser.ts";
import { createGlobalEnv } from "./runtime/environment.ts";
import { evaluate } from "./runtime/interpreter.ts";
import { tokenize } from "./frontend/lexer.ts";

run("./tests/test_arithmetic.txt");

async function run(filename: string) {
	const parser = new Parser();
	const env = createGlobalEnv();

	const input = await Deno.readTextFile(filename);
	
	// DEBUG: Show source code, token stream, and AST tree
	// console.log("=== SOURCE CODE ===");
	// console.log(input);
	// console.log("\n");
	
	// console.log("=== TOKEN STREAM ===");
	// const tokens = tokenize(input);
	// tokens.forEach((token, index) => {
	// 	console.log(`Token ${index}: { type: ${token.type}, value: "${token.value}" }`);
	// });
	// console.log("\n");
	
	// console.log("=== AST TREE ===");
	// const program = parser.produceAST(input);
	// console.log(JSON.stringify(program, null, 2));
	// console.log("\n");
	
	// console.log("=== EXECUTION RESULT ===");
	// const result = evaluate(program, env);
	// console.log("Final result:", result);

	const program = parser.produceAST(input);
	const result = evaluate(program, env);
	console.log("Result:", result);
}
