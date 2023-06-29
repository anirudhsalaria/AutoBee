export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '7564cc5fa2mshe1ccf4580d12d5dp1ee617jsn1dadedd6cd74',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
    });

    const result = await response.json();
    return result;
}