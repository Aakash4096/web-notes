# Copilot Instructions for Web Notes App

## Project Overview

**Web Notes** is a full-stack note-taking application with a React frontend and Node.js/Express backend connected to MongoDB. Users can create, read, edit, and delete notes with persistent storage.

This is a complete CRUD application demonstrating:
- React component architecture with state management
- REST API design with Express
- MongoDB schema design with Mongoose
- API integration between frontend and backend
- Modern UI with responsive grid layout

## Build, Test, and Development Commands

### Frontend Development
```bash
npm run dev
```
Starts Vite dev server at `http://localhost:5173` with HMR.

### Backend Server
```bash
npm run dev:server
```
Starts Express server at `http://localhost:5000` with MongoDB connection.

### Run Both Together
```bash
npm run dev:all
```
Starts frontend and backend simultaneously using concurrently.

### Production Build
```bash
npm run build
```
Builds optimized frontend in `dist/` directory.

### Linting
```bash
npm run lint
```
Runs ESLint on all `.js` and `.jsx` files.

### Testing
```bash
npm test
```
Runs E2E tests with Playwright across all browsers.

```bash
npm run test:ui
```
Interactive Playwright test UI for debugging.

## Architecture

### Frontend Structure (React)
- **App.jsx** - Main component managing notes state and API calls
- **components/**
  - `Navbar.jsx` - App header with branding
  - `NoteForm.jsx` - Form for creating/editing notes
  - `NotesList.jsx` - Grid container for all notes
  - `NoteItem.jsx` - Individual note card with edit/delete actions
- **styles/** - Component-specific CSS files (separated from components)

### Backend Structure (Express + MongoDB)
- **server/server.js** - Express app setup, routes, MongoDB connection
- **server/models/Note.js** - MongoDB schema: title, content, timestamps
- **server/routes/notes.js** - REST API routes for CRUD operations
- **server/.env** - MongoDB URI and server configuration

### API Flow
1. Frontend makes HTTP request via axios
2. Vite proxy forwards `/api/*` to `http://localhost:5000`
3. Express routes handle request
4. Mongoose queries MongoDB
5. Response returned and React state updated

## Key Conventions

### Component Exports
All components use function declarations with default exports:
```jsx
function ComponentName() {
  return <div>...</div>;
}
export default ComponentName;
```

### Styling Organization
- **Global styles**: `src/index.css` (reset, body, defaults)
- **Component styles**: `src/styles/ComponentName.css` (imported in component)
- Use flexbox and CSS Grid for layouts
- Color scheme: Purple gradient (`#667eea` to `#764ba2`)

### File Naming
- Components: PascalCase (e.g., `NoteForm.jsx`)
- Styles: kebab-case in `styles/` directory (e.g., `NoteForm.css`)
- Routes: lowercase (e.g., `notes.js`)
- Models: PascalCase (e.g., `Note.js`)

### MongoDB Schema
Notes have:
- `title` (string, required)
- `content` (string, required)
- `createdAt` (date, auto)
- `updatedAt` (date, auto)

### API Response Format
All endpoints return JSON with note data or error messages:
```json
{
  "_id": "ObjectId",
  "title": "string",
  "content": "string",
  "createdAt": "ISO date",
  "updatedAt": "ISO date"
}
```

### Error Handling
- Frontend: Check `error.message` in catch blocks
- Backend: Return appropriate HTTP status codes (201, 400, 404, 500)

## Key Technologies

- **React 19** - Component framework with hooks
- **Axios** - HTTP client for API calls
- **Express 5** - Minimal web framework
- **Mongoose 9** - MongoDB object modeling
- **Vite** - Build tool with fast HMR
- **Playwright** - E2E testing framework
- **Concurrently** - Run multiple processes

## State Management

Currently uses React useState/useEffect. Future enhancements could use:
- Context API for global state
- Redux for complex state
- React Query for data fetching

## ESLint Rules

- `no-unused-vars`: Variables with uppercase/underscore prefix ignored
- React Hooks: `rules-of-hooks` enforced
- React Refresh: Fast refresh compatibility required

## Environment Variables

**server/.env** required:
```
MONGODB_URI=mongodb://localhost:27017/notes_app
PORT=5000
NODE_ENV=development
```

For MongoDB Atlas (cloud):
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notes_app?retryWrites=true&w=majority
```

## Testing Strategy

Playwright tests are in `tests/e2e/`:
- Test user workflows (create, edit, delete notes)
- Verify UI displays correctly
- Test API responses through UI interactions
- Run on Chromium, Firefox, WebKit

## Common Development Tasks

### Add a new API endpoint
1. Add route in `server/routes/notes.js`
2. Call it from React component via axios
3. Update state in App.jsx
4. Add Playwright test

### Add new note field
1. Update `server/models/Note.js` schema
2. Update form in `NoteForm.jsx`
3. Update display in `NoteItem.jsx`
4. Add test case

### Styling a component
1. Create CSS file in `src/styles/ComponentName.css`
2. Import in component: `import '../styles/ComponentName.css'`
3. Use semantic class names matching component structure

## Troubleshooting

**MongoDB Connection Error**
- Ensure MongoDB is running: `mongod` (local) or check Atlas credentials
- Verify `MONGODB_URI` in `.env`

**API Calls Failing**
- Check Vite proxy config in `vite.config.js`
- Verify backend running on port 5000
- Check browser Network tab for 404/500 errors

**Port Already in Use**
- Frontend: Change Vite port in `vite.config.js` server.proxy
- Backend: Change `PORT` in `.env`

**Styling Issues**
- CSS Grid layout: Check `grid-template-columns` in `NotesList.css`
- Responsive: Media query breakpoint at 768px
- Colors: Use purple gradient theme from `App.css`

## Future Enhancements

- User authentication with JWT
- Note categories/tags
- Full-text search
- Rich text editor (TipTap, Draft.js)
- Real-time collaboration (WebSockets)
- Export notes (PDF, JSON)
- Dark mode toggle
- Note sharing with permissions

## Performance Notes

- Notes fetched once on app load
- Vite HMR keeps frontend fast during dev
- MongoDB indexes recommend on `createdAt`, `updatedAt` for sorting
- Consider pagination for large note counts

## Notes

- Project uses local MongoDB for development (easily switch to Atlas)
- No user authentication currently - all notes are global
- Timestamps managed by Mongoose automatically
- Playwright tests require development server running
