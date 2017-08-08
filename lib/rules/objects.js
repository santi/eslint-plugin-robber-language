/**
 * @fileoverview Checks that all object properties are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

var isTypedAsRobberLanguage = require("../utils/robberLanguageMatcher");

module.exports = {
  meta: {
    docs: {
      description:
        "Checks that all object properties are correctly spelled in robber language",
      category: "Stylistic Issues",
    },
    fixable: null, // or "code" or "whitespace"
  },
  create: function(context) {

    return {
      Property: function(node) {
        if (!isTypedAsRobberLanguage(node.key.name)) {
          context.report(node, "Object properties must be in robber language.");
        }
      }
    };
  },
};
