import React, { FC, useState } from 'react';

import './FragmentList.css';
import FragmentListItem, { FragmentValues } from './fragment-list-item/FragmentListItem';

interface FragmentListProps {
    items: FragmentValues[];
}

const FragmentList: FC<FragmentListProps> = (
    { items }
) => {
    const [listItems, setListItems] = useState<FragmentValues[]>(items);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData('index', index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const dragIndex = parseInt(e.dataTransfer.getData('index'));
    const dragItem = listItems[dragIndex];
    const updatedListItems = [...listItems];
    updatedListItems.splice(dragIndex, 1);
    updatedListItems.splice(index, 0, dragItem);
    setListItems(updatedListItems);
  };

  return (
    <div className='fragment-list-box'>
      {listItems.map((item, index) => (
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