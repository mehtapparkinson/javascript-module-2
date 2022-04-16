// Write your code here
const img1 =
  "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";
const img2 =
  "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80";
const img3 =
  "https://images.unsplash.com/photo-1568043210943-0e8aac4b9734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
const img4 =
  "https://images.unsplash.com/photo-1595511890410-3b8dc237a537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1380&q=80";
const img5 =
  "https://images.unsplash.com/photo-1559235038-1b0fadf76f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

const kittensImages = [img1, img2, img3, img4, img5];

const backButton = document.querySelector("#back-button");
const forwardButton = document.querySelector("#forward-button");
const carousel = document.querySelector("#carousel");
const autoBackBtn = document.querySelector("#auto-back-button");
const autoForwardBtn = document.querySelector("#auto-forward-button");
const stopButton = document.querySelector("#stop-button");
let currentImgIndex = 0;
let interval;

const renderImage = () => {
  carousel.style.backgroundImage = `url(${kittensImages[currentImgIndex]})`;
};

const goBack = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = kittensImages.length - 1;
  } else {
    currentImgIndex--;
  }
  renderImage();
};

backButton.addEventListener("click", () => {
  goBack();
});

const goForward = () => {
  if (currentImgIndex === kittensImages.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  renderImage();
};
forwardButton.addEventListener("click", () => {
  goForward();
});

const autoForward = () => {
  interval = setInterval(goForward, 1000);
};

const autoBack = () => {
  interval = setInterval(goBack, 1000);
};

const stopAuto = () => {
  clearInterval(interval);
};

autoBackBtn.addEventListener("click", () => {
  autoBack();
  backButton.setAttribute("disabled", true);
  forwardButton.setAttribute("disabled", true);
  autoForwardBtn.setAttribute("disabled", true);
});

autoForwardBtn.addEventListener("click", () => {
    autoForward();
    backButton.setAttribute("disabled", true);
    forwardButton.setAttribute("disabled", true);
    autoBackBtn.setAttribute("disabled", true);
});

stopButton.addEventListener("click", () => {
    stopAuto();
    backButton.removeAttribute("disabled");
    forwardButton.removeAttribute("disabled");
    autoForwardBtn.removeAttribute("disabled");
    autoBackBtn.removeAttribute("disabled");
});

renderImage();