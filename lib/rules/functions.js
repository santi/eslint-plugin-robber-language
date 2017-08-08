/**
 * @fileoverview Checks that all function declarations are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

var isTypedAsRobberLanguage = require("../utils/robberLanguageMatcher");

module.exports = {
  meta: {
    docs: {
      description:
        "Checks that all function declarations are correctly spelled in robber language",
      category: "Stylistic Issues",
    },
    fixable: null, // or "code" or "whitespace"
  },

  create: function(context) {

    return {
      FunctionDeclaration: function(node) {
        if (!isTypedAsRobberLanguage(node.id.name)) {
          context.report(node, "Function name must be in robber language.");
        }
      }
    };
  }
};
