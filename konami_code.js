function init() {
// add event listener
  let closedEventFunction = setKonamiEasterEgg();

  document.body.addEventListener('keydown', closedEventFunction);
};

// set up closure for easter egg function
function setKonamiEasterEgg() {
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let index = 0;
  return function(e){
    const key = parseInt(e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  };
};
