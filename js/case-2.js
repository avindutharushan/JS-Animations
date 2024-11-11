const boxes = $(".box").toArray();
let colors = boxes.map((box) => $(box).css("background-color"));

function startAnimation() {
  setInterval(() => {
    const lastColor = colors.pop();
    colors.unshift(lastColor);

    boxes.forEach((box, index) => {
      $(box).css("background-color", colors[index]);
      console.log(index);
    });
  }, 500);
}
