function getMovie(){
    let name=document.getElementById("name")
    name=name.value;
async function movies()
{
    let search=document.getElementById("search")
    let movie=await fetch(`https://www.omdbapi.com/?s=${name}&apikey=934faec2`)
    movie=await movie.json();
    movie=movie.Search;
     let parent=document.getElementById("parent");
     while(parent.firstChild){
        parent.firstChild.remove();
     }

     movie.map(({Title,Year,Poster})=>
     {
     return parent.innerHTML+=
     `
     <div class="child" id="child">
        <img src="${Poster}" alt="">
        <h4>${Title}</h4>
        <h4>Year:${Year}</h4>
        <hr>
     </div>
     `
     }
     )
}
movies()
}
