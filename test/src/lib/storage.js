// 封装storage方法，降低耦合度，便于管理
export default {
    get(name){
        return localStorage.getItem(name);
    },
    remove(name){
        localStorage.removeItem(name);
    },
    set(name,val){
        localStorage.setItem(name,val);
    }
}