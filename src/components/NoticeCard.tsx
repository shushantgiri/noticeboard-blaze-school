
import { cn } from "@/lib/utils";
import { Notice } from "@/types/notice";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Edit2, Star, Trash2 } from "lucide-react";
import { format } from "date-fns";

interface NoticeCardProps {
  notice: Notice;
  onEdit: () => void;
  onDelete: () => void;
  onToggleImportant: () => void;
}

export function NoticeCard({ notice, onEdit, onDelete, onToggleImportant }: NoticeCardProps) {
  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg",
      notice.important && "border-accent"
    )}>
      <CardHeader className="flex flex-row justify-between items-start space-y-0 pb-2">
        <div className="flex-1">
          <h3 className="text-lg font-bold">{notice.title}</h3>
          <p className="text-sm text-muted-foreground">
            {format(notice.timestamp, 'PPp')}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleImportant}
            className={cn(notice.important && "text-accent")}
          >
            <Star className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onEdit}
          >
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap">{notice.content}</p>
      </CardContent>
    </Card>
  );
}
