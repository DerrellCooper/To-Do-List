import React from "react";
import ListItem from "./ListItem";
// import Data from './ToDoData'

import AddItemForm from "./AddItemForm";
// MAIN FUNCTION
function ToDo(){
    return (
        <div className="row">
            <ListHeader/>

        </div>
    )
}

// SUB FUNCTIONS
function ListHeader(){ 
    
    // State (taskData) and functions to change the state
    const [taskData, setTaskData] = React.useState([''])

    const[formData, setFormData] = React.useState({
        title: '',
        // date:'',
        time: '',
        description: '',
        isComplete: false,
        showTask: true
    })
    
    function submitData(event){
        event.preventDefault()
        if (taskData[0] === ''){
            setTaskData([formData])
        } else {
            setTaskData(prevTaskData => [...prevTaskData , formData])
        }//end else if
        
        setFormData({
            title: '',
            // date:'',
            time: '',
            description: '',
            isComplete: false
        })
        console.log(taskData)
        // event.target.reset()
    }
    console.log(formData)
    
    // State (formData) and functions to change the state
    
    function handleOnChange(){
        setFormData(prevFormData => {
            if(event.target.name === 'taskName'){
                return {
                    ...prevFormData,
                    title: event.target.value
                }
            } else if(event.target.name === 'time'){
                return {
                    ...prevFormData,
                    time: event.target.value
                }
            } else if(event.target.name === 'description'){
                return {
                    ...prevFormData,
                    description: event.target.value
                }
            }
        })
        
    }
    function onClick(event){
        console.log('clicked')
        const {name, type, value, checked } = event.target
        console.log(taskData)
        console.log(name)
        setTaskData(prevTaskData => prevTaskData.map(
            (currentItem) => {
                if (currentItem.title === name) {
                    return{
                        ...currentItem,
                        isComplete: checked
                        
                    }
                }
                return currentItem
            }
        ))
            
                
                
            

    }
    
    return(
        <div className="">
            <div className="row">
                <div className="col-4 d-flex justify-content-center section">
                    <h1>My To-Do List</h1>
                </div>
                <div className="col-4 d-flex">
                </div>
                <div className="col-4 d-flex justify-content-center section">
                    <h1>Completed Tasks</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-4 section overflow-auto list">
                    {taskData[0] === '' ? <h3>Add A Task</h3> : <TaskSection data={taskData} handleOnClick={onClick}/>}
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    {/* <h1>form here</h1> */}
                    <AddItemForm data={taskData} handleSubmit={submitData}
                        formData={formData} handleOnChange={handleOnChange}/>

                </div>
                <div className="col-4 d-flex overflow-auto list-2   ">
                    <div className="row p-2 justify-content-start">
                        {taskData[0] === '' ? <h3>Completed tasks will appear here.</h3> : <CompletedSection data={taskData} handleOnClick={onClick} />}
                    </div>
                    <div className="row rrrmt-auto p-2 justify-content-end">
                        <button className="btn btn-primary">Clear Completed</button>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

function TaskSection(taskProps){
    console.log(taskProps.data);
    const allTasks = taskProps.data.map(
        (currentTask) => {
            
            if (currentTask.isComplete === false && currentTask.showTask === true) {
                
                
                return <ListItem title = {currentTask.title}
                time = {currentTask.time}
                description = {currentTask.description}
                handleOnClick = {taskProps.handleOnClick}
                //  isVisible = {currentTask.isComplete == false ? 'show' : 'hide'}
                isComplete = {currentTask.isComplete}
                />
            }
        })
        
        
        return (
            <div>
            {allTasks}
            </div>
        )
}
function CompletedSection(taskProps){
    console.log(taskProps.data);
    
    const allTasks = taskProps.data.map(
        (currentTask) => {
            

        if (currentTask.isComplete === true) {
            return <ListItem title = {currentTask.title}
            time = {currentTask.time}
            description = {currentTask.description}
            handleOnClick = {taskProps.handleOnClick}
            //  isVisible = {currentTask.isComplete == true ? 'show' : 'hide'}
            isComplete = {currentTask.isComplete}
            />
        }
        })
        
        
        return (
            <div>
                {allTasks}

                <div className="row d-flex align-items-end justify-content-end">
                </div>
            </div>
        )
}





export default ToDo