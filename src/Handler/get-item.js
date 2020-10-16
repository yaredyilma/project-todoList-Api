import { App } from '../app.js';

async function getItems() {

    const response = await fetch('http://localhost:3000/todos')
    
    const data = await response.json();

    return data;
}

export const getItemsHandler = (event) => {

    event.preventDefault();

    const newApp = new App();

    getItems().then(data =>{
        for (let i = 0; i < data.length; i++) {
            newApp.title = data[i].todoText;
            newApp.check = data[i].completed;
            newApp.render();
        }
    })
}
    