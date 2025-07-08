import {printHeader, printBody} from "./layout.js";
import { amountFollowers } from "./helpers.js";
import "./darkmode.js";

const contentFollowers = document.querySelector(".followers");
const contentOverviews = document.querySelector(".overviews");
const totalFollowersNumber = document.querySelector(".totalFollowersNumber");
const months = document.querySelector(".months");
const currentMonth = document.querySelector(".currentMonth");

let dataDashboard = null;

months.addEventListener("click", (e) => {
  if (e.target.classList.contains("month-items")) {
    const nameMonth = e.target.textContent;
    currentMonth.textContent = nameMonth;

    const {dataHead, dataBody} = dataDashboard[nameMonth];
    totalFollowersNumber.textContent = amountFollowers(dataHead);
    printHeader(dataHead, contentFollowers);
    printBody(dataBody, contentOverviews);
  }
});

 async function getData() {
  try {
    const data = await fetch("./src/data.json");
    const res = await data.json();

    dataDashboard = res;
    const {dataHead, dataBody} = dataDashboard.ene;
    totalFollowersNumber.textContent = amountFollowers(dataHead);

    printHeader(dataHead, contentFollowers);
    printBody(dataBody, contentOverviews);
  } catch (error) {
    console.log(error);
  }
}
getData();