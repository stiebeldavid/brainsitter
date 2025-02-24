 ' BrainSitter.ai Script - Focus Tool

 ' Display an informative popup
 MsgBox "BrainSitter.ai is now activating.  You want to complete INPUT_TASK_HERE.  I will help you focus!  ", vbInformation, "BrainSitter.ai - Focus Mode"

 ' Open the specified URL
 Dim objShell
 Set objShell = CreateObject("WScript.Shell")
 objShell.Run "https://aistudio.google.com/live"

 ' Wait for the page to load (adjust as needed -  3 seconds here)
 WScript.Sleep 3000

 ' Send keystrokes

 WScript.Sleep 100 ' Small delay

 objShell.SendKeys "{TAB}"

 WScript.Sleep 100

 objShell.SendKeys "+{TAB}" ' Shift+Tab

 WScript.Sleep 100

 objShell.SendKeys "Help me focus on the task INPUT_TASK_HERE.  Monitor my screen and keep me focused on the task until it's done."

 WScript.Sleep 100

 objShell.SendKeys "^(ENTER)" ' Ctrl+Enter

 ' Clean up
 Set objShell = Nothing

 'WScript.Echo "BrainSitter.ai script completed.  Good luck focusing!"
 WScript.Quit
