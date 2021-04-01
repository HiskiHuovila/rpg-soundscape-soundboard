const tabs = document.getElementsByClassName("tab");
const tabParent = document.querySelector(".tabParent");
const tabNames = ["Civilized", "Wilderness", "Weather", "Dungeon"];
const buttonGroups = document.querySelectorAll(".buttons");

GenerateTabs();
for (let i = 0; i < tabs.length; i++) {
  tabs.item(i).setAttribute("onclick", `SwitchTab(${i})`);
}
SwitchTab(0);

function SwitchTab(index) {
  for (let i = 0; i < tabs.length; i++) {
    tabs.item(i).classList.remove("is-active");
  }
  for (let i = 0; i < buttonGroups.length; i++) {
    buttonGroups[i].style.display = "none";
  }
  buttonGroups[index].style.display = "flex";
  tabs.item(index).classList.add("is-active");
}

function GenerateTab(text) {
  tabParent.innerHTML += ` <li class="is-active tab">
 <a>
   <span>${text}</span>
 </a>
</li>`;
}

function GenerateTabs() {
  tabNames.forEach((element) => GenerateTab(element));
}
