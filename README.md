# GLS/NXT

## Quick Run

- Run `yarn`;
- For dev localhost, run `yarn dev`.
- For test run `yarn test`.

The modal component was inspired from the standard HTML5 `<dialog>` element, through here a full documentation via MDN https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog. <br>
The html5 `<dialog>` element as per some docs is making `React.portal()` obselete.
It supports `ESC` button for closing the dialog.

## How to use

By ref

```
const showButtonRef = useRef<HTMLButtonElement>(null);
<Modal ref={showButtonRef} modalTitle="Modal title" modalBody="lorem ipsumlorem ipsumlorem ipsumlorem ipsum">
```

In case no `modalTitle` or `modalBody` are passed a default content will be provided.

Optionally, you can pass `isOpen` prop for showing modal on mounting.

```
const showButtonRef = useRef<HTMLButtonElement>(null);
<Modal ref={showButtonRef} isOpen>
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
