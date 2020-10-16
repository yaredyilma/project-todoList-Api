import { App } from '../app.js';

async function fetchUpdateById() {
    
    const response = await fetch ('http://localhost:3000/todos');

    const data = await response.json();

    return data;
}

export const updateHandler = (event) => {

    
    console.log(event)
    if (event.target.id !== 'checkbox') {
        return;
    } else {

    const title = event.target.nextElementSibling.innerHTML;
    
    fetchUpdateById().then(data =>{
        for (let i=0; i<data.length; i++){
            if(data[i].todoText === title) {
                const newApp = new App(title);
                if (event.target.checked) {
                    newApp.check = false;
                } else {
                    newApp.check = true;
                }
                newApp.fetchUpdate(data[i].id);
            }
        }
    })
    .catch(err => console.error(err));
  }
}