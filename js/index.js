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
    text1.innerHTML = "These colorful sea turtle resides in tropical reefs all around the world. However, they are also critically endangered due to poaching for their shells and because of increased marine pollution.";
  }
  if (level >= 2) {
    badge2.src = "img/2.png";
    text2.innerHTML = "This graceful subspecies of tigers are renowned for their striped fur coats, and are critically endangered due to poaching and habitat loss in Asia.";
  }
  if (level >= 3) {
    badge3.src = "img/3.png";
    text3.innerHTML = "Though large and seemingly frightened, these elephants are actually extremely sociable and kind. However, they have recently been under risk for endangerment due to poaching for their ivory tusks and have low breeding success rates.";
  }
  if (level >= 4) {
    badge4.src = "img/4.png";
    text4.innerHTML = "These bushy tailed creatures are native to China and the Himalayas. Though adorable, they are fewer than 10,000 of them left in the world due to habitat loss and inbreeding depression.";
  }
  if (level >= 5) {
    badge5.src = "img/5.png";
    text5.innerHTML = "These red-faced monkeys are currently listed as a vulnerable species, as they face massive habitat loss along with hunting issues.";
  }
  if (level >= 6) {
    badge6.src = "img/6.png";
    text6.innerHTML = "These chubby sea creatures live mostly on land, but fish in the sea and love to swim. They are being negatively affected by climate change, and are on the endangered species list.";
  }
  if (level >= 7) {
    badge7.src = "img/7.png";
    text7.innerHTML = "These schoolbus long whales are very docile and calm in nature. They have been recently under fire for their precious body parts, which are sold on black markets.";
  }
  if (level >= 8) {
    badge8.src = "img/8.png";
    text8.innerHTML = "These dolphins are unique in many ways, but mostly because of their pastel pink color. They are freshwater creatures that reside in the Amazon and Orinoco Rivers, and their numbers are dwindling due to river traffic and increased human population in their habitats.";
  }
  if (level >= 9) {
    badge9.src = "img/9.png";
    text9.innerHTML = "These pristine ursuses reside in the North Pole, and are facing increased climate change and contact with humans.";
  }
  if (level >= 10) {
    badge10.src = "img/10.png";
    text10.innerHTML = "These spotted creatures are known for their beautiful coats and lightning speed. Currently, they fae poaching and habitat loss.";
  }
  if (level >= 11) {
    badge11.src = "img/11.png";
    text11.innerHTML = "The giraffe is a long necked mammal that lives mainly in Africa, and face habitat loss due to expanding agriculture, making them on the brink of extinction.";
  }
  if (level >= 12) {
    badge12.src = "img/12.png";
    text12.innerHTML = "These incredibly pleasant and calm creatures are characterized by their white and black fur coats. They are indigenous to China, but face extinction because of increased construction of roads and buildings, which decreases habitat space and bamboo forests.";
  }
  if (level >= 13) {
    badge13.src = "img/13.png";
    text13.innerHTML = " Nicknamed the “Sea Cow”. these mammals of the ocean are closely related to manatees and the likes. They too risk endangerment, as they are losing their feeding grounds and are becoming bycatch by fishers.";
  }
  if (level >= 14) {
    badge14.src = "img/14.png";
    text14.innerHTML = "These birds of flight are often mistaken for living in mountains, as they actually live on level land. They prefer dry habitats, but are driven out of their homes because of industrial development and pesticide exposure.";
  }
  if (level >= 15) {
    badge15.src = "img/15.png";
    text15.innerHTML = "Unlike most other mammals, these duck-billed creatures lay eggs, making them monotremes. They face extinction due to traps and poaching for their fur.";
  }
}

tasksButton();
updatePoints();
