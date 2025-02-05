import mongoose from 'mongoose';

const BookingSchema = mongoose.Schema({
    guestName: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    }
})

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;