function submitComment() {
  let comment = document.getElementById("comment").value;
  document.getElementById("comments").innerHTML += "<p>" + comment + "</p>";
}
