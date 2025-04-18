"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const jobs_routes_1 = __importDefault(require("./routes/jobs.routes"));
app.use('/api/jobs', jobs_routes_1.default);
const candidates_routes_1 = __importDefault(require("./routes/candidates.routes"));
app.use('/api/candidates', candidates_routes_1.default);
const appointments_routes_1 = __importDefault(require("./routes/appointments.routes"));
app.use('/api/appointments', appointments_routes_1.default);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
