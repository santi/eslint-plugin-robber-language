/**
 * @fileoverview Checks that all imported variables are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

var isTypedAsRobberLanguage = require("../utils/robberLanguageMatcher");
var createRobberLanguageString = require("../utils/robberLanguageProducer");

module.exports = {
  meta: {
    docs: {
      description:
        "Checks that all imported variables are correctly spelled in robber language",
      category: "Stylistic Issues",
    },
    fixable: "code",
  },

  create: function(context) {

    var importLinter = function(node) {
      if (!isTypedAsRobberLanguage(node.local.name)) {
        context.report({
          node: node,
          message: "Imported variable name must be in robber language.",
          fix: function(fixer) {
            return fixer.replaceText(node.local, createRobberLanguageString(node.local.name));
          }
        });
      }
    };

    return {
      ImportDefaultSpecifier: importLinter,
      ImportSpecifier: importLinter,
    };
  }
};
