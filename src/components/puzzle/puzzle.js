import React, { useState } from "react";
import "./puzzle.scss";
import { puzzleData2copy } from "./puzzleData";
import { puzzleData2 } from "./puzzleData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Puzzle = ({ solved, setSolved }) => {
  const [pieces, setPieces] = useState(puzzleData2);
  const oriItems = Array.from(puzzleData2copy);
  const [count, setCount] = useState(0);
  let count2 = 0;
  const handleOnDragEnd = (result) => {
    console.log(result);
    const items = Array.from(pieces);
    console.log("items", JSON.stringify(items));
    console.log("final items", JSON.stringify(oriItems));

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPieces(items);

    if (JSON.stringify(items) === JSON.stringify(oriItems)) {
      count2++;
    }
    console.log("count2", count2);
    if (count2 > 0) setSolved(true);
  };

  return (
    <>
      <h1 className="heading">I've got a puzzle for you</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="pieces">
          {(provided) => (
            <div
              className="puzzle"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {pieces.map(({ img, id }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <img
                        className="piece"
                        src={img}
                        alt={img}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      />
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Puzzle;
