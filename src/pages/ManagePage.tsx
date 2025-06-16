
import React, { useState } from 'react';
import ViewSwitcher from '@/components/manage/ViewSwitcher';
import CortexSidebar from '@/components/manage/CortexSidebar';
import KanbanView from '@/components/manage/views/KanbanView';
import TableView from '@/components/manage/views/TableView';
import { mockProjects } from '@/components/manage/cortex-data';

const ManagePage = () => {
  const [currentView, setCurrentView] = useState<'kanban' | 'table'>('kanban');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('private');
  const [selectedItemId, setSelectedItemId] = useState<string | null>('overview');

  const handleCortexSelect = (categoryId: string, itemId: string | null) => {
    setSelectedCategoryId(categoryId);
    setSelectedItemId(itemId);
  };

  return (
    <div className="h-screen flex bg-background">
      <CortexSidebar 
        onCortexSelect={handleCortexSelect}
        selectedCategoryId={selectedCategoryId}
        selectedItemId={selectedItemId}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Project Management</h1>
              <p className="text-muted-foreground">Manage your swipe projects and campaigns</p>
            </div>
            
            <ViewSwitcher 
              activeView={currentView as 'table' | 'grid' | 'list' | 'kanban'} 
              onViewChange={(view) => setCurrentView(view as 'kanban' | 'table')} 
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden">
          {currentView === 'kanban' ? (
            <KanbanView 
              items={mockProjects}
            />
          ) : (
            <TableView 
              items={mockProjects}
              selectedItems={selectedItems}
              onSelectItem={(id) => {
                setSelectedItems(prev => 
                  prev.includes(id) 
                    ? prev.filter(item => item !== id)
                    : [...prev, id]
                );
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagePage;
