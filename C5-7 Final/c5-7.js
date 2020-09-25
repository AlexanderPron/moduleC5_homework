function getImageList(reqUrl){
    let imgList = [];
    fetch(reqUrl)
    .then((response) => {
        return response.json();
    })
    .then((jsonData) => {
        jsonData.forEach(record => {
            imgList.push(record.download_url);
        });
        drawImage(imgList);
        return imgList;
    });
}
function drawImage(imgList){
    rez = '';
    imgList.forEach(imgLink =>{
        rez += `<img src="${imgLink}" height="150px">`
    });
    document.querySelector(".pictureContainer").innerHTML = rez;
}

function init(){
    if (localStorage.getItem("input1") && localStorage.getItem("input2")){
        let inputData1 = localStorage.getItem("input1");
        let inputData2 = localStorage.getItem("input2");
        const reqUrl = `https://picsum.photos/v2/list?page=${inputData1}&limit=${inputData2}`;
        getImageList(reqUrl);
    }

    document.querySelector(".clearStorrageBtn").addEventListener("click", (e) =>{
        e.preventDefault();
        localStorage.removeItem("input1");
        localStorage.removeItem("input2");
    });
    document.querySelector(".sendDataButton").addEventListener("click", (e)=>{
        e.preventDefault();
        const value1 = Number(document.querySelector(".inputData1").value);
        const value2 = Number(document.querySelector(".inputData2").value);
        if ((!value1 || !(value1 >=1 && value1 <= 10))&&(!value2 || !(value2 >=1 && value2 <= 10))){
            document.querySelector(".warrningMsgBoth").innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
            document.querySelector(".warrningMsgInput1").innerHTML = "";
            document.querySelector(".warrningMsgInput2").innerHTML = "";
        }
        else {
            if (!value1 || !(value1 >=1 && value1 <= 10)){
                document.querySelector(".warrningMsgInput1").innerHTML = "Номер страницы вне диапазона от 1 до 10";
                document.querySelector(".warrningMsgInput2").innerHTML = "";
                document.querySelector(".warrningMsgBoth").innerHTML = "";
            }
            else {
                if (!value2 || !(value2 >=1 && value2 <= 10)){
                    document.querySelector(".warrningMsgInput2").innerHTML = "Лимит вне диапазона от 1 до 10";
                    document.querySelector(".warrningMsgInput1").innerHTML = "";
                    document.querySelector(".warrningMsgBoth").innerHTML = "";
                }
                else{
                    document.querySelector(".warrningMsgInput2").innerHTML = "";
                    document.querySelector(".warrningMsgInput1").innerHTML = "";
                    document.querySelector(".warrningMsgBoth").innerHTML = "";
                    localStorage.setItem("input1", value1);
                    localStorage.setItem("input2", value2);
                    const reqUrl = `https://picsum.photos/v2/list?page=${value1}&limit=${value2}`;
                    getImageList(reqUrl);
                }
            }
        }


    });
}
init();

