const TimeEntry = require("../models/timeEntry");

exports.getTimeEntries = async (req, res, next) => {
  const timeEntry = new TimeEntry();
  const data = await timeEntry.getTimeEntries();
  res.send(data[0]);
};

exports.createTimeEntry = (req, res) => {
  const { userId, task, startTime, endTime } = req.body;
  const timeEntry = new TimeEntry(userId, task, startTime, endTime);
  const data = timeEntry.createNewTimeEntry();
  res.send("Data created successfully");
};

exports.getTimeEntryById = async (req, res) => {
  const { id } = req.params;
  const timeEntry = new TimeEntry();
  timeEntry.id = id;
  const data = await timeEntry.getTimeEntryById();
  res.send(data);
};

exports.updateTimeEntry = (req, res) => {
  const { id } = req.params;
  const { userId, task, startTime, endTime } = req.body;
  const timeEntry = new TimeEntry(userId, task, startTime, endTime);
  timeEntry.id = id;
  const data = timeEntry.updateTimeEntryById();
  res.send(data);
};

exports.deleteTimeEntry = (req, res) => {
  const { id } = req.params;
  const timeEntry = new TimeEntry();
  timeEntry.id = id;
  const data = timeEntry.deleteEntryById();
  res.send(data);
};