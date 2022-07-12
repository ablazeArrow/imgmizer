const box = document.getElementById('row');

const showGallery = async () => {
    const request = await fetch('/all')
    try{
        const imagesName = await request.json(); 
        if(imagesName.length == 0) document.getElementById('heading').innerHTML = 'No images to Show';
        else{
            for(image of imagesName) {
                document.getElementById('heading').innerText = "All Processed Images";
                const title = image.split('.')[0]
                const figure = document.createElement('figure');
                figure.innerHTML = `<img src="${image}" alt="${image}" /><figcaption>${title}</figcaption>`
                box.appendChild(figure);
            }      
        }
        }     
       
    catch(error){ console.log(error); }
}
showGallery();
