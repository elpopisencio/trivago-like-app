const faker = require('faker')

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

function getImages(index){
	let images = Array(faker.random.number(3) + 1)
		.fill()
		.map(() => faker.image.imageUrl());
	images[0] = '/img/hotel-' + (index + 1) + '.jpg';
	return images;
}

const hotels = Array(6)
	.fill()
	.map((hotel, index) => ({
		"id": faker.random.uuid(),
		"name": faker.company.companyName() + ' Hotel',
		"description": faker.lorem.sentence(),
		"distance_to_venue": faker.random.number(1000),
		"rating": faker.random.number(50) / 10,
		"price_category": getPriceCategory(),
		"amenities": getAmenities(),
		"images": getImages(index),
  }));

const rooms = hotels.reduce((total, current) => {
	const currentHotelRooms = Array(faker.random.number(4) + 2)
	.fill()
	.map(() => ({
		"id": faker.random.uuid(),
		"name": faker.commerce.productAdjective() + ' suite',
		"description": faker.lorem.sentence(),
		"max_occupancy": faker.random.number(4) + 1,
		"price_in_usd": faker.random.number(1000) / 10,
		"hotel_id": current.id,
  }));
  return [...total, ...currentHotelRooms];
}, []);

function data(){
	return {hotels, rooms};
}

module.exports = data;