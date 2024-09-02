'use strict';

let notesInput = document.querySelector('.notes-input');
let addNotesBtn = document.querySelector('.add-notes');
let stickyContainer = document.querySelector('.sticyknotes-container');

addNotesBtn.addEventListener('click', () => {
    let notesValue = notesInput.value;
    let stickyNotes = document.querySelector('.sticky-notes');
    let errorEle = document.createElement('p');

    if (!notesValue) {
        errorEle.classList.add('error-msg');
        errorEle.textContent = "Please Enter a Notes";
        stickyNotes.appendChild(errorEle);
    } else {
        let stickyList = document.createElement('div');
        let stickyPara = document.createElement('p');
        let stickyCloseBtn = document.createElement('button');

        stickyContainer.appendChild(stickyList);
        stickyList.appendChild(stickyPara);
        stickyList.appendChild(stickyCloseBtn);

        stickyList.classList.add('stickynotes-list');
        stickyPara.classList.add('stickyenterd-content');
        stickyCloseBtn.classList.add('delete-notes');

        stickyPara.textContent = notesValue;
        stickyCloseBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>`;


        stickyCloseBtn.addEventListener('click', function () {
            stickyList.remove()
        })

        notesInput.value = "";
        errorEle.remove();
    }
});