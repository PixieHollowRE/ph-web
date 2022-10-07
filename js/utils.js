function popWindow(url, name, params) {
    window.open(url, name, params);
}
function backBtn(){
  history.back(-1);
}
function btnOn(image){
  image.src=image.src.replace("_off.", "_on.")
}
function btnOff(image){
  image.src=image.src.replace("_on.", "_off.")
}
