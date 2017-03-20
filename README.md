# Insert Images ![alt text](https://github.com/connorcarolan/Insert-Images/blob/master/Insert%20Images%20logo.png)
Google Docs add-on to bulk insert images.
[View in the web store](https://chrome.google.com/webstore/detail/insert-images/cfilpjidehppbipndahohkaaahjemfoc?utm_source=permalink)

** I have provided the code for the option 2x2, in the published version there are more options with very similar code (adjusted for size).**

## The focus of this add-on:
This add-on was created for educators, many schools are investing their IT budget into Chromebooks and Google's suite. For educators this can also require them to move away from a Windows laptop. On windows OS you can easily select multiple images and print them all in a grid style. This add-on fills a big gap left on Google Drive, the inability to print images without opening each individually or inserting them each into a Google Doc.

## Getting Started:
1. Create a new Google Doc
2. Tools > Script Editor
3. Add each piece of code
4. Run to authorise, you're ready!

## Code breakdown:

### Code.gs:
1. Required functions(onOpen, onInstall)

2. Open HTML file picker.

3. oAuth Token, gain authorisation to users selected folder.

## Picker2x2.html:
1. Let the user select a file using Google file picker.

2. With success run countFilesInFolder2x2, passing the selected fodler ID.

## 2x2.gs:
Adding soon...



![alt text](https://github.com/connorcarolan/Insert-Images/blob/master/Insert%20Images%20promo%20Medium(920x680).png)
