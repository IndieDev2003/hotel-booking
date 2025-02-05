import mongoose from 'mongoose';

const HotelSchema = mongoose.Schema ({
  name: {type: String, required: true},
  location:  {type: String, required: true},
  rooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
    },
    ],
    amenities: [String],
    pricePerNight: { type: Number}
});

 const Hotel = mongoose.model('Hotel',HotelSchema)

 export default Hotel;