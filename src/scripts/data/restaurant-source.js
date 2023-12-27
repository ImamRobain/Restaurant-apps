import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
    static async allRestaurant() {
        const response = await fetch(API_ENDPOINT.HOME);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.RESTO(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
        // return response.json();
    }
}

export default RestaurantSource;
