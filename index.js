function createTable() {
    var row = document.getElementById("row");
    var column = document.getElementById("column");
    
    if (row.value.length == 0 || column.value.length == 0) {
      alert("Vui lòng nhập vào số dòng và số cột");
          return false;
    } else if (isNaN(row.value) || isNaN(column.value)) {
          alert("Vui lòng nhập giá trị số cho số dòng và số cột");
          return false;
    } else {
          var container = document.getElementById("container");
      
          var countRow = parseInt(row.value);
          var countColumn = parseInt(column.value);
      
          var tagTable = document.createElement("table");
          tagTable.border = 1;
      
          for (var i = 0; i < countRow; i++) {
        var tagRow = document.createElement("tr");
        tagTable.appendChild(tagRow);
                
        for(var j = 0; j < countColumn; j++) {
          var tagColumn = document.createElement("td");
                  var textNode = document.createTextNode(i + " - " + j);
                  tagColumn.appendChild(textNode);
                  tagRow.appendChild(tagColumn);
        }
          }
      
          container.appendChild(tagTable);
      
          return true;
    }
  }