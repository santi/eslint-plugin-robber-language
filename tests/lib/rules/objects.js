/**
 * @fileoverview Checks that all object properties are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/objects"),

  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("objects", rule, {

  valid: [
    "var a = { fofoo: 'bar' };",
    "var a = { fofoo: 'bar', bobaror: 'foo' };",
    "var a = { 1: 'foo' };",
    "var a = { 1: 'foo', fofoo: 'bar' };"
  ],

  invalid: [
    {
      code: "var a = { foo: 'bar' };",
      errors: [{
        message: "Object properties must be in robber language.",
        type: "Property"
      }]
    },
    {
      code: "var a = { fofoo: 'bar', bar: 'foo' };",
      errors: [{
        message: "Object properties must be in robber language.",
        type: "Property"
      }]
    },
    {
      code: "var a = { foo1: 'bar' };",
      errors: [{
        message: "Object properties must be in robber language.",
        type: "Property"
      }]
    }
  ]
});
