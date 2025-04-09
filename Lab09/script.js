var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var dataset = JSON.parse(this.responseText);
    addNewData(dataset);
  }
};

function addNewData(dataset) {
  var myTable = document.getElementById("csie");

  dataset.forEach(function (data) {
    var row = myTable.insertRow(-1);

    var title = data['title'] || '無資料';
    var location = data['showInfo'][0]?.['location'] || '無資料';
    var price = data['showInfo'][0]?.['price'] || '無資料';

    row.insertCell(0).innerHTML = title;
    row.insertCell(1).innerHTML = location;
    row.insertCell(2).innerHTML = price;
  });
}

function delOldData() {
  var myTable = document.getElementById("csie");
  while (myTable.rows.length > 1) {
    myTable.deleteRow(1);
  }
}