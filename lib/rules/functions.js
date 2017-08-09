/**
 * @fileoverview Checks that all function declarations are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

var isTypedAsRobberLanguage = require("../utils/robberLanguageMatcher");
var createRobberLanguageString = require("../utils/robberLanguageProducer");

module.exports = {
  meta: {
    docs: {
      description:
        "Checks that all function declarations are correctly spelled in robber language",
      category: "Stylistic Issues",
    },
    fixable:"code",
  },

  create: function(context) {

    return {
      FunctionDeclaration: function(node) {
        if (!isTypedAsRobberLanguage(node.id.name)) {
          context.report({
            node: node,
            message: "Function name must be in robber language.",
            fix: function(fixer) {
              return fixer.replaceText(node.id, createRobberLanguageString(node.id.name));
            }
          });
        }
      }
    };
  }
};
