# Web Notes - Note Taking App

A modern, full-stack notes application built with React, Node.js, Express, and MongoDB.

## Features

- ✅ **Create Notes** - Add new notes with title and content
- ✅ **Read Notes** - View all notes in a beautiful grid layout
- ✅ **Edit Notes** - Update existing notes
- ✅ **Delete Notes** - Remove notes you no longer need
- ✅ **Persistent Storage** - All notes saved to MongoDB
- ✅ **Real-time Sync** - Changes reflected immediately across the UI
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile

## Project Structure

```
web-notes/
├── src/                    # React frontend
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── NoteForm.jsx
│   │   ├── NoteItem.jsx
│   │   └── NotesList.jsx
│   ├── styles/            # Component-specific CSS
│   ├── App.jsx            # Main app component
│   └── index.jsx          # React DOM entry point
│
├── server/                # Node.js backend
│   ├── models/
│   │   └── Note.js        # MongoDB schema
│   ├── routes/
│   │   └── notes.js       # API endpoints
│   ├── server.js          # Express server
│   └── .env               # Environment variables
│
├── tests/                 # Playwright E2E tests
└── package.json          # Dependencies
```

## Tech Stack

### Frontend
- **React 19** - UI framework
- **Axios** - HTTP client for API calls
- **Vite** - Build tool with HMR

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### Testing
- **Playwright** - E2E testing
- **ESLint** - Code quality

## Prerequisites

- **Node.js** (v16+)
- **MongoDB** (running locally or cloud instance)
- **npm** or **yarn**

## Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/Aakash4096/web-notes.git
cd web-notes
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables

Create `server/.env`:
```
MONGODB_URI=mongodb://localhost:27017/notes_app
PORT=5000
NODE_ENV=development
```

For MongoDB Atlas (cloud):
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notes_app?retryWrites=true&w=majority
```

### 4. Start the application

**Option 1: Run both servers together**
```bash
npm run dev:all
```

**Option 2: Run separately**

Terminal 1 - Backend:
```bash
npm run dev:server
```

Terminal 2 - Frontend:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

### Development
- `npm run dev` - Start frontend dev server (port 5173)
- `npm run dev:server` - Start backend server (port 5000)
- `npm run dev:all` - Start both frontend and backend

### Production
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build

### Quality
- `npm run lint` - Run ESLint
- `npm test` - Run E2E tests with Playwright
- `npm run test:ui` - Run tests with interactive UI
- `npm run test:debug` - Debug tests with step-through

## API Endpoints

### Notes
- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get single note
- `POST /api/notes` - Create note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

### Health
- `GET /api/health` - Server health check

## Usage

1. **Create a Note**: Enter title and content in the form and click "Add Note"
2. **View Notes**: All notes appear in a grid layout sorted by most recent
3. **Edit a Note**: Click the ✏️ button on any note to edit
4. **Delete a Note**: Click the 🗑️ button to delete

## File Naming Conventions

- **Components**: PascalCase (e.g., `NoteForm.jsx`)
- **Styles**: kebab-case in `styles/` directory (e.g., `NoteForm.css`)
- **Routes**: lowercase (e.g., `notes.js`)
- **Models**: PascalCase (e.g., `Note.js`)

## Styling

- Modern gradient purple theme
- Responsive grid layout
- Smooth transitions and hover effects
- Mobile-first design

## ESLint Configuration

- React Hooks rules enabled
- React Refresh support
- Variables starting with uppercase/underscore ignored

## Troubleshooting

**Notes not appearing?**
- Ensure MongoDB is running: `mongod`
- Check `.env` file has correct `MONGODB_URI`
- Verify backend server is running on port 5000

**API calls failing?**
- Check browser console for errors
- Verify Vite proxy is configured in `vite.config.js`
- Ensure backend is accessible at `http://localhost:5000`

**Port conflicts?**
- Frontend: Change Vite port in `vite.config.js`
- Backend: Update `PORT` in `server/.env`

## Future Enhancements

- [ ] User authentication
- [ ] Note categories/tags
- [ ] Search functionality
- [ ] Rich text editor
- [ ] Note sharing
- [ ] Dark mode toggle

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## License

MIT License - feel free to use this project for learning or production.

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using React and Node.js
