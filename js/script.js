const loading = document.querySelector('.loading');
async function getDrinks() {
    try { 
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const jsonObject = await response.json();
        // console.log(jsonObject);
        const jsonArray = jsonObject.drinks;
        console.log('Something', jsonArray)
        loading.innerHTML = '';

		// create the link to go to the details page
    
    for (let i = 0; i < jsonArray.length; i++) {
        
		document.querySelector('main').innerHTML += `
	    <div class="card">
            <img class ="drinkImg" src="${jsonArray[i].strDrinkThumb}">
            <h2>${jsonArray[i].strDrink}</h2>
            <p>${jsonArray[i].strCategory}</p>
            <a href="details.html?id=${jsonArray[i].idDrink}">Read More</a>
	    </div>
	`;
    }
		
    }catch (error) {
        document.querySelector('.alert').innerHTML = showAlertTouser(
            'error',
            'danger'
            );
        }finally {
            setTimeout(function () {
                document.querySelector('.alert').innerHTML = ' ';
            }, 3000);
        }
}

getDrinks();