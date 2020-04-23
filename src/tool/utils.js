import Toast from "../components/Toast";
const utils = {
    getQueryString(){
       let searchStr = window.location.search.length > 0 ?
            window.location.search.substring(1) : "",
            hashStr = window.location.hash.length > 0 && window.location.hash.split("?")[1]?
            window.location.hash.split("?")[1] : "",
            sep = hashStr ? "&" : "";
        return searchStr + sep + hashStr 
         
    },
    toast(text){
        Toast.info(text)
    },
    showLoading(){
        this.hideLoading = Toast.loading("加载中...",0, () => {})
    },
    hideLoading(){
        this.hideLoading()
    }  
};
export default utils;