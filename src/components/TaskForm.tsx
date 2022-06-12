import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "./TaskForm.module.css";
import { ITask } from '../interfaces/ITask';

interface Props {
  btnText: string;
	taskList:ITask[]
	setTaskList?:React.Dispatch<React.SetStateAction<ITask[]>>
	task?:ITask | null
	handleUpdate?(id: number, title: string, difficulty: number):void
};

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);
//# carrega as informações das task selecionada para a edição!
	useEffect (()=> {
		if(task) {
			setId(task.id)
			setTitle(task.title)
			setDifficulty(task.difficulty)
		}

	},[task])

 const addTaskHandler = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();

if(handleUpdate) {
	console.log("Atualizando!!");
	handleUpdate(id,title, difficulty)
	return
} 
 
{	const id = Math.floor(Math.random()*1000);
	const newTask:ITask ={id, title, difficulty}
	setTaskList!([...taskList,newTask]); //# ! para objetos que podem ser nulos argumento opcional
	setTitle("")
	setDifficulty(0);
	console.log(newTask);
}


	
		
		
	};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") setTitle(e.target.value);
    else setDifficulty(parseInt(e.target.value));
    console.log(title);
    console.log(difficulty);
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
					value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
					onChange={handleChange}
					value={difficulty}
        />
      </div>
      <input type="submit" value={btnText}  />
    </form>
  );
};

export default TaskForm;
