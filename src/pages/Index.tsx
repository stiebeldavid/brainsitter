
import { useState } from "react";
import { Mic, Download, Brain, Computer, Apple } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [task, setTask] = useState("");
  const [selectedOS, setSelectedOS] = useState("windows");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task) {
      toast.error("Please describe your task first");
      return;
    }
    
    // Create and download .vbs file
    const vbsContent = `MsgBox "Starting task: ${task}"\n`;
    const blob = new Blob([vbsContent], { type: "application/x-vbs" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "brainsitter-task.vbs";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    toast.success("Your BrainSitter is ready! The file has been downloaded.");
  };

  const examples = [
    "Pay my water bill",
    "Reply to client email",
    "Organize my weekly tasks"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <Brain className="w-8 h-8 md:w-10 md:h-10" />
            BrainSitter.ai
          </h1>
          <p className="text-xl text-gray-600">Your AI Focus Companion</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Ready to stay focused?
              </h2>
              <p className="text-gray-600 mb-4">
                Tell me what you need to accomplish, and I'll help you stay on track.
              </p>
              
              <div className="relative">
                <textarea
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="What would you like to accomplish today?"
                  className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  maxLength={500}
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-2 text-sm text-gray-400">
                  <span>{task.length}/500</span>
                  <Mic className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-gray-700">Examples:</p>
              <div className="space-y-2">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setTask(example)}
                    className="block w-full text-left px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-gray-600 hover:text-gray-900"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-medium text-gray-700">Select your operating system:</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="os"
                    value="windows"
                    checked={selectedOS === "windows"}
                    onChange={(e) => setSelectedOS(e.target.value)}
                    className="w-4 h-4 text-primary"
                  />
                  <Computer className="w-5 h-5" />
                  <span>Windows/PC</span>
                </label>
                <label className="flex items-center gap-2 cursor-not-allowed opacity-60">
                  <input
                    type="radio"
                    name="os"
                    value="apple"
                    disabled
                    className="w-4 h-4"
                  />
                  <Apple className="w-5 h-5" />
                  <span>Apple (Coming Soon)</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Start Now
            </button>
          </form>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why BrainSitter.ai?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Stay Focused</h3>
              <p className="text-gray-600">
                Get gentle nudges to keep you on track when your mind starts to wander
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Boost Productivity</h3>
              <p className="text-gray-600">
                Complete tasks more efficiently with an AI companion watching over you
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Reduce Stress</h3>
              <p className="text-gray-600">
                Let go of the anxiety of self-monitoring and focus on what matters
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center animate-fade-in">
          <button
            onClick={() => toast.success("We'll notify you when Apple support is available!")}
            className="text-primary hover:text-primary-dark underline text-sm"
          >
            Sign up for Apple access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
