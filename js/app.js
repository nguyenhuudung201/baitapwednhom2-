var num=1;
function previous() {
    
    var slider= new Array;
    slider[0] =[
        "images/slider1.webp",
        'images/slider1_slide2_01.png',
        'images/slider1_slide3_01.png'
    ];
    slider[1] =[
        "Swedish",
        "Luxury",
        "Designer"
    ];
    slider[2]=[
        "Design",
        "brands",
        "Watches"
    ];
    
    document.getElementById('imgs').src=slider[0][num];
    document.getElementById('text1').innerText=slider[1][num];
    document.getElementById('text2').innerText=slider[2][num];
    num++; 
    if(num==3){
        num=0;
    }
    console.log(num);
}