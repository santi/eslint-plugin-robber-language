# eslint-plugin-robber-language

Checks that all variable declarations are typed correctly in robber language

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
        "robber-language/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





