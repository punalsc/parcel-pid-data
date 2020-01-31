# Congenica plugin to retrieve PID (Personal Identifier Data)

## Development setup

This repository uses ParcelJS for task automation, bundling and:

- Typescript
- Vanilla JS
- Jest

You should be able to install all dependencies by running `npm nstall` from the project root.

This also provides a test page `index.html` which is used for debugging and development.

## Usage of the plugin

You will need to insert this snippet into the HTML where you want to run the plugin

```html
<div
  id="pid-data"
  data-endpoint="www.google.com"
  data-referal-uid="add Referal Uid here"
  data-token="add token here"
></div>
```
