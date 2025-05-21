import { ValueTypes, RuntimeVal, NumberVal, NullVal} from "./values.ts"
import { NumericLiteral , Stmt } from "../frontend/ast.ts";

export function evaluate(astNode: Stmt): RuntimeVal {
    switch (astNode.kind) {
       case "NumericLiteral":
            return { 
                value: ((astNode as NumericLiteral).value),
                type: "number",
            } as NumberVal;
        
            case "NullLiteral":
                return { value: "null", type: "null" } as NullVal;
        
            default: 
                console.error("this AST node has not been implemented yet");
                Deno.exit(1);
    }
}