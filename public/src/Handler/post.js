import { App } from '../app.js';

async function fetchPostById() {
    
    const response = await fetch ('http://localhost:3000/todos');

    const data = await response.json();

    return data;
}

export const postHandler = (event) => {

    event.preventDefault();

    const title = event.target[0].value;

    if (title === '') {
        alert('Please enter your todo')
        return;
    }

    const newApp = new App(title);

    fetchPostById().then(data=>{
        const arrayOfTitle = [];
        for (let i=0; i<data.length; i++){
            arrayOfTitle.push(data[i].todoText)
        }
        if(arrayOfTitle.indexOf(title) !== -1) {
            alert('Your todo is already exist!')
        } else {   
            newApp.fetchPost();
        }
    })
    
}