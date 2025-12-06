let reminders = []; // Temporary memory

const reminderList = document.getElementById('reminderList');

function displayReminders() {
    reminderList.innerHTML = '';
    reminders.forEach((reminder, index) => {
        const li = document.createElement('li');

        const infoDiv = document.createElement('div');
        infoDiv.className = 'reminder-info';
        infoDiv.innerHTML = `<strong>${reminder.text}</strong> <span class="${reminder.priority}">${reminder.priority}</span>`;
        li.appendChild(infoDiv);

        const details = document.createElement('div');
        details.innerHTML = `📅 ${reminder.date} | 🏷️ ${reminder.category}`;
        li.appendChild(details);

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => editReminder(index);
        li.appendChild(editBtn);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.onclick = () => removeReminder(index);
        li.appendChild(removeBtn);

        reminderList.appendChild(li);
    });
}

function addReminder() {
    const text = document.getElementById('reminderInput').value.trim();
    const date = document.getElementById('reminderDate').value;
    const priority = document.getElementById('reminderPriority').value;
    const category = document.getElementById('reminderCategory').value;

    if (!text || !date) {
        alert("Please enter both reminder text and date!");
        return;
    }

    reminders.push({ text, date, priority, category });
    displayReminders();

    document.getElementById('reminderInput').value = '';
    document.getElementById('reminderDate').value = '';
}

function editReminder(index) {
    const newText = prompt("Edit your reminder:", reminders[index].text);
    if (newText) {
        reminders[index].text = newText;
        displayReminders();
    }
}

function removeReminder(index) {
    reminders.splice(index, 1);
    displayReminders();
}

// Initialize
displayReminders();
