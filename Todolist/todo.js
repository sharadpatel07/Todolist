const sbtBtn = document.querySelector('#custemSubmit');
sbtBtn.addEventListener("click" , function sbtBtn(){
    const name = document.querySelector('#name');
    localStorage.setItem('Name' , name.value);
    document.getElementById('line1').innerHTML=name.value;


    const comment = document.querySelector('#comment');
    const comment2 = document.getElementById('line9');
    localStorage.setItem('comment' , comment.value);
    document.getElementById('line10').innerHTML=comment.value;


    let a = document.getElementsByName('gender');

    for (let i = 0; i < a.length; i++) {
        if(a[i].checked){
            document.getElementById('line4').innerHTML=a[i].value;
            localStorage.setItem('gender', a[i].value);
        }

    }
})


function toggleBtn(){

    let b = document.getElementsByName('checkbox');

    for (let i = 0; i < b.length; i++) {
        if(b[i].checked){
            document.getElementById('line7').innerHTML=b[i].value;
            localStorage.setItem('hobby' , b[i].value);
        }

    }

}

    let local = [
        localStorage.getItem('Name'),
        localStorage.getItem('gender'),
        localStorage.getItem('hobby'),
        localStorage.getItem('comment'),
    ]

if (line1 == '') {

      document.getElementById("line1").innerHTML=local[0];
}else if (line1 !== ''){
   A=  document.getElementById('line0').innerHTML=local[0];

}

if (line4 == '') {
      document.getElementById('line4').innerHTML=local[1];
      close;
}else if (line4 !== ''){
   B= document.getElementById('line3').innerHTML=local[1];
   close;
}


if (line7 == '') {
    document.getElementById('line7').innerHTML=local[2];
    close;
}else if (line7 !== ''){
   C=  document.getElementById('line6').innerHTML=local[2];
   close;
}


if (line10 == '') {

      document.getElementById("line10").innerHTML=local[3];
      stop ;
} else if (line10 !== ''){
   D=  document.getElementById('line9').innerHTML=local[3];
   close;
}


const MyJson = {"NAME" : `${A}` , "GENDER" : `${B}` , "HOBBY" : `${C}` , "COMMENT" : `${D}` };
const newJson = JSON.stringify(MyJson);
localStorage.setItem("json" , newJson);
console.log(MyJson);

const Json = JSON.parse(newJson);
console.log(Json);

let _01 = Json.NAME;
localStorage.setItem('name2' , _01);

let _02 = Json.GENDER;
localStorage.setItem('gender2' , _02);

let _03 = Json.HOBBY;
localStorage.setItem('hobby2' , _03);

let _04 = Json.COMMENT;
localStorage.setItem('comment2' , _04);

let array = [

    localStorage.getItem('name2'),
    localStorage.getItem('gender2'),
    localStorage.getItem('hobby2') ,
    localStorage.getItem('comment2'),  ]


console.log(array);

document.getElementById('line0').innerHTML=array[0];
document.getElementById('line3').innerHTML=array[1];
document.getElementById('line6').innerHTML=array[2];
document.getElementById('line9').innerHTML=array[3];

function CleBtn() {
    localStorage.clear()
}

