const db = require("../config/db");

class TimeEntry {
  constructor(userId, task, startTime, endTime) {
    this.userId = userId;
    this.task = task;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  async getTimeEntries() {
    try {
      let sql = "SELECT * FROM `time-tracker`.tbltimetracker;";
      return await db.execute(sql);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to retrieve time entries.");
    }
  }

  async createNewTimeEntry() {
    try {
      let sql = "INSERT INTO `time-tracker`.tbltimetracker (userId, task, startTime, endTime) VALUES (?, ?, ?, ?);";
      let values = [this.userId, this.task, this.startTime, this.endTime];
      return await db.execute(sql, values);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create new time entry.");
    }
  }

  async getTimeEntryById() {
    try {
      let sql = "SELECT * FROM `time-tracker`.tbltimetracker WHERE id = ?;";
      const data = await db.execute(sql, [this.id]);
      return data[0];
    } catch (error) {
      console.error(error);
      throw new Error("Failed to retrieve time entry by ID.");
    }
  }

  async updateTimeEntryById() {
    try {
      let sql = `UPDATE \`time-tracker\`.tbltimetracker SET userId = ?, task = ?, startTime = ?, endTime = ? WHERE id = ?;`;
      let values = [this.userId, this.task, this.startTime, this.endTime, this.id];
      return await db.execute(sql, values);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to update time entry by ID.");
    }
  }

  async deleteEntryById() {
    try {
      let sql = `DELETE FROM \`time-tracker\`.tbltimetracker WHERE id = ?;`;
      return await db.execute(sql, [this.id]);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delete time entry by ID.");
    }
  }
}

module.exports = TimeEntry;