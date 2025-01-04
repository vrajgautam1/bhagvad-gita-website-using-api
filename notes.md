What is a Query Parameter?

It’s the part of the URL after the ?, like this:
chapter.html?chapter=1

Here, chapter=1 tells chapter.html to load Chapter 1.

Code Changes in index.html
We update the href of the "View Chapter" button so that it includes the chapter number:

html
Copy code
<a href="chapter.html?chapter=${chapterObj.chapter_number}" class="btn btn-primary btn-sm">

${chapterObj.chapter_number} dynamically adds the current chapter’s number to the URL.
Example: If it’s Chapter 2, the URL will be chapter.html?chapter=2.

const params = new URLSearchParams(window.location.search);
const chapterNumber = params.get("chapter");

// Fetch chapter data based on the chapter number

//so all this bhejamari is to just get the "number" that is passed in 
//href = chapter.html?chapter=${chapterObj.chapter_number}

//now that api gives an entire array. so we want only 1 object out of it. but which?
//that is the one which matches the chapter number. so how do we find it?
//we do it using find method in the array