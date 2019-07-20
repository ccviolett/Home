var urlList = {
  "Bing": "https://www.bing.com/search?q=",
  "Baidu": "https://www.baidu.com/s?wd=",
  "Google": "https://www.google.com/search?q="
};

var engines = window.location.href.match('engines=(.*)');

if (engines) engines = engines[1];
else engines = "Google";

function monitor(e) {
  if (e.key == "Enter") {
    var link = document.getElementById("content");
    console.log(link.value);
    window.open(urlList[engines] + link.value);
  }
}

document.getElementById("content").focus();
