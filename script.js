/*
GUI Programming I HW6: Using the jQuery Validation Plugin with Your Dynamic Table
Sean Boullianne, UMass Lowell Computer Science, Sean_Boullianne@student.uml.edu
Copyright (c) 2020 by Sean Boullianne. All rights reserved. May be freely
copied of excerpted for educational purposes with credit to the author.
Updated by Sean Boullianne on 8/6/2020
*/
var tabIndex = 1;

function tabs() {

  $("#tabs").tabs();

  var xStart = Number(document.getElementById("xStart").value);
  var xEnd = Number(document.getElementById("xEnd").value);
  var yStart = Number(document.getElementById("yStart").value);
  var yEnd = Number(document.getElementById("yEnd").value);

  tabIndex++;

  var title = "<li class='tab'><a href='#tab-" + tabIndex + "'>" + "Title" + "</a>" +
              "<span class='ui-icon ui-icon-close' role='presentation'></span>" + "</li>";

  $("#tabs ul").append(title);

  $("#tabs").append('<div id="tab-' + '4' + '">' + $("#myTable").html() + '</div>');

  $( "#tabs" ).tabs("refresh");

  $( "#tabs" ).tabs("option", "active", -1);

  
}

// function to automatically update table
function update() {
  $("#input-form").submit();
}

// function for sliders
function slider() {

  // xStart slider
  $("#slider_xStart").slider({
    min: -50,
    max: 50,
    // slider updates value
    slide: function(event, ui) {
      $("#xStart").val(ui.value);
      update();
    }
  });
  // value update slider
  $("#xStart").on("change", function() {
    $("#slider_xStart").slider("value", this.value);
    update();
  });

  // xEnd slider
  $("#slider_xEnd").slider({
    min: -50,
    max: 50,
    // slider updates value
    slide: function(event, ui) {
      $("#xEnd").val(ui.value);
      update();
    }
  });
  // value update slider
  $("#xEnd").on("change", function() {
    $("#slider_xEnd").slider("value", this.value);
    update();
  });

  // xEnd slider
  $("#slider_xEnd").slider({
    min: -50,
    max: 50,
    // slider updates value
    slide: function(event, ui) {
      $("#xEnd").val(ui.value);
      update();
    }
  });
  // value update slider
  $("#xEnd").on("change", function() {
    $("#slider_xEnd").slider("value", this.value);
    update();
  });

  // yStart slider
  $("#slider_yStart").slider({
    min: -50,
    max: 50,
    // slider updates value
    slide: function(event, ui) {
      $("#yStart").val(ui.value);
      update();
    }
  });
  // value update slider
  $("#yStart").on("change", function() {
    $("#slider_yStart").slider("value", this.value);
    update();
  });

  // yEnd slider
  $("#slider_yEnd").slider({
    min: -50,
    max: 50,
    // slider updates value
    slide: function(event, ui) {
      $("#yEnd").val(ui.value);
      update();
    }
  });
  // value update slider
  $("#yEnd").on("change", function() {
    $("#slider_yEnd").slider("value", this.value);
    update();
  });
}


// function that is called to validate the form, using jQuery validation plugin
// borrowed structure from Jason Downing's Assignment 7
// Link: https://github.com/JasonD94/College/blob/master/GUI-I/js/table_v2.js
function validate() {
  $("#input-form").validate({

    //rules for min and max inputs
    rules: {
      xStart: {
        required: true,
        number: true,
        min: -50,
        max: 50
      },
      xEnd: {
        required: true,
        number: true,
        min: -50,
        max: 50
      },
      yStart: {
        required: true,
        number: true,
        min: -50,
        max: 50
      },
      yEnd: {
        required: true,
        number: true,
        min: -50,
        max: 50
      }
    },

    // error messages for rules
    messages: {
      xStart: {
        required: "<- Error: xStart input not present. Please enter a number between -50 and 50.",
        number: "<- Error: xStart input not a number. Please enter a number between -50 and 50.",
        min: "<- Error: xStart input less than -50. Please enter a number between -50 and 50.",
        max: "<- Error: xStart input greater than 50. Please enter a number between -50 and 50."
      },
      xEnd: {
        required: "<- Error: xEnd input not present. Please enter a number between -50 and 50.",
        number: "<- Error: xEnd input not a number. Please enter a number between -50 and 50.",
        min: "<- Error: xEnd input less than -50. Please enter a number between -50 and 50.",
        max: "<- Error: xEnd input greater than 50. Please enter a number between -50 and 50."
      },
      yStart: {
        required: "<- Error: yStart input not present. Please enter a number between -50 and 50.",
        number: "<- Error: yStart input not a number. Please enter a number between -50 and 50.",
        min: "<- Error: yStart input less than -50. Please enter a number between -50 and 50.",
        max: "<- Error: yStart input greater than 50. Please enter a number between -50 and 50."
      },
      yEnd: {
        required: "<- Error: yEnd input not present. Please enter a number between -50 and 50.",
        number: "<- Error: yEnd input not a number. Please enter a number between -50 and 50.",
        min: "<- Error: yEnd input less than -50. Please enter a number between -50 and 50.",
        max: "<- Error: yEnd input greater than 50. Please enter a number between -50 and 50."
      }
    },

    // goes when form is valid, calls table building function
    submitHandler: function() {
      myFunction();
      return false;
    },

  });
}

// function to build table
function myFunction() {
  // get inputs from form
  var xStart = Number(document.getElementById("xStart").value);
  var xEnd = Number(document.getElementById("xEnd").value);
  var yStart = Number(document.getElementById("yStart").value);
  var yEnd = Number(document.getElementById("yEnd").value);


  // catching if the start is greater than the end, swapping if so
  if (xStart > xEnd) {
    document.getElementById("error").innerHTML = "Start greater than end; swapping to fix."

    var tmp = xStart;
    xStart = xEnd;
    xEnd = tmp;
  }
  if (yStart > yEnd) {
    document.getElementById("error").innerHTML = "Start greater than end; swapping to fix."

    var tmp = yStart;
    yStart = yEnd;
    yEnd = tmp;
  }

  //writing a long string that will construct the table once put into html
  var table_text = "";

  table_text += "<table>";

  table_text += "<tr>";

  table_text += "<td></td>";

  for (var i = xStart; i <= xEnd; i++) {
    table_text += "<td>"+ i +"</td>";
  }

  var y = yStart;

  for (var i = yStart; i <= yEnd; i++) {
    table_text += "<tr>";

    table_text += "<td>" + i + "</td>";

    for (var j = xStart; j <= xEnd; j++) {
      table_text += "<td>" + (i * j) + "</td>";
    }

    table_text += "</tr>";
  }

  table_text += "</tr>";

  table_text += "</table>";

  document.getElementById('myTable').innerHTML = table_text;

  return false;
}
