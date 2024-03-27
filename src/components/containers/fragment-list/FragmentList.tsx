import React, { FC, useState } from 'react';

import './FragmentList.css';
import FragmentListItem, { FragmentValues } from './fragment-list-item/FragmentListItem';

interface FragmentListProps {
    items: FragmentValues[];
    onFragmentListUpdate: (value: FragmentValues[]) => void;
}

const FragmentList: FC<FragmentListProps> = (
    { items, onFragmentListUpdate }
) => {

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData('index', index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const dragIndex = parseInt(e.dataTransfer.getData('index'));
    const dragItem = items[dragIndex];
    const updatedListItems = [...items];
    updatedListItems.splice(dragIndex, 1);
    updatedListItems.splice(index, 0, dragItem);
    onFragmentListUpdate(updatedListItems);
  };

  return (
    <div className='fragment-list-box'>
      {items.map((item, index) => (
        <div
          key={item.id}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, index)}
        >
          <FragmentListItem
            id={item.id}
            content={item.content}
            onDragStart={(e) => handleDragStart(e, index)}
          />
        </div>
      ))}
    </div>
  );
};

export default FragmentList;