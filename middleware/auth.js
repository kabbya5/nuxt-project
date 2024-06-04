
const user = useUser();

export default defineNuxtRouteMiddleware((to,from) => {
    if(user.email){
        return
    }

    return navigateTo('/login');
})