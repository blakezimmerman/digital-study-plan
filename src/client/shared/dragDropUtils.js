import * as React from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export const DropZone = (props) => (
  <Droppable droppableId={props.id}>
    {(provided, snapshot) => (
      <div ref={provided.innerRef}>
        {props.children}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

DropZone.PropTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element
};

export const DragItem = (props) => (
  <Draggable draggableId={props.id}>
    {(provided, snapshot) => (
      <div>
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          style={provided.draggableStyle}
        >
          {props.children}
        </div>
        {provided.placeholder}
      </div>
    )}
  </Draggable>
);

DragItem.PropTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element
};


