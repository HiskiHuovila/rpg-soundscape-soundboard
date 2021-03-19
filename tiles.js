const songlinkString = `<iframe src="https://open.spotify.com/embed/track/5s16hfHfTVVIrQgN5F87LE" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>;<iframe src="https://open.spotify.com/embed/track/6ih63ShwGPhn5U4lOhunZR" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<iframe src="https://open.spotify.com/embed/track/5s16hfHfTVVIrQgN5F87LE" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>;<iframe src="https://open.spotify.com/embed/track/6ih63ShwGPhn5U4lOhunZR" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
;
const songLinks = songlinkString.split("\n").map( x=> x.split(';'));

const tileParent1 = document.querySelector(".parent-1");
const tileParent2 = document.querySelector(".parent-2");
const tileParent3 = document.querySelector(".parent-3");

GenerateAll();
DisplayCategory(0);

function GenerateTile(embedLink, index, parent) {
  parent.innerHTML += `<div class="tile is-centered displayindex-${index} songlink is-child box hidden-by-default">
  ${embedLink}</div>`;
}

function GenerateAll() {
  for (let i = 0; i < songLinks.length; i++) {
    // here generate parent for a category
    for (let j = 0; j < songLinks[i].length; j++) {
      if (j % 3 === 0) {
        GenerateTile(songLinks[i][j], i, tileParent1);
      } else if (j % 3 === 1) {
        GenerateTile(songLinks[i][j], i, tileParent2);
      } else {
        GenerateTile(songLinks[i][j], i, tileParent3);
      }
    }
  }
}

function DisplayCategory(index) {
  document.querySelectorAll(".songlink").forEach((element) => {
    element.style.display = "none";
  });

  document.querySelectorAll(".displayindex-" + index).forEach((element) => {
    element.style.display = "flex";
  });
}
