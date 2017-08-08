/**
 * @fileoverview Checks that all function declarations are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/functions"),

  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("functions", rule, {

  valid: [
    "function fofoo() {};"
  ],

  invalid: [
    {
      code: "function foo() {}",
      errors: [{
        message: "Function name must be in robber language.",
        type: "FunctionDeclaration"
      }]
    }
  ]
});
