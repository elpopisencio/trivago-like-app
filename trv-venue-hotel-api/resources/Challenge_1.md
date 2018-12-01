### Challenge 1: The API (codename: trv-venue-hotel-api)

Task: Setup a API that return fake data.

Use [json-server](https://github.com/typicode/json-server) and [faker](https://github.com/Marak/faker.js) to mock the API we expect to get from the backend team and design it how you would expect the data to be provided using RESTful API design. 

We eventually require the possibility:

- to get all hotels
- to get a single hotel
- to remove a single hotel
- to create a new hotel
- to get all the available rooms of a hotel

at first glance. You previously agreed that the following details will be provided for hotels and rooms:

```javascript
// hotel
{
    "id": "61c9665f-3c08-45ec-88d3-5029af3269c8", // uuid v4
    "name" "Developer-friendly hotel", // string
    "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.", // string
    "distance_to_venue": 800, // integer (in meters)
    "rating": 4.6, // float (0 - 5)
    "price_category": "medium", // string ['low', 'medium', 'high']
    // array of strings ['free_parking','free_wifi','pets','restaurant','gym','pool','spa']
    "amenities": ["free_parking", "free_wifi"],
    // array of strings (first url is considered to be the "main" image showing the hotel)
    "images": [
        "http://via.placeholder.com/140x100",
        "http://via.placeholder.com/100x140",
        "http://via.placeholder.com/140x140"
    ]
}

// room of a hotel
{
    "id": "bf2b9853-7cec-47bf-ba3d-3ba765061db7", // uuid v4
    "name": "Deluxe suite", // string
    "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.", // string
    "max_occupancy": 4, // integer (maximum amount of persons in this room)
    "price_in_usd": 78.90 // float (per night)
}
```

**Note:** Please include images you are using within the final project and do not link to external resources. Generate 6 hotels with each having two to six different rooms using random fake data (which matches the data requirements listed above).

**Info:** While *json-server* provides the ability to filter, sort and paginate results please assume your API does not provide these capabilities and these kind of actions need to be done in the client.