function getImages(reqUrl){
    let imgList = [];
    xhr = new XMLHttpRequest();
    xhr.open("GET", reqUrl);
    xhr.send();
    xhr.onload = function(){
        let i = 0;
        let jsonObj = JSON.parse(xhr.response);
        jsonObj.forEach(pic =>{
            imgList.push(pic.download_url);
        });
    }
}
function drawImages(imgList){
    let rez = '';
    let i = 0;
    console.log(imgList);
    for (i=0; i < imgList.length; i+=1){
        console.log(imgList[i]);
    }
    // imgList.forEach(imgLink =>{
        
    //     // console.log('sdfdsf');
    //     // rez += `<div><img src="${imgLink}" width = "${math.floor(100/length.imgList)-1}%"></img></div>`;
    //     // console.log(rez);
    // });
    return rez;

}

function init(){
    let arr = new Array();
    arr = ["1","2","3","4"];
    console.log(arr, arr.length, arr[2]);
    document.querySelector(".sendDataButton").addEventListener("click", (e)=>{
        e.preventDefault();
        const value = Number(document.querySelector(".inputData").value);
        if (value){
            if (value >=1 && value <= 10){
                document.querySelector(".rezultMsg").innerHTML = "";
                reqUrl = `https://picsum.photos/v2/list?limit=${value}`
                let imgList = getImages(reqUrl);
                // console.log(imgList.length);
                document.querySelector(".pictureContainer").innerHTML = drawImages(imgList);
            }
            else{
                document.querySelector(".rezultMsg").innerHTML = "число вне диапазона от 1 до 10";
            }
        }
        else{
            document.querySelector(".rezultMsg").innerHTML = "Введено не число";
        }
    });
}
init();