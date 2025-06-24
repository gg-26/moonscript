# Moonscript

A custom programming language interpreter built in TypeScript, featuring a unique syntax with moon-themed keywords.

## Features

- **Custom Keywords**: `moon` (variables), `star` (functions), `shine` (print)
- **Arithmetic Operations**: `+`, `-`, `*`, `/`, `%`
- **Object Literals**: Property access with dot notation
- **Functions**: First-class functions with closures
- **Built-in Functions**: `shine()` for output, `time()` for timestamps
- **Constants**: `true`, `false`, `null`

## Syntax Examples

```moonscript
// Variable declaration
moon x = 10;

// Function declaration
star add(a, b) {
  a + b
}

// Function call
shine(add(5, 3))

// Object literals
moon person = {
  name: "Alice",
  age: 30
};

shine(person.name)

// Closures
star makeAdder(offset) {
  star add(x, y) {
    x + y + offset
  }
  
  add
}

moon adder = makeAdder(5);
shine(adder(10, 3))
```

## Project Structure

```
moonscript/
├── frontend/
│   ├── lexer.ts      # Tokenizes source code
│   ├── parser.ts     # Builds AST from tokens
│   └── ast.ts        # AST node definitions
├── runtime/
│   ├── interpreter.ts    # Main evaluation engine
│   ├── environment.ts    # Variable scope management
│   ├── values.ts         # Runtime value types
│   └── eval/
│       ├── expressions.ts # Expression evaluation
│       └── statements.ts  # Statement evaluation
├── tests/              # Test files
├── main.ts            # Entry point
└── README.md          # This file
```

## Getting Started

### Prerequisites

- [Deno](https://deno.land/) runtime

### Running Tests

```bash
# Run a specific test file
deno run --allow-read main.ts

# The main.ts file can be modified to run different test files
```

### Development

1. Clone the repository
2. Modify `main.ts` to point to your test file
3. Run with `deno run --allow-read main.ts`

## Language Design

### Keywords
- `moon` - Variable declaration (equivalent to `let`)
- `star` - Function declaration (equivalent to `function`)
- `shine` - Built-in print function
- `const` - Constant declaration

### Data Types
- Numbers (integers)
- Strings
- Booleans (`true`, `false`)
- Objects
- Functions
- Null

### Operators
- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Assignment: `=`
- Property access: `.`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is open source and available under the MIT License. 