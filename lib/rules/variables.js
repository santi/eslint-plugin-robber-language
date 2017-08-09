/**
 * @fileoverview Checks that all variable declarations are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

var isTypedAsRobberLanguage = require("../utils/robberLanguageMatcher");
var createRobberLanguageString = require("../utils/robberLanguageProducer");

module.exports = {
  meta: {
    docs: {
      description:
        "Checks that all variable declarations are correctly spelled in robber language",
      category: "Stylistic Issues",
    },
    fixable: "code",
  },

  create: function(context) {

    return {
      VariableDeclaration: function(node) {
        node.declarations.forEach(function(variableDeclarator) {
          if (variableDeclarator.id.name) {
            // Variable declaration
            if(!isTypedAsRobberLanguage(variableDeclarator.id.name) &&
              (node.kind === "var" || node.kind === "let" || node.kind === "const")) {
              context.report({
                node: node,
                message: "Variable name must be in robber language.",
                fix: function(fixer) {
                  return fixer.replaceText(variableDeclarator.id, createRobberLanguageString(variableDeclarator.id.name));
                }
              });
            }

          } else {
            // Object spread declaration
            variableDeclarator.id.properties.forEach(function(property) {
              if(!isTypedAsRobberLanguage(property.key.name)) {
                context.report({
                  node: property,
                  message: "Variable name must be in robber language.",
                  fix: function(fixer) {
                    return fixer.replaceText(property.key, createRobberLanguageString(property.key.name));
                  }
                });
              }
            });
          }
        });
      },
    };
  },
};
