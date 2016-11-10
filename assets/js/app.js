

// action when button is clicked on

  document.getElementById('addItem').addEventListener('click', function () {
    var value = document.getElementById('item').value;
    if(value) addItemTodo(value);

  });

function addItemTodo (text) {
  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;

}
