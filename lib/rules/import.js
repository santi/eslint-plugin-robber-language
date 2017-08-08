/**
 * @fileoverview Checks that all imported variables are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

var isTypedAsRobberLanguage = require("../utils/robberLanguageMatcher");

module.exports = {
  meta: {
    docs: {
      description:
        "Checks that all imported variables are correctly spelled in robber language",
      category: "Stylistic Issues",
    },
    fixable: null, // or "code" or "whitespace"
  },

  create: function(context) {

    return {
      ImportDefaultSpecifier: function(node) {
        if (!isTypedAsRobberLanguage(node.local.name)) {
          context.report(node, "Imported variable name must be in robber language.");
        }
      },
      ImportSpecifier: function(node) {
        if (!isTypedAsRobberLanguage(node.local.name)) {
          context.report(node, "Imported variable name must be in robber language.");
        }
      }
    };
  }
};
