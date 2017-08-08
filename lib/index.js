/**
 * @fileoverview Checks that all variable declarations are typed correctly in robber language
 * @author Vemund Santi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  configs: {
    recommended: {
      rules: {
        "robber-language/variables": "error",
      },
    },
  },
  // import all rules in lib/rules
  rules: requireIndex(__dirname + "/rules"),
};
