function createElements() {}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => insertData(data));

function insertData(data) {
  data.forEach((element) => {
    console.log(element);
    createUser(element);
  });
}

function createUser(element) {
  //createElements();
  const usersWrapper = document.getElementById("container");

  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");

  const iUser = document.createElement("i");
  iUser.classList.add("fa-solid");
  iUser.classList.add("fa-user");

  const userName = document.createElement("p");
  userName.classList.add("username");

  const fullName = document.createElement("p");
  const email = document.createElement("p");
  const phone = document.createElement("p");
  const website = document.createElement("p");

  // populate left-side
  leftSide.appendChild(iUser);
  leftSide.appendChild(userName);
  leftSide.appendChild(fullName);
  leftSide.appendChild(email);
  leftSide.appendChild(website);

  // create right side elements
  const rightSide = document.createElement("div");
  rightSide.classList.add("right-side");

  const rightSideCompany = document.createElement("div");
  rightSideCompany.classList.add("right-side__company");

  const compTitle = document.createElement("div");
  compTitle.classList.add("comp-title");

  const compInfo = document.createElement("div");
  compInfo.classList.add("comp-info");

  const compName = document.createElement("p");
  compName.classList.add("comp-name");

  const catchPhrase = document.createElement("p");
  const bs = document.createElement("p");

  compInfo.appendChild(compName);
  compInfo.appendChild(catchPhrase);
  compInfo.appendChild(bs);

  rightSideCompany.appendChild(compTitle);
  rightSideCompany.appendChild(compInfo);

  const rightSideAddress = document.createElement("div");
  rightSideAddress.classList.add("right-side__address");

  const addressTitle = document.createElement("div");
  addressTitle.classList.add("address-title");

  const addressInfo = document.createElement("div");
  addressInfo.classList.add("address-info");

  const addressInfoLeft = document.createElement("div");
  addressInfoLeft.classList.add("address-info-left");

  const leftAddress = document.createElement("p");
  addressInfoLeft.appendChild(leftAddress);

  const addressInfoRight = document.createElement("div");
  addressInfoRight.classList.add("address-info-right");

  const zipCode = document.createElement("p");
  const lat = document.createElement("p");
  const lng = document.createElement("p");

  addressInfoRight.appendChild(zipCode);
  addressInfoRight.appendChild(lat);
  addressInfoRight.appendChild(lng);

  addressInfo.appendChild(addressInfoLeft);
  addressInfo.appendChild(addressInfoRight);

  rightSideAddress.appendChild(addressTitle);
  rightSideAddress.appendChild(addressInfo);

  rightSide.appendChild(rightSideCompany);
  rightSide.appendChild(rightSideAddress);

  userCard.appendChild(leftSide);
  userCard.appendChild(rightSide);

  usersWrapper.appendChild(userCard);
  userName.innerText = element.username;
  fullName.innerText = element.name;
  email.innerText = element.email;
  phone.innerText = element.phone;
  website.innerText = element.website;
  compName.innerText = element.company.name;
  catchPhrase.innerText = element.company.catchPhrase;
  bs.innerText = element.company.bs;
  leftAddress.innerText = `${element.address.street} ${element.address.suite} ${element.address.city}`;
  zipCode.innerText = element.address.zipcode;
  lat.innerText = element.address.geo.lat;
  lng.innerText = element.address.geo.lng;
}
