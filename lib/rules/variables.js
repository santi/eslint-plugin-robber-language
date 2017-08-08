/**
 * @fileoverview Checks that all variable declarations are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

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
    var robberLanguageMatcher = /^(?:(?:([b-df-hj-np-tv-xzB-DF-HJ-NP-TV-XZ])[oO]\1)|[aeiouyæøåAEIOUYÆØÅ_])+$/;

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function isTypedAsRobberLanguage(string) {
      return robberLanguageMatcher.test(string);
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

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
