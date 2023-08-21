let divINfo = document.getElementById("pokeInfo");
let input = document.getElementById("pokename");
let title = document.getElementById("pokeId");
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
      title.innerText = res.name;
      moves.innerText = "Moves:";
      res.abilities.forEach(
        (el) => (moves.innerHTML += `<li>${el.ability.name}</li>`)
      );
      exp.innerText = `Experience: ${res.base_experience}`;
      image.src = res.sprites.front_default;
    })
    .catch((err) => console.log(err));
}
