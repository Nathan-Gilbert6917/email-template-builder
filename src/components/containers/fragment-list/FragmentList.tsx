import React, { FC } from 'react';

import './FragmentList.css';
import FragmentListItem, { FragmentTypes, FragmentValues } from './fragment-list-item/FragmentListItem';

interface FragmentListProps {
    items: FragmentValues[];
    onFragmentEdit: (content: FragmentTypes, id:string) => void;
    onFragmentListUpdate: (value: FragmentValues[]) => void;
}

const FragmentList: FC<FragmentListProps> = (
    { items, onFragmentEdit, onFragmentListUpdate }
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

  const handleDelete = (id: string) => {
    const listItem = items.filter((item, index) => {if(item.id === id){ return index} return false});
    const updatedListItems = [...items];
    const listIndex = items.indexOf(listItem[0]);
    updatedListItems.splice(listIndex, 1);
    onFragmentListUpdate(updatedListItems);
  }

  const handleEdit = (content:FragmentTypes ,id: string) => {
    onFragmentEdit(content, id);
  }

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
            onEdit={(content, id) => handleEdit(content, id)}
            onDelete={(id) => handleDelete(id)}
          />
        </div>
      ))}
    </div>
  );
};

export default FragmentList;