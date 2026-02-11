let id = "";
// localStorage.clear();
fetchData();

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
function fetchData() {
  let arr = JSON.parse(localStorage.getItem("crud"));

  if (arr) {
    let html = "";
    let sno = 1;

    for (let i in arr) {
      html += `<tr>
        <td>${sno}</td>
        <td>${arr[i]}</td>
         <a href="javascript:void(0)" onclick="editData(${i})">Edit</a>
          &nbsp;
        <td> <a href="javascript:void(0)" onclick="deleteData(${i})">Delete</a> </td>
      </tr>`;
      sno++;
    }

    $("#user").html(html);
  }
}
function deleteData(recordData) {
  let arr = getCrudData();
  arr.splice(recordData, 1);
  setCrudData(arr);
  fetchData();
}
function editData(recordData) {
  id = recordData;
  let arr = getCrudData();
  $("#name").val(arr[recordData]);
}
function getCrudData() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  return arr;
}

function setCrudData(arr) {
  localStorage.setItem("crud", JSON.stringify(arr));
}
