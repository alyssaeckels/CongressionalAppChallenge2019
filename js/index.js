var points = 0;
var pointsToLevelUp = 1000;
var level = 1;

var pointBar = document.getElementById("points");
var levelBar = document.getElementById("level");
var barBar = document.getElementById("bar");

function updatePoints() {
  updateLevel();
  updateBar();
  pointBar.innerHTML = points + " / " + pointsToLevelUp + " Points";
}

function updateLevel() {
  while (points >= pointsToLevelUp) {
    var extra = points - pointsToLevelUp;
    points = extra;
    level++;
    pointsToLevelUp = pointsToLevelUp * 2;
  }
  levelBar.innerHTML = "Level " + level;
}

function addPoints(add) {
  points = points + add;
  updatePoints();
}

function completeTask(checklist, points) {
  checklist.style.display = "none";
  addPoints(points);
}

function updateBar() {
  var pct = points / pointsToLevelUp * 100;
  var percent = pct + '%';
  barBar.style.width = percent;
}

var tasks = document.getElementById("tasks");
var badges = document.getElementById("badges");
var links = document.getElementById("links");

function tasksButton() {
  tasks.style.display = "block";
  badges.style.display = "none";
  links.style.display = "none";
}

function badgesButton() {
  tasks.style.display = "none";
  badges.style.display = "block";
  links.style.display = "none";
}

function linksButton() {
  tasks.style.display = "none";
  badges.style.display = "none";
  links.style.display = "block";
}

tasksButton();
updatePoints();
