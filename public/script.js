function handleDisplayOfMessage() {
  const queryParam = window.location.search;
  const initialElem = document.querySelectorAll(".initial");
  const nonUCDElem = document.querySelector(".nonUCD");
  // error case - when user email id is non-ucd
  if (queryParam.indexOf('email') > -1) {
    initialElem[0].style.display='none';
    initialElem[1].style.display='none';
    nonUCDElem.style.display='block';
  } else { // valid user
    initialElem[0].style.display='block';
    initialElem[1].style.display='block';
    nonUCDElem.style.display='none';
  }
}

handleDisplayOfMessage();