const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

const loading = document.querySelector('.loading');

async function getDrinks(drinksId) {
	try {
		console.log(drinksId);
		const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drinksId);
        const jsonResults = await response.json();
        const jsonArray = jsonResults.drinks;
        loading.innerHTML = '';
        console.log (jsonResults);

        for (let i = 0; i < jsonArray.length; i++) {
            document.title = jsonArray[i].strDrink;
            document.querySelector('main').innerHTML += `
            <div class="card">
                <h1>${jsonArray[i].strDrink}</h1>
                <img class ="drinkImg" src="${jsonArray[i].strDrinkThumb}">
                <p>${jsonArray[i].strInstructions}</p>
            </div>
        `;
        }

    }catch (error) {
		console.log(error)
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

getDrinks(id);