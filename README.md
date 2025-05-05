If you want to push an existing local folder/project to GitHub:
❌ DO NOT initialize the repo on GitHub with:
a README.md

a .gitignore

a license

Because that adds a commit to the remote repo, which creates that "unrelated histories" issue you're seeing.

OR, if you've already added README on GitHub
Just like you're doing now:

git pull origin main --allow-unrelated-histories
# then resolve and push



# Command Prompt

Run Command Prompt as Administrator (Most Common)
This gives elevated privileges required for starting services like MongoDB.

🔧 Steps:
Press Windows Key.

Type: cmd

Right-click on "Command Prompt".

Click “Run as administrator”

You’ll see “Administrator: Command Prompt” in the window title bar.

👤 Run Command Prompt as a Different User (e.g., domain user)
If you want to run it as a different user account, not just admin:

🔧 Steps:
Hold down Shift + Right-click on the cmd.exe or Command Prompt shortcut.

Click “Run as different user”

Enter the username and password for the other account.

⚠️ This only works if that user has permission on your system.


# Difference

1. Run as Administrator
Purpose: Gives the program higher permissions to access system files and settings.

Use: Needed when running commands that require admin rights (e.g., starting MongoDB).

Example: Right-click Command Prompt → Run as Administrator.

2. Run as Different User
Purpose: Lets you run the program as another user with their permissions.

Use: Needed if you want to run something as a user other than yourself.

Example: Shift + Right-click on the program → Run as different user.

In short:

Administrator = for higher system access.

Different User = for running as another user.

# Why Users Can't Access System Files:
Security: Allowing unrestricted access to system files could lead to accidental or malicious damage (e.g., deleting important files or making system changes that could break things).

Permissions: Windows (and other operating systems) use a system of permissions to control who can read, write, or modify certain files or folders.

Normal users have limited permissions to ensure they don’t make changes that can impact the whole system.

Administrator accounts have higher permissions to manage the system.

Protecting the System: Key files and folders are protected from changes by User Account Control (UAC). UAC is a security feature that prevents unauthorized applications from making changes that could harm the system.


# CRLF LF

1. LF (Line Feed, \n)
Used by: Unix, Linux, macOS (modern)

Character: \n (ASCII 10)

Example in hex: 0A

2. CRLF (Carriage Return + Line Feed, \r\n)
Used by: Windows

Characters: \r\n (CR is ASCII 13, LF is ASCII 10)

Example in hex: 0D 0A

| Platform         | Line Ending | Characters | ASCII   |
| ---------------- | ----------- | ---------- | ------- |
| Unix/Linux/macOS | LF          | `\n`       | 10      |
| Windows          | CRLF        | `\r\n`     | 13 + 10 |


warning: CRLF will be replaced by LF in <filename>. 
The file will have its original line endings in your working directory.
🔍 What This Warning Means:
Git is telling you that:

You're adding a file that uses CRLF (Windows-style) line endings.

Git is converting them to LF (Unix-style) for storing in the repository.

But your local file will remain with CRLF, depending on Git's config.

This is not an error—just a heads-up about normalization.

In Code (Node.js / JavaScript):
process.stdout.write("Hello");
process.stdout.write("\rWorld");
👆 This would print:
World
The \r returned the cursor, and World replaced Hello.

Yes — understanding how \r (carriage return) works is very useful, especially if you're:

Writing CLI (command-line interface) tools,

Creating progress indicators or live status updates,

Working with log files or text processing,

Debugging platform-specific bugs related to line endings (Windows vs Unix).

# CR

A Carriage Return (CR) is a control character that moves the cursor to the beginning of the line, without advancing to the next line.

It comes from typewriters:
"Carriage" = the mechanism that holds the paper.
"Return" = the action of moving the carriage back to the start of the line.
Pressing the "Return" key would move the carriage to the left without moving down a line.



