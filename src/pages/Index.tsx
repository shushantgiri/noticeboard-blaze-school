
import { AddNoticeDialog } from "@/components/AddNoticeDialog";
import { EditNoticeDialog } from "@/components/EditNoticeDialog";
import { Navigation } from "@/components/Navigation";
import { NoticeCard } from "@/components/NoticeCard";
import { useNotices } from "@/context/NoticeContext";
import { Notice } from "@/types/notice";
import { useState } from "react";
import { useToast } from "../components/ui/use-toast";

export default function Index() {
  const { notices, updateNotice, deleteNotice } = useNotices();
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    deleteNotice(id);
    toast({
      title: "Notice Deleted",
      description: "The notice has been successfully deleted.",
    });
  };

  const handleEdit = (notice: Notice) => {
    setEditingNotice(notice);
  };

  const handleSaveEdit = (id: string, updatedFields: Partial<Notice>) => {
    updateNotice(id, updatedFields);
    toast({
      title: "Notice Updated",
      description: "The notice has been successfully updated.",
    });
  };

  const handleToggleImportant = (notice: Notice) => {
    updateNotice(notice.id, { important: !notice.important });
  };

  return (
    <div className="min-h-screen flex w-full">
      <Navigation />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">School Notice Board</h1>
            <AddNoticeDialog />
          </div>
          
          <div className="space-y-4">
            {notices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
                onEdit={() => handleEdit(notice)}
                onDelete={() => handleDelete(notice.id)}
                onToggleImportant={() => handleToggleImportant(notice)}
              />
            ))}
            
            {notices.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No notices yet. Click the "Add Notice" button to create one.
              </div>
            )}
          </div>
        </div>
      </main>

      {editingNotice && (
        <EditNoticeDialog
          notice={editingNotice}
          open={true}
          onOpenChange={(open) => !open && setEditingNotice(null)}
          onSave={(updates) => handleSaveEdit(editingNotice.id, updates)}
        />
      )}
    </div>
  );
}
