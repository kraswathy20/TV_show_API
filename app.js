const form = document.querySelector('#searchform')
const imgCont = document.getElementById('imgCont')
form.addEventListener('submit',async function(evt){
    evt.preventDefault();
    imgCont.innerHTML = '';
    const searchTerm = form.elements.searchvalue.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    makeImages(res.data)
    form.elements.searchvalue.value = '';
})
const makeImages = (showsss)=>{
    
    if(showsss.length === 0){
        alert('Sorry!!  No Image :(')
    }
    for(let result of showsss){
        if(result.show.image){
        console.log(result);
        const img = document.createElement('img')
        img.src = result.show.image.medium; 
        img.classList.add('img-style')
        imgCont.appendChild(img)
    }
    }
}

