import mongoose from 'mongoose';

const AnalyticsEventSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    timestamp: {
        type: Number,
        required: true,
        default: Date.now
    },
    sessionId: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: true,
        enum: ['page_view', 'district_select', 'vote_cast', 'simulation_complete', 'pdf_share', 'session_start', 'session_abandon']
    },
    data: {
        district: String,
        partyId: String,
        sectionId: Number,
        candidateId: String,
        candidateNumber: Number,
        candidateName: String,
        prefValue1: Number,
        prefValue2: Number,
        userAgent: String,
        screenResolution: String
    }
}, { timestamps: true });

export default mongoose.model('AnalyticsEvent', AnalyticsEventSchema);
