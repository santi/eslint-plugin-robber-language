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
            description: "Checks that all variable declarations are correctly spelled in robber language",
            category: "Stylistic Issues",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        function isTypedAsRobberLanguage(string) {
          var re = /^(?:(?:([b-df-hj-np-tv-xzB-DF-HJ-NP-TV-XZ])[oO]\1)|[aeiouyæøåAEIOUYÆØÅ_])+$/
          return re.test(string)
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            VariableDeclaration: function(node) {
                node.declarations.forEach(function(variableDeclarator) {
                    if(!isTypedAsRobberLanguage(variableDeclarator.id.name) &&
                      (node.kind == "var" || node.kind == "let" || node.kind == "const")){
                        context.report(node, 'Variable names must be in robber language.');
                    }
                });
            }
        };
    }
};
