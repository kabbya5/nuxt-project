var email = null;
var password = null;

if (process.client) {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        var [key, value] = cookie.split('=');
        if (key === 'email') {
            email = decodeURIComponent(value);
        }
        if (key === 'password') {
            password = decodeURIComponent(value);
        }
    }
}

export const useUser = () => {
    return {
        email,
        password
    };
};