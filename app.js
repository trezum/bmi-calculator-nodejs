var express = require("express");

// create express app
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.render("pages/landing");
});

app.get("/result", (req, res) => {
    var m = (parseInt(req.query.cm, 10) / 100);
    var kg = req.query.kg;

    var hip = (parseInt(req.query.hip, 10));
    var waist = req.query.waist;

    if(m == 0 || isNaN(m) || hip == 0 || isNaN(hip) || isNaN(waist) || isNaN(kg)){
        res.redirect("/");
    }else {
        var bmi = (kg / (m * m));
        var bmiCategory = "ERROR";

        if(bmi < 18.5)
            bmiCategory = "Underweight"
        else if (bmi < 24.9)
            bmiCategory = "Healthy weight"
        else if (bmi < 29.9)
            bmiCategory = "Overweight"
        else
            bmiCategory = "Obese"

        var hipToWaist = (hip / waist);

        hipToWaistCategory = "ERROR";
        if(hipToWaist < 0.9)
            hipToWaistCategory = "Normal-weight"
        else if(hipToWaist < 0.99)
            hipToWaistCategory = "Over-weight"
        else
            hipToWaistCategory = "Obesity"

        res.render("pages/result", {
            bmi: bmi,
            bmiCategory : bmiCategory,
            hipToWaist : hipToWaist,
            hipToWaistCategory : hipToWaistCategory
        });
    }  
});

var port = 8080;
console.log("App is running on http://localhost:"+port)
app.listen(port);
