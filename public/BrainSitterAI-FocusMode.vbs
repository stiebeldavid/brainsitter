' BrainSitter.ai Script - Focus Tool

' Display an informative popup with formatting
MsgBox "BrainSitter.ai is now activating." & vbNewLine & vbNewLine & _
       "You want to complete" & vbNewLine & vbNewLine & "INPUT_TASK_HERE." & vbNewLine & vbNewLine & _
       "I will help you focus! Click OK to start.", _
       vbInformation, "BrainSitter.ai - Focus Mode"

' Open the specified URL in a new window
Dim objShell
Set objShell = CreateObject("WScript.Shell")
objShell.Run "https://aistudio.google.com/live"

' Wait for the page to load (adjust as needed - 3 seconds here)
WScript.Sleep 3000

' Activate the browser window
objShell.AppActivate "Stream Realtime | Google AI Studio"

' Wait a moment for the window to gain focus
WScript.Sleep 500

' Send keystrokes
objShell.SendKeys "{TAB}"
WScript.Sleep 100
objShell.SendKeys "+{TAB}" ' Shift+Tab
WScript.Sleep 100
objShell.SendKeys "Help me focus on the task INPUT_TASK_HERE. Start by saying _I'm here to help you with your task!_ Then help me by keeping me focused on the task until it's done."
WScript.Sleep 100
objShell.SendKeys "^{ENTER}" ' Ctrl+Enter
WScript.Sleep 100
objShell.SendKeys "+{TAB}" ' Shift+Tab
WScript.Sleep 100
objShell.SendKeys "{ENTER}" ' Enter
WScript.Sleep 100
objShell.SendKeys "{ENTER}" ' Enter
WScript.Sleep 100
objShell.SendKeys "{TAB}"
WScript.Sleep 100
objShell.SendKeys "{RIGHT}"
WScript.Sleep 100
objShell.SendKeys "{TAB}"
WScript.Sleep 100
objShell.SendKeys "{ENTER}" ' Enter

' Clean up
Set objShell = Nothing

WScript.Quit
