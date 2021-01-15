// url 에서 parameter 추출하는 함수
function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) {
            sval = temp[1];
        }
    }
    console.log(sval);
    return sval;
}
function getAvatare() {
    id = document.getElementById("usernameInput").value;
    var img = document.getElementById("Profilephoto");
    imgurl = "https://d.lu.je/avatar/" + id + "?size=128";
    img.onload = function () {
        document.getElementById("downloadimg").style.display = "block";
    };
    img.src = imgurl;
    // window.open("https://d.lu.je/avatar/" + id + "/?size=2048", "_blank");
}
function downloadimg() {
    window.open(imgurl, "_blank");
}
