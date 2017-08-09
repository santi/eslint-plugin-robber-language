/**
 * @fileoverview Utility function to test if a string is written in robber language
 * @author Vemund Santi
 */
"use strict";

module.exports = function isTypedAsRobberLanguage(string) {
  var robberLanguageMatcher = /^(?:(?:([b-df-hj-np-tv-xzB-DF-HJ-NP-TV-XZ])[oO]\1)|[aeiouyæøåAEIOUYÆØÅ_])+$/;
  if (typeof string === "number") {
    return string;
  }
  return robberLanguageMatcher.test(string);
};
