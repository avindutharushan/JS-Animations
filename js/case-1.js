function startAnimation() {
  setInterval(() => {
    const lastElement = $(".walking-man-container div:last-child");
    $(".walking-man-container").prepend(lastElement);
  }, 2500);
}
