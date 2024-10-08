const BASE_API_URL = `${(window.location.origin || 'http://localhost:3000')}/api`;

const fetchRequest = async (path, options) => {
    return await fetch(
        `${BASE_API_URL}/${path}`,
        options,
    )
}

export default fetchRequest;