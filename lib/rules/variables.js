/**
 * @fileoverview Checks that all variable declarations are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

var isTypedAsRobberLanguage = require("../utils/robberLanguageMatcher");

module.exports = {
  meta: {
    docs: {
      description:
        "Checks that all variable declarations are correctly spelled in robber language",
      category: "Stylistic Issues",
    },
    fixable: null, // or "code" or "whitespace"
  },

  create: function(context) {

    return {
      VariableDeclaration: function(node) {
        node.declarations.forEach(function(variableDeclarator) {
          if (
            !isTypedAsRobberLanguage(variableDeclarator.id.name) &&
            (node.kind == "var" || node.kind == "let" || node.kind == "const")
          ) {
            context.report(node, "Variable names must be in robber language.");
          }
        });
      },
    };
  },
};
