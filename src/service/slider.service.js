export const sliderService = {
    getSlider
};

function getSlider(page) {
    const requestOptions = {
        method: 'GET',
        headers: { 'apiKey': process.env.WEB_KEY }
    };

    return fetch(`${process.env.API_URL_HOST}/list-slider`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        return data;
    });
}

