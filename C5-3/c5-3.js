
function getImages(reqUrl){
    let imgList = [];
    xhr = new XMLHttpRequest();
    xhr.open("GET", reqUrl);
    
    xhr.onload = function(){
        let jsonObj = JSON.parse(xhr.response);
        jsonObj.forEach(pic =>{
            imgList.push(pic.download_url);
        });
        document.querySelector(".pictureContainer").innerHTML = drawImages(imgList);
        
    }
    xhr.send();
    
    return imgList;
}
function drawImages(imgList){
    let rez = '';
    let i = 0;
    imgList.forEach(imgLink =>{
        rez += `<div class="imgDiv"><img src="${imgLink}" class = "cover"></img></div>`;
        // ${Math.floor(100/imgList.length)-1}
    });
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
                getImages(reqUrl);
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