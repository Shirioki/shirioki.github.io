function yhteenveto() {
    var nimi = document.getElementById("nameField").value;
    var email = document.getElementById("emailField").value;
    var phone = document.getElementById("phoneField").value;
    var details = document.getElementById("detailsField").value;
    var nutsAllergy = document.getElementById("nutsCheckbox").checked;
    var fishAllergy = document.getElementById("fishCheckbox").checked;
    var vegan = document.getElementById("meatsCheckbox").checked;
    var feedback = null;
    var feedbackOptions = document.getElementsByName("feedback");
    for (var i = 0; i < feedbackOptions.length; i++) {
      if (feedbackOptions[i].checked) {
        feedback = feedbackOptions[i].value;
        break;
      }
    }
    var didYouFind = document.getElementById("didYouFindSelect").value;
    document.getElementById("tiedot").innerHTML = "Hei " + nimi + ", sähköpostisi on " + email + ", puhelinnumerosi on " + phone + ".";
  }