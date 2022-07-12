
/**
 * function to select dom element
 */
function selectDomElement(query){
    return document.querySelector(query);
}

//select the form
const form = selectDomElement('#form');

/**
 * show error message if data is invalid or success message if it valid 
 */
function feedBackMsg(textMsg, backgndColor){
    const feedbackMsg = selectDomElement('.msg');
    feedbackMsg.style.backgroundColor = backgndColor;
    feedbackMsg.innerText = textMsg; 
    feedbackMsg.style.visibility = 'visible';
    setTimeout(() => {
        feedbackMsg.style.visibility = 'hidden';
    },2500)
}
/**
 * validate form data entries
 */
function checkFormEntries(event){
    const width = selectDomElement('.width').value.trim();
    const height = selectDomElement('.height').value.trim();
    const photo = selectDomElement('#avatar').value.split('.').pop();
    const extensions = ["jpg", "jpeg", "png"];
    if(!photo || !width || !height) {
        feedBackMsg('kindly fill all fields', 'rgb(128, 0, 0)')
        event.preventDefault();
    }
    else if(!extensions.includes(photo)){
        feedBackMsg('File type not accepted', 'rgb(128, 0, 0)');
        event.preventDefault();
    }
    else return true;
}

/**
 * send data to the server
 */
async function postFormEntries(data){
    try {
        await fetch('/upload', {
            method: 'POST',
            body: data
        }); 
    } catch (error) {
        console.log(error);
    }
    
}


/**
 * collect form data and pass it to postFormEntries function 
 */
async function submitHandler(e){
    const passed = checkFormEntries(e);
    if(passed){
        try {
            const newData = new FormData(form);
            await postFormEntries(newData) 
        } catch (error) {
            throw error
        }  
    }
}
/**
 * listen to submitHandlermit event on the form
 */
form.addEventListener('submit', submitHandler)