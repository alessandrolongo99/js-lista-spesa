const list = ['pane', 'cioccolato', 'frutta', 'acqua', 'verdure'];

let item = 0;
let i = 0;
const ul = document.getElementById('list');

while (i < list.length) {
    item = list[i];
    const li = document.createElement('li');
    li.innerHTML = item;
    
    ul.append(li);
    i++;
}