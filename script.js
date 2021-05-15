 
 function displayCats(arr) {
    let catImage = `<img src="${arr[0].url}">`
    let imgContainer = document.querySelector('#img-container');
    imgContainer.innerHTML = '';

    imgContainer.innerHTML += catImage;
 }

 async function getCats() {
     let response = await fetch(
         `https://api.thecatapi.com/v1/images/search`,
         {
             method:'GET',
             headers: {
                 Authorization:
                 '4da84dd3-89e7-4e25-a34c-b9f349910dc8'
             },
         }
     );

     let result = await response.json();
     displayCats(result)
 }

getCats();
