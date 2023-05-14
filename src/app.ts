import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'YOUR_API_KEY';

// Below code can be used when '@types/google.maps' is not installed to avoid TypeScript error
// declare var google: any;

type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: "OK" | "ZERO_RESULTS";
};

async function searchAddressHandler(event: Event) {
    try {
        event.preventDefault();
        const enteredAddress = addressInput.value;

        // Call API
        let response = await axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`);
        // console.log(response);
        if (response.data.status !== 'OK') {
            throw new Error('Could not fetch location');
        }
        let coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map") as HTMLDivElement, {
            center: coordinates,
            zoom: 8,
        });

        new google.maps.Marker({position: coordinates, map: map});

    }
    catch (error: any) {
        alert(error.message);
        console.log(error);
    }
}

form.addEventListener('submit', searchAddressHandler);