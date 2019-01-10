import * as express from 'express';
import {Application} from "express";
import {getAllUsers} from './server/get-users.route';

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());
app.route('/api/users').get(getAllUsers);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



