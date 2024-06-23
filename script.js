

function send(){
  const Pok_name =document.getElementById('name').value;
  const show_img = document.getElementById('h1');
  show_img.innerHTML=Pok_name;
  api=fetch(`https://pokeapi.co/api/v2/pokemon/${Pok_name}`)
.then(res => res.json())
.then(data => {
  console.log(data);
  const img = document.getElementById('Pokimg');
  img.src=data.sprites.front_default;
  img.style.display= "block";
  })
.catch(err => console.log(err))
}
