import React, { useState } from 'react'
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () =>  {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Meet',
        day: 'Feb 4th 2PM',
        reminder: true
    },
    {
        id:2,
        text: 'React Learn',
        day: 'Feb 7th 2AM',
        reminder: true
    },
    {
        id: 3,
        text: 'Business ',
        day: 'Feb 48th 9AM',
        reminder: false
    },
  ])

  // Add Task
  const addTask = (task)=> {
      const id = Math.floor(Math.random()* 10000)+ 1
      const newTask = { id, ...task }
      setTasks([...tasks, newTask])
    }

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id) )
}

// Toggle Reminder
const toggleReminder = (id) => {
   setTasks(tasks.map((task) => task.id=== id ? {
     ...task, reminder: !task.reminder} : task
   ))
}

  return (

    <div className='container'>

     <Header onAdd={  () => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    { showAddTask && <AddTask onAdd={addTask}/>}

     {tasks.length > 0 ?
     (    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> )
     
     :('No tasks to show')

}
    </div>

  )
}

export default App;


