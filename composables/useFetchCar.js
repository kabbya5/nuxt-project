export default async (id) =>{
    const {data,error} = await useFetch(`/api/car/${id}`);

    if(error.value){
        throw createError({
            statusCode:error.statusCode,
            statusMessage:error.statusMessage,
        });
    }

    return {data};
};