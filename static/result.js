var result = "{{final_result}}";
var r = 100;
var circles = document.querySelectorAll(".circle");
var total_circles = circles.length;
for (var i = 0; i < total_circles; i++) {
  circles[i].setAttribute("r", r);
}

/* Set meter's wrapper dimension */
var meter_dimension = r * 2 + 100;
var wrapper = document.querySelector("#wrapper");
wrapper.style.width = meter_dimension + "px";
wrapper.style.height = meter_dimension + "px";

/* Add strokes to circles  */
var cf = 2 * Math.PI * r;
var semi_cf = cf / 2;
var semi_cf_1by2 = semi_cf / 2;
var semi_cf_2by5 = (semi_cf * 2) / 5;
var semi_cf_3by10 = (semi_cf * 3) / 10;
var semi_cf_1by5 = (semi_cf * 1) / 5;

var semi_cf_1by10 = semi_cf / 10;
document
  .querySelector("#outline_curves")
  .setAttribute("stroke-dasharray", semi_cf + "," + cf);
document
  .querySelector("#low")
  .setAttribute("stroke-dasharray", semi_cf + "," + cf);
document
  .querySelector("#avg")
  .setAttribute("stroke-dasharray", semi_cf_1by2 + "," + cf);
document
  .querySelector("#more-avg")
  .setAttribute("stroke-dasharray", semi_cf_2by5 + "," + cf);
document
  .querySelector("#most-avg")
  .setAttribute("stroke-dasharray", semi_cf_3by10 + "," + cf);
document
  .querySelector("#less-high")
  .setAttribute("stroke-dasharray", semi_cf_1by5 + "," + cf);
document
  .querySelector("#high")
  .setAttribute("stroke-dasharray", semi_cf_1by10 + "," + cf);
document
  .querySelector("#outline_ends")
  .setAttribute("stroke-dasharray", 2 + "," + (semi_cf - 2));
document
  .querySelector("#mask")
  .setAttribute("stroke-dasharray", semi_cf + "," + cf);

/* Bind input event*/
var mask = document.querySelector("#mask");
var meter_needle = document.querySelector("#meter_needle");
function range_change_event() {
  var percent;
  if (result == "Below 50%") {
    percent = 30;
    document.querySelector(".result-text").style.color = "#ff0000";
  } else if (result == "50-60%") {
    percent = 55;
    document.querySelector(".result-text").style.color = "#ff6347";
  } else if (result == "60-70%") {
    percent = 65;
    document.querySelector(".result-text").style.color = "#ffc300";
  } else if (result == "70-80%") {
    percent = 75;
    document.querySelector(".result-text").style.color = "#ffff00";
  } else if (result == "80-90%") {
    percent = 85;
    document.querySelector(".result-text").style.color = "#90ee90";
  } else {
    percent = 95;
    document.querySelector(".result-text").style.color = "#228B22";
  }
  var meter_value = semi_cf - (percent * semi_cf) / 100;
  mask.setAttribute("stroke-dasharray", meter_value + "," + cf);
  meter_needle.style.transform =
    "rotate(" + (270 + (percent * 180) / 100) + "deg)";
}
range_change_event()