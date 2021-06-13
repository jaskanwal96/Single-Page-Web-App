class List {
    constructor(title, isChecked) {
        this.title = title;
        this.isChecked = isChecked;
    }
}

class UI {
    static displayList() {
        const list = [
            {
                title: 'Do this task',
                isChecked: true
            },
            {
                title: 'Do that task',
                isChecked: false
            },
            {
                title: 'Do all tasks',
                isChecked: false
            },
        ]

        list.forEach(item => UI.addListToUI(item));
    }

    static clearFields() {
        document.querySelector('#title').value = '';
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#todo-form');
        container.insertBefore(div, form);
    
        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
      }

    static addListToUI(item) {
        const todoList = document.getElementById('todo');
        const row = document.createElement('tr');
        let innerHtml = '<td>';
        if(item.isChecked) {
            innerHtml += '<del>';
        }
        innerHtml += item.title;
        if(item.isChecked) {
            innerHtml += '</del>';
        }
        innerHtml += '</td>';
        innerHtml += '<td><a href="#" class="btn btn-danger btn-sm delete"></a></td>';
        console.log(innerHtml);
        row.innerHTML = innerHtml;
        todoList.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', UI.displayList);

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
  
    // Get form values
    const title = document.querySelector('#item').value;
    
    // Validate
    if(title === '') {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
      // Instatiate book
      const todo = new List(title, false);
  
      // Add Book to UI
      UI.addListToUI(todo);
  
      // Show success message
      UI.showAlert('Book Added', 'success');
  
      // Clear fields
      UI.clearFields();
    }
  });