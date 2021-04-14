var kilo = prompt("kilo")
var boy = prompt("metre")


function vkiHesapla(kilo, boy){
   var vki = kilo / (boy * boy) 
   if (vki < 18.5){
   return alert(`Vücut kitle indeksiniz : ${vki}, değerleriniz düşüktür`)
} else if(vki >= 18.5 && vki <= 24.5){
   return alert(`Vücut kitle indeksiniz ${vki}, değerleriniz normal`)
}  else if(vki >= 25 && vki <= 29){
    return alert(`Vücut kitle indeksiniz ${vki}, kilolusunuz`)
}   else if (vki >= 30){
   return alert(`Vücut kitle indeksiniz ${vki} fazla kilolusunuz.`)
}
}
vkiHesapla(kilo,boy);
    