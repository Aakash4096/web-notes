# Copilot Instructions for Scrimba React Project

## Project Overview

This is a React + Vite project providing a minimal setup for React development with HMR (Hot Module Replacement) and ESLint support. The project is a "ReactFacts" application demonstrating basic React component composition.

## Build, Test, and Development Commands

### Development Server
```bash
npm run dev
```
Starts the Vite development server with Hot Module Replacement (HMR). The app will be available at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Build
```bash
npm run preview
```
Previews the production build locally.

### Linting
```bash
npm run lint
```
Runs ESLint on all `.js` and `.jsx` files to check for code quality and style issues.

### Testing (Playwright)
```bash
npm test
```
Runs end-to-end tests using Playwright across Chromium, Firefox, and WebKit browsers.

```bash
npm run test:ui
```
Runs tests with the Playwright Test UI for interactive debugging.

```bash
npm run test:debug
```
Runs tests in debug mode with step-through execution.

## Architecture

### Component Structure
- **App.jsx** - Root component that composes all page sections
- **src/components/** - Reusable React components
  - **Navbar.jsx** - Top navigation bar with logo and title
  - **Body.jsx** - Main content area with list of React facts
- **src/index.jsx** - Entry point that mounts the React app to the DOM

### Styling
- CSS modules are colocated with components (e.g., `navbar.css`, `body.css`)
- Global styles in `index.css`
- Assets (images, etc.) stored in `src/assets/`

### Build Tooling
- **Vite** - Fast build tool and dev server with HMR support
- **React Plugin (@vitejs/plugin-react)** - Uses Babel for Fast Refresh during development
- **ESLint** - Configured with React-specific rules (react-hooks, react-refresh)

## Key Conventions

### Component Exports
All components are named exports using function declarations and exported as default exports for cleaner imports:
```jsx
function ComponentName() {
  return <div>...</div>;
}
export default ComponentName;
```

### ESLint Rules
- **no-unused-vars**: Variables starting with uppercase or underscore are ignored (reserved for constants and intentionally unused vars)
- React Hooks are enforced via `eslint-plugin-react-hooks`
- React Refresh compatibility is maintained via `eslint-plugin-react-refresh`

### File Naming
- Component files: PascalCase (e.g., `Navbar.jsx`, `Body.jsx`)
- CSS files: lowercase with hyphens (e.g., `navbar.css`, `body.css`)
- Ignore patterns: `dist/` directory is excluded from linting

### CSS Organization
- Component-specific styles in colocated `.css` files
- Shared styles in `index.css`
- Styles are imported directly in components to maintain component isolation

## React Version & Features

- **React 19.2.0** - Latest version with modern APIs
- **React Compiler** - Not enabled (mentioned in README as disabled for performance reasons during development)
- **JSX** - Configured with ecmaVersion 2020+ and JSX support

## Testing

**Playwright** is configured for end-to-end testing:
- Tests run across Chromium, Firefox, and WebKit browsers
- Tests are located in `tests/e2e/` with `.spec.js` file naming convention
- Development server starts automatically during tests
- HTML reports are generated in `playwright-report/`
- Use `npm run test:ui` for interactive test debugging

## Notes

- TypeScript is not currently in use; the project uses plain JavaScript
- Playwright tests should cover user-facing functionality and component behavior
- The project is private and versioned at 0.0.0
