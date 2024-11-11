const boxes = $(".box").toArray();
const themeAudio = new Audio("/assets/audio/Knight-Rider-Theme-Song.mp3");
themeAudio.loop = true;

themeAudio.volume = 0.2;
let index = 0;
let forward = true;
let kittAnimation;

function resetClasses() {
  boxes.forEach((box) =>
    box.classList.remove("color-1", "color-2", "color-3", "color-4", "color-5")
  );
}

function forwardColors(index) {
  resetClasses();
  $(boxes[index]).addClass("color-1");
  if (boxes[index - 1]) $(boxes[index - 1]).addClass("color-2");
  if (boxes[index - 2]) $(boxes[index - 2]).addClass("color-3");
  if (boxes[index - 3]) $(boxes[index - 3]).addClass("color-4");
  if (boxes[index - 4]) $(boxes[index - 4]).addClass("color-5");
}

function backwardColors(index) {
  resetClasses();
  $(boxes[index]).addClass("color-1");
  if (boxes[index + 1]) $(boxes[index + 1]).addClass("color-2");
  if (boxes[index + 2]) $(boxes[index + 2]).addClass("color-3");
  if (boxes[index + 3]) $(boxes[index + 3]).addClass("color-4");
  if (boxes[index + 4]) $(boxes[index + 4]).addClass("color-5");
}

function startAnimation() {
  themeAudio.play();
  if (!kittAnimation) {
    kittAnimation = setInterval(() => {
      if (forward) {
        forwardColors(index);
        index++;
        if (index >= boxes.length - 1) {
          forward = false;
        }
      } else {
        backwardColors(index);
        index--;
        if (index <= 0) {
          forward = true;
        }
      }
    }, 64);
  }
}

function stopAnimation() {
  themeAudio.pause();
  clearInterval(kittAnimation);
  kittAnimation = null;
}

$("#start").click(() => {
  startAnimation();
});

$("#stop").click(() => {
  stopAnimation();
});
