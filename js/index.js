var points = 0;
var pointsToLevelUp = 1000;
var level = 0;

var pointBar = document.getElementById("points");
var levelBar = document.getElementById("level");
var barBar = document.getElementById("bar");

function updatePoints() {
  updateLevel();
  updateBar();
  updateBadges();
  pointBar.innerHTML = points + " / " + pointsToLevelUp + " Points";
}

function updateLevel() {
  while (points >= pointsToLevelUp) {
    var extra = points - pointsToLevelUp;
    points = extra;
    level++;
    pointsToLevelUp = pointsToLevelUp + 3000;
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

var badge1 = document.getElementById("b1");
var badge2 = document.getElementById("b2");
var badge3 = document.getElementById("b3");
var badge4 = document.getElementById("b4");
var badge5 = document.getElementById("b5");
var badge6 = document.getElementById("b6");
var badge7 = document.getElementById("b7");
var badge8 = document.getElementById("b8");
var badge9 = document.getElementById("b9");
var badge10 = document.getElementById("b10");
var badge11 = document.getElementById("b11");
var badge12 = document.getElementById("b12");
var badge13 = document.getElementById("b13");
var badge14 = document.getElementById("b14");
var badge15 = document.getElementById("b15");

var text1 = document.getElementById("t1");
var text2 = document.getElementById("t2");
var text3 = document.getElementById("t3");
var text4 = document.getElementById("t4");
var text5 = document.getElementById("t5");
var text6 = document.getElementById("t6");
var text7 = document.getElementById("t7");
var text8 = document.getElementById("t8");
var text9 = document.getElementById("t9");
var text10 = document.getElementById("t10");
var text11 = document.getElementById("t11");
var text12 = document.getElementById("t12");
var text13 = document.getElementById("t13");
var text14 = document.getElementById("t14");
var text15 = document.getElementById("t15");

function updateBadges() {
  if (level >= 1) {
    badge1.src = "img/1.png";
    text1.innerHTML = "your text here";
  }
  if (level >= 2) {
    badge2.src = "img/2.png";
    text2.innerHTML = "your text here";
  }
  if (level >= 3) {
    badge3.src = "img/3.png";
    text3.innerHTML = "your text here";
  }
  if (level >= 4) {
    badge4.src = "img/4.png";
    text4.innerHTML = "your text here";
  }
  if (level >= 5) {
    badge5.src = "img/5.png";
    text5.innerHTML = "your text here";
  }
  if (level >= 6) {
    badge6.src = "img/6.png";
    text6.innerHTML = "your text here";
  }
  if (level >= 7) {
    badge7.src = "img/7.png";
    text7.innerHTML = "your text here";
  }
  if (level >= 8) {
    badge8.src = "img/8.png";
    text8.innerHTML = "your text here";
  }
  if (level >= 9) {
    badge9.src = "img/9.png";
    text9.innerHTML = "your text here";
  }
  if (level >= 10) {
    badge10.src = "img/10.png";
    text10.innerHTML = "your text here";
  }
  if (level >= 11) {
    badge11.src = "img/11.png";
    text11.innerHTML = "your text here";
  }
  if (level >= 12) {
    badge12.src = "img/12.png";
    text12.innerHTML = "your text here";
  }
  if (level >= 13) {
    badge13.src = "img/13.png";
    text13.innerHTML = "your text here";
  }
  if (level >= 14) {
    badge14.src = "img/14.png";
    text14.innerHTML = "your text here";
  }
  if (level >= 15) {
    badge15.src = "img/15.png";
    text15.innerHTML = "your text here";
  }
}

tasksButton();
updatePoints();
