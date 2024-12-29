/*
fetch = function used for making HTTP request to fetch resources.(JSON style data, images , files)
    Simplifies asynchronous data fetching in Javascript and used for interacting with APIs to rerieve and send data asynchronously over the web.
    fetch(url, {options})
*/
async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response= await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Couldnot fetch resource");

        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display ="block";
        
    }

    catch(error)
    {
        console.log(error);
    }
}