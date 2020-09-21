function getImage(reqUrl){
    fetch(reqUrl)
    .then((response) => {
        return response.url;
    })
    .then((imgUrl) => {
        drawImage(imgUrl);
    })
}
function drawImage(imgUrl){
    document.querySelector(".imgDiv").innerHTML = `<img src="${imgUrl}"</img>`;
}

function init(){
    document.querySelector(".sendDataButton").addEventListener("click", (e)=>{
        e.preventDefault();
        const value1 = Number(document.querySelector(".inputData1").value);
        const value2 = Number(document.querySelector(".inputData2").value);
        if (value1 && value2){
            if ((value1 >=100 && value1 <= 300)&&(value2 >=100 && value2 <= 300)){
                document.querySelector(".rezultMsg").innerHTML = "";
                reqUrl = `https://picsum.photos/${value1}/${value2}`
                getImage(reqUrl);
            }
            else{
                document.querySelector(".rezultMsg").innerHTML = "одно из чисел вне диапазона от 100 до 300";
            }
        }
        else{
            document.querySelector(".rezultMsg").innerHTML = "Введено не число";
        }
    });
}
init();

