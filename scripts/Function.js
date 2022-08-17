    let buttonHesapla= document.getElementById('button_hesapla');
    let s1=document.getElementById('S1');
    let s2=document.getElementById('S2');
    let s3=document.getElementById('S3');
buttonHesapla.onclick= function AddNumbers (e){
    let s1=document.getElementById('S1');
    let s2=document.getElementById('S2');
    let s3=document.getElementById('S3');
    let toplam= parseInt(s1.value)+parseInt(s2.value)+parseInt(s3.value);
    alert(toplam)
    console.log(`${s1.value}${s2.value}${s3.value}`);
   
}
   
     
    
    
    
    

    
    








