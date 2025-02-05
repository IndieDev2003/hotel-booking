import mongoose from 'mongoose';

const RoomSchema = mongoose.Schema ({
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true,
  },
  roomNumber: {
    type: String,
    required: true,
    unique: true,
  },
  roomType: {
    type: String,
    enum: ['single', 'double', 'suite', 'deluxe', 'family'],
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  maxGuest: {
    type: Number,
    required: true,
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
}, {
    timestamps: true,
});

const Room = mongoose.model('Room', RoomSchema)
export default Room