'use client'
import React, { useState } from 'react';
import { fileExplorerData } from '@/lib/data/fileExplorer';

export const FileExplorer = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (id: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div>
      {fileExplorerData.map((node) => (
        <div key={node.id} className='flex flex-col'>
          <div className='flex items-center gap-2'>
            {node.children ? (
              <button onClick={() => toggleNode(node.id)} className='w-4 h-4 flex items-center justify-center'>
                {expandedNodes.has(node.id) ? '▼' : '▶'}
              </button>
            ) : (
              <div className='w-4 h-4 bg-gray-300 rounded-full'></div>
            )}
            <div className='text-sm font-medium'>{node.name}</div>
          </div>
          {node.children && expandedNodes.has(node.id) && (
            <div className='pl-4'>
              {node.children.map((child) => (
                <div key={child.id} className='flex items-center gap-2'>
                  <div className='w-4 h-4 bg-gray-300 rounded-full'></div>
                  <div className='text-sm font-medium'>{child.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
