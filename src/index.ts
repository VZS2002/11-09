import {Artwork} from "./artwork";
import {Statue} from "./statue";
let szobrok : Artwork[]=[];
document.addEventListener("DOMContentLoaded", ()=> {

    document.getElementById("gomb")?.addEventListener("click", ()=>{


            let nevellenorzo = /^[a-zA-Z" "]{1,}$/
            let nev : string= (document.getElementById('nev') as HTMLInputElement)?.value;

            let evellenorzo = /^[1−2]?0?[0−2]?[0−2]?([0−9])?$/
            let ev : string= (document.getElementById('ev') as HTMLInputElement)?.value;
            
            let arellenorzo = /^[1-9]{1}[0-9]*$/
            let ar : string= (document.getElementById('ar') as HTMLInputElement)?.value;

            let magassagellenorzo = /^(1\d|\d{3,})$/
            let magassag : string= (document.getElementById('magassag') as HTMLInputElement)?.value;
           
            
            if (!nevellenorzo.test(nev)){
               (document.getElementById('hiba') as HTMLParagraphElement).textContent = "A név nem lehet üres"
            }
            else if (!evellenorzo.test(ev))
            {
                (document.getElementById('hiba') as HTMLParagraphElement).textContent = "A készítés éve nem haladhatja meg a 2022-őt "
                
            }
         
            else if (!magassagellenorzo.test(magassag))
            {
                (document.getElementById('hiba') as HTMLParagraphElement).textContent = "A magasság minimum 10 cm"
            }   
            else if (!arellenorzo.test(ar))
            {
                (document.getElementById('hiba') as HTMLParagraphElement).textContent = "Az ár minimum 1 Ft"
            }
            else {
                (document.getElementById('hiba') as HTMLParagraphElement).textContent = "";
                (document.getElementById('nev') as HTMLInputElement).value = "";
                (document.getElementById('ar') as HTMLInputElement).value = "";
                (document.getElementById('magassag') as HTMLInputElement).value = "";
                (document.getElementById('ev') as HTMLInputElement).value = "";

                szobrok.push(new Statue(nev,parseInt(ev),parseInt(ar),parseInt(magassag)));
                
                console.log(szobrok.length);

              
                (document.getElementById('darab') as HTMLParagraphElement).textContent=szobrok.length.toString();
                let osszar =0;
                for (let i of szobrok) {
                     osszar+= i.price;
             
                        }

                (document.getElementById('osszar') as HTMLParagraphElement).textContent=osszar.toString();
            }



    });
});
