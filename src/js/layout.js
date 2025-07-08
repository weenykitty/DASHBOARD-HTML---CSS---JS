import { amountFollowers } from "./helpers.js";

export function printHeader(array, elementHTML) {
  let html = "";
  const totalFollowers = amountFollowers(array);
  console.log(totalFollowers);
  array.forEach(({icon, number, state, title, today, user}) => {
    const iconState = state
    ? `<img src="./src/images/icon-up.svg" alt="iconUp">`
    : `<img src="./src/images/icon-down.svg" alt="iconDown">`;
    html += `
      <div class="follower">
          <div class="follower__head">
              <img src="${icon}" alt="icon">
              <p>${user}</p>
          </div>
          <div class="followers__total">
              <p>${number}</p>
              <p>${title}</p>
          </div>
          <div class="follower__today">
              ${iconState}
              <p class=${state ? "color__green" :"color__red"}>${today}</p>
          </div>
      </div>
    `;
  });
  elementHTML.innerHTML = html;
}

export function printBody(array, elementHTML) {
  let html = "";
  array.forEach(({icon, number, porcent, state, title})=> {
    const iconState = state
    ? `<img src="./src/images/icon-up.svg" alt="iconUp">`
    : `<img src="./src/images/icon-down.svg" alt="iconDown">`;
    html += `
      <div class="overview">
        <div class="overview__top">
          <p>${title}</p>
          <img src="${icon}" alt="">
        </div>
        <div class="overview__buttom">
          <p>${number}</p>
          <div class="overview__buttom-percent">
            ${iconState}
            <p class=${
            state ? "color__green" :"color__red"}>${porcent}%</p>
          </div>
        </div>
      </div>
    `
  });
  elementHTML.innerHTML = html;
}