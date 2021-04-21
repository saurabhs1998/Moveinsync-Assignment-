let tasks = [];
let id = 0;
document.getElementById("add_details").addEventListener("click", function () {
  let modal = document.getElementById("myModal");
  console.log(modal);
  modal.style.display = "block";
});

document.getElementById("close").addEventListener("click", function () {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
});

function getTimeStamp() {
       var now = new Date();
       return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':'
                     + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
                     .getSeconds()) : (now.getSeconds())));
}

document.getElementById("submit_button").addEventListener("click", function () {
  const t = document.getElementsByTagName("input");
  if (t[0].value !== "" && t[1].value !== "" && t[2].value !== "") {
    const data = {
      id: ++id,
      row1: t[0].value,
      row2: t[1].value,
      row3: t[2].value,
    };
    tasks.push(data);

    localStorage.setItem("data", JSON.stringify(tasks));
    const time=getTimeStamp()
    createTableRow([data.id, data.row1, data.row2, data.row3,time]);
    //clearing the fields

    t[0].value = "";
    t[1].value = "";
    t[2].value = "";

    let modal = document.getElementById("myModal");
    modal.style.display = "none";

    alert("Saved");
  } else {
    alert("please fill all the fields");
  }
});

function createTableRow(data) {
  const target = document.getElementById("table");
  console.log(target);
  //   const data = localStorage.getItem("data");
  //   const datas = JSON.parse(data);
  const row = document.createElement("tr");
  data.map((datum) => {
    const td1 = document.createElement("td");
    td1.innerText = datum;
    row.append(td1);
  });
  target.append(row);
}