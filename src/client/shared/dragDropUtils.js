import * as React from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export const DropZone = (props) => (
  <Droppable droppableId={props.id} isDropDisabled={props.disabled}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        style={{
          minHeight: '1.5rem',
          backgroundColor: snapshot.isDraggingOver
            ? 'rgba(149, 255, 149, 0.7)'
            : 'rgba(0, 0, 0, 0)'
        }}
      >
        {props.children}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

DropZone.PropTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
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


