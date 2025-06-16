
import React, { useState } from 'react';
import { ViewSwitcher } from '@/components/manage/ViewSwitcher';
import { CortexSidebar } from '@/components/manage/CortexSidebar';
import { KanbanView } from '@/components/manage/views/KanbanView';
import { TableView } from '@/components/manage/views/TableView';
import { mockProjects } from '@/components/manage/cortex-data';

const ManagePage = () => {
  const [currentView, setCurrentView] = useState<'kanban' | 'table'>('kanban');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <div className="h-screen flex bg-background">
      <CortexSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Project Management</h1>
              <p className="text-muted-foreground">Manage your swipe projects and campaigns</p>
            </div>
            
            <ViewSwitcher 
              currentView={currentView} 
              onViewChange={setCurrentView} 
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden">
          {currentView === 'kanban' ? (
            <KanbanView 
              data={mockProjects}
              selectedItems={selectedItems}
              onSelectionChange={setSelectedItems}
            />
          ) : (
            <TableView 
              data={mockProjects}
              selectedItems={selectedItems}
              onSelectionChange={setSelectedItems}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagePage;
