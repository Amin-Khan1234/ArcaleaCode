const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers")

//Routes for API

router.route('/time-entries').get(controllers.getTimeEntries).post(controllers.createTimeEntry)


router.route('/time-entries/:id').get(controllers.getTimeEntryById).put(controllers.updateTimeEntry).delete(controllers.deleteTimeEntry)

module.exports = router