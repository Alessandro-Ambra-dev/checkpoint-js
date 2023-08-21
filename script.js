let divINfo = document.getElementById("pokeInfo");
let input = document.getElementById("pokename");

let btn = document.getElementById("search");
let p1 = document.getElementById("exp");
let moves = document.getElementById("moves");
let image = document.getElementById("imgPoke");

btn.addEventListener("click", () => {
  getInfo();
});

function getInfo() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    .then((res) => res.json())
    .then((json) => json)
    .then((res) => {
      console.log(res.name);
      res.abilities.forEach(
        (el) => (moves.innerText = `Moves: ${el.ability.name}`)
      );
      exp.innerText = `Experience: ${res.base_experience}`;
      image.src = res.sprites.front_default;
    })
    .catch((err) => console.log(err));
}
