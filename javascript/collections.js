var collect1 = document.getElementById("collect1");
var search = document.getElementById("search");
var collect1item = collect1.querySelectorAll(".collections-cont");

search.addEventListener("keyup", function(event) {
    var enteredvalue = event.target.value.toUpperCase();

    for (var count = 0; count < collect1item.length; count++) {
        var collect1name = collect1item[count].querySelector("h3").textContent.toUpperCase();

        if (collect1name.indexOf(enteredvalue) < 0) {
            collect1item[count].style.display = "none";
        } else {
            collect1item[count].style.display = "block";
        }
    }
});
var side_bar = document.querySelector(".side-bar")

var menu_tog = document.querySelector(".menu-tog")

function shownav(){
   side_bar.style.left ="0"

}

function hidenav(){
    side_bar.style.left="-70%"
}
function mt() {
  let title = document.querySelector(".collections-cont h3");
  title.style.opacity = "1";
}


function current(){
  alert("Currently Not Available")
}