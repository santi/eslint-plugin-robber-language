/**
 * @fileoverview Utility function transforming a string into robber language
 * @author Vemund Santi
 */
"use strict";

module.exports = function createRobberLanguageString(string) {
  var robberLanguageMatcher = /([b-df-hj-np-tv-xzB-DF-HJ-NP-TV-XZ])/g;

  return string.replace(robberLanguageMatcher, function(match) {
    if(match === match.toUpperCase()) {
      return match + "O" + match;
    } else {
      return match + "o" + match;
    }
  });
};
