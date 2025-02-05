# Hotel Booking Website Backend

This is the backend implementation for a **Hotel Booking Website** built using **Node.js** and **Express**. It handles user authentication, hotel and room management, bookings, payments, and more.

---

## Technologies Used

### **Backend & Frameworks:**
- **Node.js**: JavaScript runtime environment
- **Express.js**: Fast, unopinionated web framework for Node.js
- **MongoDB**: NoSQL database for storing user, hotel, and booking data
- **Mongoose**: ODM for MongoDB to manage schema and models

### **Authentication & Security:**
- **bcryptjs**: Password hashing
- **jsonwebtoken (JWT)**: Token-based authentication
- **dotenv**: Environment variable management
- **helmet**: Securing HTTP headers
- **cors**: Cross-Origin Resource Sharing management
- **express-rate-limit**: Rate limiting for APIs
- **xss-clean**: Sanitizes user input to prevent XSS attacks

### **File Handling & Media:**
- **multer**: Handling file uploads (e.g., hotel and room images)
- **aws-sdk**: AWS S3 for cloud storage (optional)

### **Payments & Notifications:**
- **stripe**: Payment processing
- **nodemailer**: Sending email confirmations and notifications
- **twilio**: SMS notifications (optional)
- **socket.io**: Real-time updates (optional)

### **Scheduling & Caching:**
- **node-cron**: Scheduling tasks (e.g., cleaning expired bookings)
- **redis**: Caching frequently accessed data

### **Logging & Monitoring:**
- **morgan**: HTTP request logging for development
- **winston**: Advanced logging and error tracking

### **API Documentation:**
- **swagger-ui-express**: Auto-generating API documentation
- **yamljs**: Loading YAML configuration for Swagger

### **Testing & Development Tools:**
- **nodemon**: Auto-restarting the server during development
- **jest**: JavaScript testing framework
- **supertest**: Testing API endpoints
- **postman**: Testing API endpoints

---

## Project Structure

```
├── config/
│   └── db.js              # MongoDB connection setup
├── controllers/
│   ├── authController.js  # Handles user authentication
│   ├── bookingController.js  # Manages bookings
│   ├── hotelController.js  # Manages hotels
│   └── roomController.js   # Manages rooms
├── models/
│   ├── UserModel.js
│   ├── HotelModel.js
│   ├── RoomModel.js
│   └── BookingModel.js
├── routes/
│   ├── authRoutes.js
│   ├── bookingRoutes.js
│   ├── hotelRoutes.js
│   └── roomRoutes.js
├── middleware/
│   ├── authMiddleware.js  # Protects private routes
│   └── errorHandler.js    # Custom error handling
├── utils/
│   ├── sendEmail.js       # Utility for sending emails
│   └── paymentProcessor.js  # Stripe integration logic
├── .env                   # Environment variables
├── app.js                 # Main app file
└── package.json           # NPM dependencies
```

---

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/indiedev2003/hotel-booking-backend.git
   cd hotel-booking-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_key
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your_email@example.com
   SMTP_PASSWORD=your_email_password
   ```

4. **Run the server:**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:8080`

---

## API Endpoints

### **Authentication:**
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and get JWT token

### **Hotels:**
- `GET /api/hotels` – Get all hotels
- `POST /api/hotels` – Add a new hotel (Admin only)
- `GET /api/hotels/:id` – Get a specific hotel
- `PUT /api/hotels/:id` – Update hotel details
- `DELETE /api/hotels/:id` – Delete a hotel

### **Rooms:**
- `GET /api/rooms` – Get all rooms
- `POST /api/rooms` – Add a new room (Admin only)
- `GET /api/rooms/:id` – Get a specific room
- `PUT /api/rooms/:id` – Update room details
- `DELETE /api/rooms/:id` – Delete a room

### **Bookings:**
- `POST /api/bookings` – Create a new booking
- `GET /api/bookings` – Get all bookings (Admin)
- `GET /api/bookings/user` – Get bookings for the logged-in user
- `DELETE /api/bookings/:id` – Cancel a booking

### **Payments:**
- `POST /api/payments` – Process payment via Stripe

---

## License

This project is licensed under the **MIT License**.

---

## Contact

For any inquiries, please reach out to:

- **Email:** fbdgagansuman@gmail.com
- **GitHub:** [Gagan Suman](https://github.com/indidev2003)

---

Enjoy building your hotel booking backend! 🚀

