import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Task } from './Task'

export const Tasks = ({taskList, setTaskList}) => {
  const reorder = (taskList, startIndex, endIndex) => {
    //タスクを並べ替える
    const remove = taskList.splice(startIndex,1);
    taskList.splice(endIndex,0,remove[0]);
    setTaskList(taskList);
  }
  const handleDragEnd = (result) =>{
    //タスクを並び変える
    reorder(taskList,result.source.index,result.destination.index);

  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) =>
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {taskList.map((task, index) =>(
              <div key={task.id}>
                 <Task
                       index={index}
                       task={task}
                       taskList={taskList}
                       setTaskList={setTaskList}/>
              </div>
             ))}
             {provided.placeholder}
          </div>}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
