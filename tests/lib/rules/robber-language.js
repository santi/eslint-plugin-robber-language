/**
 * @fileoverview Checks that all variable declarations are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/robber-language"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("robber-language", rule, {

    valid: [
        "var fofoo;",
        "var fofoo, bobaror;",
    ],

    invalid: [
        {
            code: "var foo;",
            errors: [{
                message: "Variable names must be in robber language.",
                type: "VariableDeclaration"
            }]
        }
    ]
});
