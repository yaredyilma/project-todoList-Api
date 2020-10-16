import { App } from '../app.js';

async function fetchDeleteById() {
    
    const response = await fetch ('http://localhost:3000/todos');

    const data = await response.json();

    return data;
}


export const deleteHandler = (event) => {
    debugger;

    event.preventDefault();

    const title = event.target.previousElementSibling.lastElementChild.innerHTML;

    if (event.target.id !== 'remove-item') {
        return;
    }

    fetchDeleteById().then(data => {
            for (let i=0; i<data.length; i++){
                if(data[i].todoText === title) {
                    const newApp = new App(title);
                    newApp.fetchDelete(data[i].id)
                }
            }
    })
    .catch(err => console.error(err));
};

