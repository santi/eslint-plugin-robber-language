/**
 * @fileoverview Checks that all object properties are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

var isTypedAsRobberLanguage = require("../utils/robberLanguageMatcher");
var createRobberLanguageString = require("../utils/robberLanguageProducer");

module.exports = {
  meta: {
    docs: {
      description:
        "Checks that all object properties are correctly spelled in robber language",
      category: "Stylistic Issues",
    },
    fixable: "code",
  },
  create: function(context) {

    return {
      Property: function(node) {
        var key;
        if (node.key.name) {
          key = node.key.name;
        } else {
          key = node.key.value;
        }

        if (!isTypedAsRobberLanguage(key)) {
          context.report({
            node: node,
            message: "Object properties must be in robber language.",
            fix: function(fixer) {
              return fixer.replaceText(node.key, createRobberLanguageString(key));
            }
          });
        }
      }
    };
  },
};
