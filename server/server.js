import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import notesRouter from './routes/notes.js';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.log('⚠️  MongoDB connection error:', err.message));
} else {
  console.log('⚠️  WARNING: MONGODB_URI not set in .env file');
  console.log('📝 Notes will not persist. Update server/.env with MongoDB connection string');
}

// Routes
app.use('/api/notes', notesRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running', mongodb: mongoose.connection.readyState === 1 });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📝 API available at http://localhost:${PORT}/api/\n`);
});
