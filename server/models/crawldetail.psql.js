const Sequelize = require('sequelize');
const sequelize = require('../dbConnection');

const CrawlDetails = sequelize.define('crawl_details', {
  id: { 
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: { type: Sequelize.STRING },
  selector_title: { type: Sequelize.STRING },
  selector_body:  { type: Sequelize.STRING },
  selector_image:  { type: Sequelize.STRING },
  selector_date:  { type: Sequelize.STRING },
  selector_author:  { type: Sequelize.STRING },
});

module.exports = CrawlDetails;