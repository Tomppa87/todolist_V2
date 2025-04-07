/*
Need to mess around with these more

import { differenceInDays } from "../node_modules/date-fns/differenceInDays";
const date = new Date();
const DueDateComparison = {
    late:0,
    mid:30,
}
let testDate = new Date(2025, 4,25);
console.log(differenceInDays(date,testDate))*/
// set up empty array to hold tasks
let taskArray = [];

// class constructor for task creator with edit methods
class Task {
    constructor(title, description, dueDate, priority, 
        listName, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.listName = listName;
        this.completed = false
        this.id = id

    }
    completeTask() {
        this.completed = true;
    }
    uncompleteTask() {
        this.completed = false;
    }
    editTask(title, description, dueDate, priority, listName) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.listName = listName;
    }    
}

function addNewTask(title, description, dueDate, priority, 
                    listName) {
    let id = generateId();
    let newTask = new Task (title, description, dueDate, priority, 
        listName, id);
    taskArray.push(newTask);    
    
};
// function to generate unique id for each task
function generateId() {
    let id;
    let idExists;
    do {
        id = Math.random().toString(36).substring(2, 9);
        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].id === id) {
                idExists = true;                
            } else {
                idExists = false;
                break;
            }
        }
     } while (idExists);     
    return id;
};
function findId(id) {
    for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].id === id) {
            console.log(i)
            return i;
        }
    }
}

function deleteTask(id) {
    taskArray.splice(findId(id), 1);
};
function completeTask(id) {
    taskArray[findId(id)].completeTask();
};
function uncompleteTask(id) {
    taskArray[findId(id)].uncompleteTask();
};

// testing phase test object. Delete later
addNewTask("testname","test description", "2025-03-25", "High", "My Tasks")

