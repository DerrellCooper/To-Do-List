import React from "react";

function AddItemForm(formProps){


    


    // console.log(formData.title)
    // console.log(formData.time)
    // console.log(formData.description)
    // console.log(formData.isComplete)
    
    console.log(formProps.formData.title)
    

    
    return(
        <div>
            <div className="row">
                <h1>Add New Task</h1>
            </div>
            <form id="addTaskForm" action="action_page.php">
                <div className="row form-group">
                    <label htmlFor="taskName">Task Name</label>
                    <input type="text" id='taskName' name="taskName" value={formProps.formData.title} onChange={formProps.handleOnChange}/>
                </div>
                <div className="row form-group">
                    {/* <label htmlFor="date"></label>
                    <input type="date" name="date" id="date" onChange={formProps.handleOnChange}/> */}
                    <label htmlFor="time">Task Time</label>
                    <input type="time" id="time" name="time" value={formProps.formData.time} onChange={formProps.handleOnChange}/>
                </div>
                <div className="row form-group">
                    <label htmlFor="description">Task Description</label>
                    <textarea id="description" name="description" value={formProps.formData.description} onChange={formProps.handleOnChange}/>
                </div>
                <div className="row">
                    <button type="submit" className="btn btn-primary" onClick={formProps.handleSubmit}>Add Item</button>
                </div>
            </form>
        </div>
        
    )
}

export default AddItemForm

