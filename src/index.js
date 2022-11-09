"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statue_1 = require("./statue");
let szobrok = [];
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    (_a = document.getElementById("gomb")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b, _c, _d;
        let nevellenorzo = /^[a-zA-Z" "]{1,}$/;
        let nev = (_a = document.getElementById('nev')) === null || _a === void 0 ? void 0 : _a.value;
        let evellenorzo = /^[1−2]?0?[0−2]?[0−2]?([0−9])?$/;
        let ev = (_b = document.getElementById('ev')) === null || _b === void 0 ? void 0 : _b.value;
        let arellenorzo = /^[1-9]{1}[0-9]*$/;
        let ar = (_c = document.getElementById('ar')) === null || _c === void 0 ? void 0 : _c.value;
        let magassagellenorzo = /^(1\d|\d{3,})$/;
        let magassag = (_d = document.getElementById('magassag')) === null || _d === void 0 ? void 0 : _d.value;
        if (!nevellenorzo.test(nev)) {
            document.getElementById('hiba').textContent = "A név nem lehet üres";
        }
        else if (!evellenorzo.test(ev)) {
            document.getElementById('hiba').textContent = "A készítés éve nem haladhatja meg a 2022-őt ";
        }
        else if (!magassagellenorzo.test(magassag)) {
            document.getElementById('hiba').textContent = "A magasság minimum 10 cm";
        }
        else if (!arellenorzo.test(ar)) {
            document.getElementById('hiba').textContent = "Az ár minimum 1 Ft";
        }
        else {
            document.getElementById('hiba').textContent = "";
            document.getElementById('nev').value = "";
            document.getElementById('ar').value = "";
            document.getElementById('magassag').value = "";
            document.getElementById('ev').value = "";
            szobrok.push(new statue_1.Statue(nev, parseInt(ev), parseInt(ar), parseInt(magassag)));
            console.log(szobrok.length);
            document.getElementById('darab').textContent = szobrok.length.toString();
            let osszar = 0;
            for (let i of szobrok) {
                osszar += i.price;
            }
            document.getElementById('osszar').textContent = osszar.toString();
        }
    });
});
