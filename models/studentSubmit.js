const mongoose = require("mongoose");
const docSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  pdf : {
    type: String,
  },
  
  cloudinary_id_pdf: {
    type: String,
  }
});

module.exports = mongoose.model("studentSubmit", docSchema);
