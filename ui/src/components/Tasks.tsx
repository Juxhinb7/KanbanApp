const Tasks = () => {
    return (
    <div id="tasks">
        
        <div className="flex-item td">
            <div className="card-title">To Do</div>
            <div className="bucket"></div>
        </div>
        <div className="flex-item ip">
            <div className="card-title">In Progress</div>
            <div className="bucket"></div>
        </div>
        <div className="flex-item d">
            <div className="card-title">Done</div>
            <div className="bucket"></div>
        </div>
    </div>
    )
    
}

export default Tasks;