export class App {

    constructor(title){
        this.title = title,
        this.check = false
    }

    fetchPost(){
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            body: JSON.stringify({
                todoText: this.title,
                completed: this.check 
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((response) => response.json())
        .then((json) => console.log(json)) 
    }

    fetchUpdate(id){
        fetch('http://localhost:3000/todos/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                todoText: this.title,
                completed: this.check 
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((response) => response.json())
        .then((json) => console.log(json)) 
    }

    fetchDelete(id){
        fetch('http://localhost:3000/todos/' + id, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
    }

    render() {
        const ulEl = document.createElement('ul');
        ulEl.className = 'ul-item';

        const divEl = document.createElement('div');
        divEl.className = 'div-item';
        const inputEl = document.createElement('input');
        inputEl.type = 'checkbox';
        inputEl.id = 'checkbox';
        const liEl = document.createElement('li');
        liEl.className = 'item-text';
        liEl.innerHTML = this.title;
        if(this.check){
            liEl.style.textDecorationLine = 'line-through';
            inputEl.checked = true;
        } else {
            liEl.style.textDecorationLine = 'none';
            inputEl.checked = false;
        }
        divEl.appendChild(inputEl);
        divEl.appendChild(liEl);

        const buttonEl = document.createElement('button');
        buttonEl.id = 'remove-item';
        buttonEl.innerHTML = '❌';

        ulEl.appendChild(divEl);
        ulEl.appendChild(buttonEl);

        return document.getElementById('row').appendChild(ulEl);
    }                
    
}