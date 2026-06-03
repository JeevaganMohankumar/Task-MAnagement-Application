import { useEffect,useState } from "react";
import axios from "axios";

function Dashboard(){

const [tasks,setTasks] = useState([]);
const [title,setTitle] = useState("");

const token =
localStorage.getItem("token");

const fetchTasks = async() => {

const res = await axios.get(
"http://localhost:5000/api/tasks",
{
headers:{
"x-auth-token":token
}
}
);

setTasks(res.data);
};

useEffect(()=>{
fetchTasks();
},[]);

const addTask = async() => {

await axios.post(
"http://localhost:5000/api/tasks",
{
title
},
{
headers:{
"x-auth-token":token
}
}
);

fetchTasks();
};

return(
<div>

<h1>Task Manager</h1>

<input
placeholder="Task Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<button onClick={addTask}>
Add Task
</button>

<ul>
{
tasks.map(task=>(
<li key={task._id}>
{task.title}
</li>
))
}
</ul>

</div>
);
}

export default Dashboard;
