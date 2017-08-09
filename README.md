# eslint-plugin-robber-language

Robber Language is a secret code language made popular in the books about
Kalle Blomkvist (Eng: Bill Bergson) by Astrid Lindgren in the 1940s and 1950s.

The Robber Language is spoken by robbers, where every consonant is
doubled, with an 'o' added in-between. This provides for a code language that
is quick and easy to learn, but hard for an untrained ear to understand.

This plugin provides linting rules so that robbers are able to write their
code without anyone else understanding it.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-robber-language`:

```
$ npm install eslint-plugin-robber-language --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-robber-language` globally.

## Usage

Add `robber-language` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "robber-language"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "robber-language/variables": "warn"
    }
}
```

### Supported Rules

* `robber-language/variables`
* `robber-language/functions`
* `robber-language/objects`
* `robber-language/import`

## Recommended configuration

This plugin also exports a set of recommended configuration options for the rules.
To use the recommended configuration, add the following under the extends section.

```json
{
  "extends": {
    "plugin:robber-language/recommended"
  }
}
```

## Fixing

All rules support automatic fixing of linting errors. To automatically fix the errors,
apply the `--fix` flag when using `eslint` from the command line.

**Warning:**  Automatic fixing only fixes declaration errors. Identifiers used
at a later point are not touched. 
