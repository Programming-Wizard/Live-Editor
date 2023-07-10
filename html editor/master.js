function refresh() {
    var editor_value = document.getElementById('editor').value;
    document.getElementById("viewer").srcdoc = editor_value;
}

function emmet() {
    var emmett = document.getElementById('editor').innerHTML = "<!DOCTYPE html>\n<html>\n<head>\n<title></title>\n<style>\n</style>\n</head>\n<body>\n<h1></h1>\n</body>\n</html>";
}
function hide() {
    var hide = document.getElementById('button').style.display = "none";
}

function jutsu() {
    var scrljutsu = document.getElementById('css').style.left = "20px";
    var imgaside = document.getElementById('cssscrl').style.left = "730px";
    var imgchng = document.getElementById('cssscrl').src = 'imgscrl2.jpg';
}

function rvrsejutsu() {
    var rvrsscrl = document.getElementById('css').style.left = "-715px";
    var rvrsimgside = document.getElementById('cssscrl').style.left = "0px";
    var rvrsimgchng = document.getElementById('cssscrl').src = 'imgscrl.jpg';
}

function coopy(){
    var input = document.getElementById('editor');
    input.focus();
    input.select();
    navigator.clipboard.writeText(input.value);
    alert("copied");
}