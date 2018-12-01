var faker = require('faker')

function getPriceCategory(){
	const categories = ['low', 'medium', 'high'];
	return categories[faker.random.number(2)];
}

function getAmenities(){
	const posible = ['free_parking','free_wifi','pets','restaurant','gym','pool','spa'];
	return posible.reduce((total, current) => {
		if(faker.random.boolean()){
			return [...total, current];
		}
		return total;
	}, []);
}

function getImages(){
	return Array(faker.random.number(3) + 1)
		.fill()
		.map(() => faker.image.imageUrl());
}

const hotels = Array(6)
	.fill()
	.map(() => ({
		"id": faker.random.uuid(),
		"name": faker.company.companyName() + ' Hotel',
		"description": faker.lorem.sentence(),
		"distance_to_venue": faker.random.number(1000),
		"rating": faker.random.number(50) / 10,
		"price_category": getPriceCategory(),
		"amenities": getAmenities(),
		"images": getImages(),
  }));

console.log(hotels);

