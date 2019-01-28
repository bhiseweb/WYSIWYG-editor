const mongoose = require('mongoose');
const Record = require('../models/record')

module.exports.save_record = async (req, res) => {
  console.log('controller called')
  try {
    let path = req.body.path
    let content = req.body.content;
    const newRecord = new Record({
      path: path,
      content: content
    });
    newRecord.save()
    res.json(true)
    
  } catch (error) {
    res.json({error: error})
  }

}

module.exports.get_all_record = async (req, res) => {
  try {
    let recordList = await Record.find()
    if (recordList) {
      res.json( {  recordList: recordList });
    }
  } catch (error) {
    res.send({error: error})
  }
}

module.exports.get_record = async (req, res) => {
  try {
    let record = await Record.find({path: req.query.path})
    if (record) {
      res.json( {  record: record });
    }
  } catch (error) {
    res.send({error: error})
  }
}

