console.log('Iniciando servidor...');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import AnalyticsEvent from './models/AnalyticsEvent.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
// Database Connection Enhancement for Serverless
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false, // Disable Mongoose buffering for faster serverless response
            serverSelectionTimeoutMS: 5000,
        };

        cached.promise = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/simulador-votacion', opts).then((mongoose) => {
            console.log('✅ Connected to MongoDB');
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

// Llamar a connectToDatabase al inicializar
connectToDatabase();

// Routes

// Guardar un evento (POST)
app.post(['/api/events', '/events'], async (req, res) => {
    try {
        await connectToDatabase();
        const { id, timestamp, sessionId, eventType, data } = req.body;

        // Validar datos básicos
        if (!id || !sessionId || !eventType) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newEvent = new AnalyticsEvent({
            id,
            timestamp: timestamp || Date.now(),
            sessionId,
            eventType,
            data
        });

        await newEvent.save();
        res.status(201).json({ message: 'Event tracked successfully', event: newEvent });
    } catch (error) {
        console.error('Error saving event:', error);
        res.status(500).json({ error: 'Failed to save event' });
    }
});

// Obtener todos los eventos (GET) - Para el Dashboard
app.get(['/api/events', '/events'], async (req, res) => {
    try {
        await connectToDatabase();
        const events = await AnalyticsEvent.find().sort({ timestamp: -1 }); // Más recientes primero
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

// Borrar todos los eventos (DELETE) - Reiniciar base de datos
app.delete(['/api/events', '/events'], async (req, res) => {
    try {
        await connectToDatabase();
        await AnalyticsEvent.deleteMany({});
        res.json({ message: 'Database reset successfully' });
    } catch (error) {
        console.error('Error resetting database:', error);
        res.status(500).json({ error: 'Failed to reset database' });
    }
});

// Endpoint de salud
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.get('/', (req, res) => {
    res.status(200).send('Backend simulador votacion');
});

// Solo escuchar en puerto local si no estamos en entorno serverless (Vercel exporta la app)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

export default app;
