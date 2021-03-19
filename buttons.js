const buttons = document.getElementsByClassName("button");
const buttonsAncestor = document.querySelector(".buttons-ancestor");
const buttonTexts = [
  ["town", "city", "military", "inn"],
  ["forest", "grasslands", "desert"],
  ["rainy", "thunder", "Windy"],
  ["cavern", "temple"]
];

//generate all buttons
GenerateAllButtons();
//give all buttons functionality
for (let i = 0; i < buttons.length; i++) {
  buttons
    .item(i)
    .setAttribute("onclick", `SelectButton(${i}); DisplayCategory(${i}); `);
}
SelectButton(0);

function SelectButton(index) {
  for (let i = 0; i < buttons.length; i++) {
    buttons.item(i).classList.remove("is-selected");
    buttons.item(i).classList.remove("is-dark");
  }
  buttons.item(index).classList.add("is-selected");
  buttons.item(index).classList.add("is-dark");
}

function GenerateButton(parent, text) {
  parent.innerHTML += `<a class="button">${text}</a>`;
}

function GenerateButtonGroup(parent, index) {
  parent.innerHTML += `<div class="buttons container has-addons is-centered hidden-by-default buttons-${index}"></div>`;
  const here = document.querySelector(`.buttons-${index}`);
  buttonTexts[index].forEach((element) => GenerateButton(here, element));
}

function GenerateAllButtons() {
  for (let i = 0; i < buttonTexts.length; i++) {
    GenerateButtonGroup(buttonsAncestor, i);
  }
}
