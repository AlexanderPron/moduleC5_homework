function getImages(){
    console.log("Показываем картинки");
}
function init(){
    document.querySelector(".sendDataButton").addEventListener("click", (e)=>{
        e.preventDefault();
        const value = document.querySelector(".inputData").value;
        if (Number(value)){
            if (Number(value) >=1 && Number(value) <= 10){
                document.querySelector(".rezultMsg").innerHTML = "";
                getImages();
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