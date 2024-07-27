const express = require('express');
const cors = require('cors');
const app = express();

const userRouter = require('./routes/userRouter');
const profileRouter = require('./routes/profileRouter');
const travelRouter = require('./routes/travelRouter');
const passengerRouter = require('./routes/travelPassengerRouter');
const stopRouter = require('./routes/stopRouter');
const promoRouter = require('./routes/promoRouter');
const cityRouter = require('./routes/cityRouter');
const placeRouter = require('./routes/placeRouter');

const verifyAuthUser = require('./middlewares/authMiddleware');

const PORT = 3000;
const corsOptions = {
    origin: /^http:\/\/(localhost|127.0.0.\d{1,3})(:\d+){0,1}$/,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions))
app.use(express.json());

app.use('/cities', cityRouter);
app.use('/places', placeRouter);
app.use('/users', userRouter);
app.use('/travels', travelRouter);
app.use('/stops', stopRouter);
app.use('/promos', promoRouter);

app.use('/profiles', verifyAuthUser, profileRouter);
app.use('/passengers', verifyAuthUser, passengerRouter);

app.use((req, res) => {
    res.status(404).send({
	success: false,
	msg: "Invalid request, resource not found.",
    });
});

app.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT}.`)
});
