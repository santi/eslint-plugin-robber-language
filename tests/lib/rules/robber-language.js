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

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var foo;",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
