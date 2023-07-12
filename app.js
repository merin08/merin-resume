const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/downloadResume",function(req,res){
  res.download(__dirname + "/merin_resume.pdf","merin_resume.pdf",function(err){
    if(err) {
      // Check if headers have been sent
      if(res.headersSent) {
        // You may want to log something here or do something else
        return res.redirect("/resume")

      } else {
        return res.sendStatus(404); // 404, maybe 500 depending on err
      }
    }

  })
})
app.listen(process.env.PORT || 5000, function () {
  console.log("Server started in port 5000");
});