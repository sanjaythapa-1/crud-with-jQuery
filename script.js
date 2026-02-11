let id = "";
localStorage.clear();

function handleData() {
  $("#msg").html("");
  let name = $("#name").val();

  if (name == "") {
    $("#msg").html("Please insert the data");
  } else {
    if (id == "no") {
      let arr = getCrudData();

      if (!arr) {
        let data = [name];
        setCrudData(data);
      } else {
        arr.push(name);
        setCrudData(arr);
      }

      $("#msg").html("Data inserted");
    } else {
    }
  }
}
