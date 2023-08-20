
const button = document.getElementById("btn");//targeting button
const textBox = document.getElementsByClassName("textbox")//targeting input box




//when user clicks button

document.getElementById("btn").addEventListener('click', () => {

    let parent = document.getElementById("items-table");//targeting the table body
    let newElement = document.createElement('tr');
    newElement.innerHTML = `<td>${textBox.value}</td>`;//whatever value in the input box will be applied to the tr
    parent.appendChild(newElement);//pushing newElement to the table body;



    document.getElementById("textbox").value = '';//clearing input box after submitting
});


//put input box and submit button in a form,needed to stop refresh
function deleteRefresh(event) {
    event.preventDefault();
}

/*Tried getting value added to th table instead of undefined but couldnt figure it out..
,tried changing newElement innerHTML to document.getElementById('textbox').value but didnt work*/


