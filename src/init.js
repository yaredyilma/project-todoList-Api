'use strict';
import { deleteHandler } from "./handler/delete-handler.js";
import { postHandler } from "./handler/post-handler.js";
import { updateHandler } from "./handler/update-handler.js";
import { getItemsHandler } from "./handler/get-items-handler.js";

document.getElementById('form-form')
    .addEventListener('submit', postHandler);

document.getElementById('row')
    .addEventListener('click', deleteHandler);

document.getElementById('row')
    .addEventListener('click', updateHandler);
window.addEventListener('DOMContentLoaded', getItemsHandler);