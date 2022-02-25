const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const update = function () {
    const target = Number(counter.getAttribute("data-target"));
    const c = +counter.innerText;

    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${c + Math.ceil(increment)}`;
      setTimeout(update, 1);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
