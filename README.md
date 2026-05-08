# [GAMS 2-3](https://gams2-3.vercel.app "A game website by Archit Pathak")

Gams is an open sourced unblocked game website full of flash, webports, emulator and many more types of games! (Inspired by https://github.com/Gams-Offline/Gams)

--------------------------------------------------------------------------------------------------------------
# PATCHNOTES(Update 2.3.2) <font size="2" color="light-grey">latest update by Mani</font>
### Features
- The secret method to access games is now the time. Note that this uses military time (24-hour format) (e.g 2:00pm means the code is '14.00', and 10:35am is '10.35')
- Added back games that were wrongly removed last update(***835 games***)
- [EXPERIMENTAL]opens up google classroom when "`" is pressed
- [EXPERIMENTAL]**Removed** shift+u for checking for updates, it is now auto-checking for updates every 5 minutes, however to keep the secret files secret, you must be in the games page
### For the coders (if there are any)
1. The update method works by using the version at the top of .version, which stores a release tag, secret.js has it's own variable (`RELEASE_TAG`) . It then checks github for any newer release tags in .version, then asks if the user wants to download the new update. If they do it opens to the github repository page.
    - <font color = "bright-red">**IMPORTANT: UPDATE RELEASE TAG VARIABLE AND VALUE IN .version FILE WHEN GAMS IS UPDATED**</font>
2. The game files that were removed last update was due to abbreviations used in the game names (e.g. 'Five Nights at Freddys.html' became associated with 'fnaf.png') due to this, the .sh file that generates the game list ignored them, though they were never removed from the repository.
    - To fix this, I created a new program that looks for unused game files and image files, then matched them up manually.
    - I then created a new program that sorts games.js for readability.
3. **If you are adding a new game(s), I do NOT recommend:**
    - having *diffrent* file names in the html and image files
    - creating a program that generates the game list (*unless you are adding a large number of games*)
