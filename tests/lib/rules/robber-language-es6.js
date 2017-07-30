/**
 * @fileoverview Checks that all variable declarations are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/robber-language-es6"),

    RuleTester = require("eslint").RuleTester;

    RuleTester.setDefaultConfig({
      parserOptions: {
        ecmaVersion: 6
      }
    });
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("robber-language-es6", rule, {

    valid: [

        "let fofoo;",
        "const fofoo = 'bar';",
        "let fofoo, bobaror;"
    ],

    invalid: [
        {
            code: "let foo;",
            errors: [{
                message: "Variable names must be in robber language.",
                type: "VariableDeclaration"
            }]
        }
    ]
});
