function checkFilter(category, title, check) {
  if (check) {
    this[category].push(title);
  } else {
    let index = this[category].indexOf(title);
    if (index > -1) {
      this[category].splice(index, 1);
    }
  }
}

export { checkFilter };
