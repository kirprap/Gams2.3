# [GAMS 2-3](https://gams2-3.vercel.app "A game website by Archit Pathak")

Gams is an open sourced unblocked game website full of flash, webports, emulator and many more types of games! (Inspired by https://github.com/Gams-Offline/Gams)

--------------------------------------------------------------------------------------------------------------
# PATCHNOTES <font size="2" color="light-grey">latest update by Mani</font>
### Optimizations
- Less files (2900+ files to 2116 files)
    
- Removed 200+ "fake" games
    
- Optimized game loading
### Features
- Secret method to access games to make it look like a calculator (√-1), if you want to access games directly, use secret.html instead of index.html
    
- Alerts when new gams version is realeased 
    (not automatic to make secret mode more secret, press shift+u to check for updates)
    
- opens up google classroom when "`" is pressed
### For the coders (if there are any)
1. Gams has been updated to use Iframes to open the website from the calculator
2. Effectively **cut in *half*** the amount of game files by removing the copy of them with gams UI
    - There is now a linux file (export_games.sh) that deletes legacy game files and creates a games.js
3. The update method works by using the version at the top of .version, which stores a release tag, secret.js has it's own variable (`RELEASE_TAG`) . It then checks github for any newer release tags in .version, then asks if the user wants to download the new update.
    - <font color = "bright-red">IMPORTANT: UPDATE REALEASE TAG VARIABLE AND VALUE IN .version FILE WHEN GAMS IS UPDATED</font>
