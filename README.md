# Moonscript

A simple scripting language REPL (Read-Eval-Print Loop) built with TypeScript and Deno. Moonscript features a custom lexer, parser, and interpreter for basic arithmetic expressions and null literals.

## Features
- Custom language parser and interpreter
- Supports numeric literals, null, and basic arithmetic (+, -, *, /, %)
- REPL interface for interactive coding
- Written in TypeScript, runs on Deno

## Getting Started

### Prerequisites
- [Deno](https://deno.com/) installed

### Running the REPL
```bash
deno run --allow-read main.ts
```

You will see a prompt:
```
Repl v0.1
> 
```
Type expressions like `1 + 2 * 3` or `null` and see the result. Type `exit` to quit.

## Project Structure
```
frontend/
  lexer.ts      # Tokenizes input
  parser.ts     # Parses tokens into AST
  ast.ts        # AST node definitions
runtime /
  interpreter.ts # Evaluates AST nodes
main.ts         # Entry point and REPL
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

## Contact
Project by team titans. Feel free to reach out for questions or suggestions.
