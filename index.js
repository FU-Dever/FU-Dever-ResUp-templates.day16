let isCovid = 0;
let openSignal = 0;
let checked = 0;

function Reset(){
    isCovid = 0;
    // console.log(isCovid);
    document.getElementById("hide").style.height = '56px';
    document.getElementById("check-btn").style.opacity = "1";

    document.getElementById("signal").style.top = "50%";
    setTimeout(
        ()=>{
            document.getElementById("signal").style.top = "-100px";
        },
        3000
    )
}

function Check(){
    if(checked){
        checked = 0;
    }
    else{
        checked = 1;
    }
    // hide btn
    document.getElementById("check-btn").style.opacity = "0";
    document.getElementById("check-btn").style.zIndex = "-1";


    isCovid =  Math.floor(Math.random() * 2);
    if(isCovid){
        document.getElementById("hide").style.height = '0px';
    }

    else{
        document.getElementById("hide").style.height = '30px';
        document.getElementById("hide-top").style.height = '30px';
    }

    console.log(isCovid);


    document.getElementById("signal").style.top = "50%";
    setTimeout(
        ()=>{
            document.getElementById("signal").style.top = "-100px";
            document.getElementById("check-btn").style.zIndex = "1";
            document.getElementById("hide-top").style.height = '0px';
        },
        3000
    )
}