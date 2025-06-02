let newCompound = document.querySelector('#new-compound');
let addCompoundBtn = document.querySelector('#add-compound-btn');
let compoundList = document.querySelector('#compound-list');

addCompoundBtn.addEventListener('click', function() {
    // Create a new compound item
    let li = document.createElement('li');
    li.textContent = newCompound.value;

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function() {
        compoundList.removeChild(li);
    });
    li.appendChild(btn);
    // Append the new compound item to the list 
    compoundList.appendChild(li);
    newCompound.value = ''; // Clear the input field after adding
    newCompound.focus(); // Focus back on the input field 
});

let newPrimary = document.querySelector('#new-primary');
let addPrimaryBtn = document.querySelector('#add-primary-btn');
let primaryList = document.querySelector('#primary-list');

addPrimaryBtn.addEventListener('click', function() {
    // Create a new compound item
    let li = document.createElement('li');
    li.textContent = newPrimary.value;

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function() {
        primaryList.removeChild(li);
    });
    li.appendChild(btn);
    // Append the new compound item to the list 
    primaryList.appendChild(li);
    newPrimary.value = ''; // Clear the input field after adding
    newPrimary.focus(); // Focus back on the input field 
});

let newSymbolic = document.querySelector('#new-symbolic');
let addSymbolicBtn = document.querySelector('#add-symbolic-btn');
let symbolicList = document.querySelector('#symbolic-list');

addSymbolicBtn.addEventListener('click', function () {
    let symbolicText = newSymbolic.value.trim();

    let ns1 = document.querySelector('#ns1').value.trim();
    let ns2 = document.querySelector('#ns2').value.trim();
    let ns3 = document.querySelector('#ns3').value.trim();
    let rule = document.querySelector('#natual-deduction-rule').value;

    if (symbolicText === '') return;

    let li = document.createElement('li');
    li.textContent = `${symbolicText} (${rule})`

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function () {
        symbolicList.removeChild(li);
    });
    li.appendChild(btn);

    symbolicList.appendChild(li);

    newSymbolic.value = '';
    document.querySelector('#ns1').value = '';
    document.querySelector('#ns2').value = '';
    document.querySelector('#ns3').value = '';
    document.querySelector('#natual-deduction-rule').selectedIndex = 0;

    newSymbolic.focus();
});

function insertAtCursor(input, symbol) {
    let start = input.selectionStart;
    let end = input.selectionEnd;
    let text = input.value;

    input.value = text.slice(0, start) + symbol + text.slice(end);
    input.selectionStart = input.selectionEnd = start + symbol.length;
    input.focus();
}

document.querySelector('#open-assumption-btn').addEventListener('click', function () {
    insertAtCursor(newSymbolic, '[[');
});
document.querySelector('#close-assumption-btn').addEventListener('click', function () {
    insertAtCursor(newSymbolic, ']]');
});
document.querySelector('#not-btn').addEventListener('click', function () {
    insertAtCursor(newSymbolic, '∼');
});
document.querySelector('#and-btn').addEventListener('click', function () {
    insertAtCursor(newSymbolic, '∧');
});
document.querySelector('#or-btn').addEventListener('click', function () {
    insertAtCursor(newSymbolic, '∨');
});
document.querySelector('#imp-btn').addEventListener('click', function () {
    insertAtCursor(newSymbolic, '→');
});
document.querySelector('#bi-imp-btn').addEventListener('click', function () {
    insertAtCursor(newSymbolic, '↔');
});