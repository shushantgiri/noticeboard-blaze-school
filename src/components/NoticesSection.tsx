
import React from 'react';
import { Notice } from '@/types/notice';
import { NoticeCard } from './NoticeCard';

interface NoticesSectionProps {
  notices: Notice[];
  onEdit: (notice: Notice) => void;
  onDelete: (id: string) => void;
  onToggleImportant: (notice: Notice) => void;
}

export function NoticesSection({ notices, onEdit, onDelete, onToggleImportant }: NoticesSectionProps) {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">School Notices</h2>
        <div className="w-20 h-1 bg-accent"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notices.map((notice) => (
          <NoticeCard
            key={notice.id}
            notice={notice}
            onEdit={() => onEdit(notice)}
            onDelete={() => onDelete(notice.id)}
            onToggleImportant={() => onToggleImportant(notice)}
          />
        ))}
        
        {notices.length === 0 && (
          <div className="col-span-full text-center py-16 bg-white rounded-lg shadow">
            <div className="text-5xl mb-4">📢</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No notices yet</h3>
            <p className="text-gray-500">School notices will appear here when posted by administrators.</p>
          </div>
        )}
      </div>
    </div>
  );
}
