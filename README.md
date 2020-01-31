# Congenica plugin to retrieve PID (Personal Identifier Data)

## Development setup

This repository uses ParcelJS for task automation, bundling and:

- Typescript
- Preact JS
- Jest

You should be able to install all dependencies by running `npm nstall` from the project root.

This also provides a test page `index.html` which is used for debugging and development.

## Usage of the plugin

You will need to insert this snippet into the HTML where you want to run the plugin

```html
<div
  class="beautiful-container"
  data-prop-name="preact habitat"
  data-prop-version="v3.0.0"
  data-prop-theme-color="green"
>
  <script type="application/json">
    {
      "endpoint": "Add endpoint here",
      "referalUID": "Add Referal-UID here",
      "token": "Please add token here"
    }
  </script>
</div>
```
