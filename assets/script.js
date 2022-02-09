const tasks = document.querySelectorAll('.task');

tasks.forEach((task) => {
    const category = task.querySelector('.category_info');
    let text = category.innerText;
    if(text == "Personal") {
        category.style.backgroundColor = '#4c8fed';
    }
    else if(text == "Work") {
        category.style.backgroundColor = '#831599';
    }
    else if(text == "School") {
        category.style.backgroundColor = '#20b3a4';
    }
    else if(text == "Health") {
        category.style.backgroundColor = '#d65d24';
    }
    else if(text == "Cleaning") {
        category.style.backgroundColor = "#b00c8f";
    }
})