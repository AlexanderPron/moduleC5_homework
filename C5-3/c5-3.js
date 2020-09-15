function getImages(reqUrl){
    let imgList = [];
    xhr = new XMLHttpRequest();
    xhr.open("GET", reqUrl);
    xhr.send();
    xhr.onload = function(){
        let i = 0;
        let jsonObj = JSON.parse(xhr.responseText);
        jsonObj.forEach(pic =>{
            imgList[i] = pic.download_url;
            i+=1;
        });
    }
    return imgList;
}
function drawImages(imgList){
    let rez = '';
    let i = 0;
    console.log(imgList[2]);
    for (i=0; i < length.imgList; i+=1){
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
    document.querySelector(".sendDataButton").addEventListener("click", (e)=>{
        e.preventDefault();
        const value = Number(document.querySelector(".inputData").value);
        if (value){
            if (value >=1 && value <= 10){
                document.querySelector(".rezultMsg").innerHTML = "";
                reqUrl = `https://picsum.photos/v2/list?limit=${value}`
                let imgList = getImages(reqUrl);
                console.log(length.imgList);
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