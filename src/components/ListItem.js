import React from "react"

function ListItem(props){
    let strikeThrough = props.isComplete === true ? 'completedList': ''

    return (
        <div >
            <div className="row d-flex  ">
                <div className="col-6 d-flex justify-content-left" >
                    
                    <input type="checkbox" name={props.title} value={props.isComplete} checked={props.isComplete} id={props.title} onClick={props.handleOnClick}></input>
                    <label className="form-check-label" htmlFor={props.title}>
                    <h3 className={strikeThrough}>{props.title}</h3>
                    </label>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <h3 className={strikeThrough}>{props.time}</h3>
                </div>
                
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center borderBottom">

                <p className={strikeThrough}>{props.description}</p>
                </div>
            </div>
        </div>

    )
    }

    export default ListItem