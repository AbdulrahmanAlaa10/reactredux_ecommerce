import List from "./products.json";

export function getAll(){
    return Promise.resolve(List);
}

export function getById(id) {
    const foood =  List.find(item => item.id === id);

    return Promise.resolve(foood);
}

export default {
    getAll,
    getById
}