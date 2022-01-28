let yourName = "Joe Ordaz" 

let gb = 0
let cc = 0
let sugar = 0

const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`
//add button gb
const gbPlusBtn = document.querySelector('#add-gb')
gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1;
    let qtygb = document.querySelector('#qty-gb')
    qtygb.textContent = gb
    let qtyTotal = document.querySelector('#qty-total')
    qtyTotal.textContent = gb + cc + sugar
});
//minus button gb
const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function() {
    gb = gb - 1;
    if (gb < 0) {
        gb = 0
    }
    let qtygb = document.querySelector('#qty-gb')
    qtygb.textContent = gb
    let qtyTotal = document.querySelector('#qty-total')
    qtyTotal.textContent = gb + cc + sugar
});
//add cc
const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1;
    let qtycc = document.querySelector('#qty-cc')
    qtycc.textContent = cc
    let qtyTotal = document.querySelector('#qty-total')
    qtyTotal.textContent = gb + cc + sugar
});
//minus cc
const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function() {
    cc = cc - 1;
    if (cc < 0) {
        cc = 0
    }
    let qtycc = document.querySelector('#qty-cc')
    qtycc.textContent = cc
    let qtyTotal = document.querySelector('#qty-total')
    qtyTotal.textContent = gb + cc + sugar
});
//add sugar
const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1;
    let qtySugar = document.querySelector('#qty-sugar')
    qtySugar.textContent = sugar
    let qtyTotal = document.querySelector('#qty-total')
    qtyTotal.textContent = gb + cc + sugar
});
//minus sugar
const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function() {
    sugar = sugar - 1;
    if (sugar < 0) {
        sugar = 0
    }
    let qtySugar = document.querySelector('#qty-sugar')
    qtySugar.textContent = sugar
    let qtyTotal = document.querySelector('#qty-total')
    qtyTotal.textContent = gb + cc + sugar
});