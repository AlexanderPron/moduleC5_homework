function xmlToJS(xmlStr){
  const parser = new DOMParser();
  const xmlDOM = parser.parseFromString(xmlStr, "text/xml");
  const student = xmlDOM.querySelectorAll("student");
  let count = 0;
  let result =[];
  let studentList = {
    list : result
  };

  student.forEach(person =>{
    let first = xmlDOM.querySelectorAll("first")[count];
    let second = xmlDOM.querySelectorAll("second")[count];
    let age = xmlDOM.querySelectorAll("age")[count];
    let prof = xmlDOM.querySelectorAll("prof")[count];
    let lang = xmlDOM.querySelectorAll("name")[count].getAttribute("lang");
    const personData = {
      name: `${first.textContent} ${second.textContent}`,
      age: Number(age.textContent),
      prof: prof.textContent,
      lang: lang
    }
    result.push(personData);
    studentList["list"] = result;
    count += 1;
  });
  return studentList;
}

function jsonToJS(jsonStr){
  const jsObj = JSON.parse(jsonStr);
  let count = 0;
  let result =[];
  let workerList = {
    list : result
  };
  jsObj["list"].forEach(worker =>{
    const workerData = {
      name: worker.name,
      age: Number(worker.age),
      prof: worker.prof
    }
    result.push(workerData);
  });
  workerList["list"] = result;
  return workerList;
}

function init(){
  const xmlStr = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
<student>
  <name lang="ru">
    <first>Вася</first>
    <second>Василевский</second>
  </name>
  <age>22</age>
  <prof>ITшник</prof>
</student>
</list>`;

  const jsonStr = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
jsObjFromXML = xmlToJS(xmlStr);
console.log(jsObjFromXML);
jsObjFromJSON = jsonToJS(jsonStr);
console.log(jsObjFromJSON);
//==================================================
// Далее всякие проверки
//==================================================
// jsObjFromJSON["list"].forEach(user =>{
//   console.log(`${user.name} || ${user.age}`);
// })
// newJsonStr = JSON.stringify(jsObjFromJSON);
// console.log(typeof(newJsonStr));
// console.log(newJsonStr);
// console.log(jsonToJS(newJsonStr));
//==================================================
}


window.onload = init();



