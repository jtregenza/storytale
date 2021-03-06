function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text + `

Contact us at fables@storytale.design`));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function getYear() {
  var d = new Date();
var year = d.getFullYear();
  
  document.querySelector(".year").innerHTML = year;
}
getYear();