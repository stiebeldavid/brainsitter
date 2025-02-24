
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileDown, PlayCircle, ScreenShare } from "lucide-react";

interface InstructionsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskDescription: string;
}

export const InstructionsDialog = ({
  open,
  onOpenChange,
  taskDescription
}: InstructionsDialogProps) => {
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Your BrainSitter is Ready!</DialogTitle>
          <DialogDescription>
            Let's get you focused on your task
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex items-start space-x-4">
            <div className="mt-0.5">
              <FileDown className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">1. Find your downloaded file</h4>
              <p className="text-sm text-gray-600">Look for &quot;BrainSitterAI-FocusMode.vbs&quot; in your Downloads folder</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="mt-0.5">
              <PlayCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">2. Run the BrainSitter</h4>
              <p className="text-sm text-gray-600">
                Double-click the file to start your focused work session. I'll help you stay on track with your task:
                <span className="block mt-2 font-medium text-gray-700">"{taskDescription}"</span>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="mt-0.5">
              <ScreenShare className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">3. Connect with your AI Assistant</h4>
              <p className="text-sm text-gray-600">
                The BrainSitter will automatically start a live screen share session and begin a conversation with your AI assistant to help keep you focused on your task.
              </p>
            </div>
          </div>

          <div className="bg-secondary/50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-600">
              I'll keep an eye on your activity and provide gentle reminders to help you stay focused. You can close
              me anytime by responding to the notification.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={() => onOpenChange(false)} className="bg-primary hover:bg-primary-dark">
            Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>;
};
