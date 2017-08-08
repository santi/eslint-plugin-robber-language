/**
 * @fileoverview Checks that all imported variables are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/import"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("import", rule, {

  valid: [
    "import fofoo from 'bar';",
    "import { fofoo } from 'bar';",
    "import { foo as fofoo } from 'bar';",
    "import { default as dodefofauloltot } from 'bar';"
  ],

  invalid: [
    {
      code: "import foo from 'bar';",
      errors: [{
        message: "Imported variable name must be in robber language.",
        type: "ImportDefaultSpecifier"
      }]
    },
    {
      code: "import { foo } from 'bar';",
      errors: [{
        message: "Imported variable name must be in robber language.",
        type: "ImportSpecifier"
      }]
    },
    {
      code: "import { default as def } from 'bar';",
      errors: [{
        message: "Imported variable name must be in robber language.",
        type: "ImportSpecifier"
      }]
    }
  ]
});
