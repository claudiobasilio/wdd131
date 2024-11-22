const input = document.querySelector("#favchap"); 
const button = document.querySelector("button");
const list = document.querySelector("#list");
const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value;

deleteButton.textContent = 'X';

li.append(deleteButton);

list.append(li);

button.addEventListener('click', function () {
    if (input.value.trim() !== '') { 
        const li = document.createElement('li');
        li.textContent = input.value; 

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';
        input.focus(li);
    } else { 
        alert('Please enter a book and chapter!');
        input.focus();  
    }

});





