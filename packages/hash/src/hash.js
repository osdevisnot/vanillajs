const hash = input => {
  let val = 5381;
  let i = input.length;

  while (i) {
    val = (val * 33) ^ input.charCodeAt(--i);
  }

  return '_' + (val >>> 0).toString(36);
};

export { hash };
