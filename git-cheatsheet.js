// Git Cheatsheet

/* ===== NEW REPO =====


Create a folder in your desired location

	mkdir my_git_folder

Go to that folder using Change Directory command

	cd my-git-folder

Let Git know to start tracking it

	git init 


*/


/* ===== NEW FILE =====

Create a file in my_git_folder
Use git status to see that it's there

Add it to the repo

	git add my-file-name.txt

Then commit it to the repo and accompany 
it with a clarifying message

	git commit -m "type a descriptive message here"


If you make changes to the file later you can see the 
differences by using:

	git diff


If you have many files and want to add all the files that are staged,
then you can use:

	git add .

If you added AND deleted multiple files you can use:

	git --add	


*/

/* ===== CONNECT TO GITHUB =====
Create repo with same name in GitHub

	Click on + at top, then select New Repository

Connect your local repo to the GitHub Repo

	git remote add origin https://github.com/yourusername/my-git-folder


Push the work from your local folder to the Github (remote) folder	

	git push origin master
*/

/* ===== WORKING FROM OTHER USERS - FORKING =====

In GitHub, fork the repo from the other user's page
Clone it to a local folder:

	git clone https://github.com/yourusername/the-forked-folder

 The repo you forked by have changes later, to get those changes,
 establish a connection to the original (note that this one has .git at the end)

 	git remote add upstream https://github.com/theirusername/the-forked folder.git

Check to see which remote connections you have
	
		git remote -v

*/

/* ===== CREATING A BRANCH =====

Create a branch by using:

	git branch name-of-your-branch

To work on a branch, you check it out:

	git check out name-of-your-branch

Add files or make changes to your branch
To add bring the folder up to date on Github, use push:

	git push origin name-of-your-branch

*/

/* ===== PULLING =====

If a collaborator makes a change, you pull it in.
To see changes before doing a pull, use:

	git fetch --dry-run
	???not sure why git diff does not work here???

To pull:

	git pull origin name-of-your-branch


*/