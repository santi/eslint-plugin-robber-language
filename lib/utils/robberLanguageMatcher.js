/**
 * @fileoverview Utility function to test if a string is written in robber language
 * @author Vemund Santi
 */
"use strict";

module.exports = function isTypedAsRobberLanguage(string) {
  var robberLanguageMatcher = /^(?:(?:([b-df-hj-np-tv-xzB-DF-HJ-NP-TV-XZ])[oO]\1)|[aeiouyæøåAEIOUYÆØÅ_])+$/;

  return robberLanguageMatcher.test(string);
};
