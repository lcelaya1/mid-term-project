const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-menu-item");
const hamburger = document.querySelector(".menu-mobile");
const closeIcon = document.querySelector("#hamburger-close");
const openIcon = document.querySelector("#hamburger-open");

function toggleMenu() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
}

function sendEmail() {
    event.preventDefault();
    const errorForm = document.querySelector(".error-form");
    errorForm.style.display = "block"
}


  function insertImg(url, id) {
    fetch("https://api.spacexdata.com/v4/launches/" + url)
    .then((response) => response.json())
    .then((launchObj) => {
        const patchImage = launchObj.links.patch.large;
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", patchImage);
        document.getElementById(id).appendChild(imgElement);
    });
}

  function insertH3(url, id) {
    fetch("https://api.spacexdata.com/v4/launches/" + url)
    .then((response) => response.json())
    .then((launchObj) => {
        const objTitle = launchObj.name;
        const h3Element = document.createTextNode(objTitle);
        document.getElementById(id).appendChild(h3Element);
    });
}

  function insertDate(url, id) {
    fetch("https://api.spacexdata.com/v4/launches/" + url)
    .then((response) => response.json())
    .then((launchObj) => {
        const objDate = launchObj.date_utc;
        const newDate = objDate.slice(0, 10)
        const dateElement = document.createTextNode(newDate);
        document.getElementById(id).appendChild(dateElement);
    });
}
  
/* Project 1 */
insertImg("5eb87cd9ffd86e000604b32a", "article-image-1");
insertH3("5eb87cd9ffd86e000604b32a", "h3-1-project");
insertDate("5eb87cd9ffd86e000604b32a", "date-1");

/* Project 2 */
insertImg("5eb87cdaffd86e000604b32b", "article-image-2");
insertH3("5eb87cdaffd86e000604b32b", "h3-2-project");
insertDate("5eb87cdaffd86e000604b32b", "date-2");

/* Project 3 */
insertImg("5eb87cdbffd86e000604b32c", "article-image-3");
insertH3("5eb87cdbffd86e000604b32c", "h3-3-project");
insertDate("5eb87cdbffd86e000604b32c", "date-3");

/* Project 4 */
insertImg("5eb87ceeffd86e000604b341", "article-image-4");
insertH3("5eb87ceeffd86e000604b341", "h3-4-project");
insertDate("5eb87ceeffd86e000604b341", "date-4");


function insertH1(url, id) {
    fetch("https://api.spacexdata.com/v4/launches/" + url)
    .then((response) => response.json())
    .then((launchObj) => {
        const objTitle = launchObj.name;
        const h1Element = document.createTextNode(objTitle);
        document.getElementById(id).appendChild(h1Element);
    });
}

function insertSuccess(url, id) {
    fetch("https://api.spacexdata.com/v4/launches/" + url)
    .then((response) => response.json())
    .then((launchObj) => {
        const objTitle = launchObj.success;
      if(objTitle === false) {
        const failureElement = document.createTextNode("This launch was a failure");
        document.getElementById(id).appendChild(failureElement);
      } else {
        const successElement = document.createTextNode("This launch was a success");
        document.getElementById(id).appendChild(successElement);
      }
    });
}

function insertBrief(url, id) {
    fetch("https://api.spacexdata.com/v4/launches/" + url)
    .then((response) => response.json())
    .then((launchObj) => {
      const objTitle = launchObj.name
        const objBrief = launchObj.details;
        const objYtVideo = launchObj.links.webcast;
        const objArticle = launchObj.links.article;
        const objWiki = launchObj.links.wikipedia;
      const objCrew = launchObj.crew;
      const objDate = launchObj.date_utc;
      const dateDay = objDate.slice(0,10);
      const dateHour = objDate.slice(11,19)
      const failureAltitude = launchObj.failures[0].altitude;
      const finalBrief = "The ship named " + objTitle + " lauch in " + dateDay + " at " + dateHour + " with " + objCrew + " preople on board. At " + failureAltitude + " meters high the ship fail because the " + objBrief + ". If you're interested in knowing more about what happened you can check this links: " + objYtVideo + " - The YouTube video about the incident, " + objArticle + " - an article with more information and " + objWiki + " - the Wikipedia Page about the ship."
        const briefElement = document.createTextNode(finalBrief);
        document.getElementById(id).appendChild(briefElement);
    });
}

/* Full Page Project 1 */
insertH1("5eb87cd9ffd86e000604b32a", "h1-full-page-project-1");
insertSuccess("5eb87cd9ffd86e000604b32a", "h3-full-page-project-1");
insertDate("5eb87cd9ffd86e000604b32a", "date-full-page-project-1");
insertImg("5eb87cd9ffd86e000604b32a", "img-full-page-project-1");
insertImg("5eb87cd9ffd86e000604b32a", "img-full-page-project-1");
insertBrief("5eb87cdbffd86e000604b32c", "brief-full-page-project-1")

/* Full Page Project 2 */
insertH1("5eb87cdaffd86e000604b32b", "h1-full-page-project-2");
insertSuccess("5eb87cdaffd86e000604b32b", "h3-full-page-project-2");
insertDate("5eb87cdaffd86e000604b32b", "date-full-page-project-2");
insertImg("5eb87cdaffd86e000604b32b", "img-full-page-project-2");
insertImg("5eb87cdaffd86e000604b32b", "img-full-page-project-2");
insertBrief("5eb87cdaffd86e000604b32b", "brief-full-page-project-2")

/* Full Page Project 3 */
insertH1("5eb87cdbffd86e000604b32c", "h1-full-page-project-3");
insertSuccess("5eb87cdbffd86e000604b32c", "h3-full-page-project-3");
insertDate("5eb87cdbffd86e000604b32c", "date-full-page-project-3");
insertImg("5eb87cdbffd86e000604b32c", "img-full-page-project-3");
insertImg("5eb87cdbffd86e000604b32c", "img-full-page-project-3");
insertBrief("5eb87cdbffd86e000604b32c", "brief-full-page-project-3")

/* Full Page Project 4 */
insertH1("5eb87ceeffd86e000604b341", "h1-full-page-project-4");
insertSuccess("5eb87ceeffd86e000604b341", "h3-full-page-project-4");
insertDate("5eb87ceeffd86e000604b341", "date-full-page-project-4");
insertImg("5eb87ceeffd86e000604b341", "img-full-page-project-4");
insertImg("5eb87ceeffd86e000604b341", "img-full-page-project-4");
insertBrief("5eb87ceeffd86e000604b341", "brief-full-page-project-4")