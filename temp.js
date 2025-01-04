
    let verseContainer = document.getElementById("verseContainer");
    let chapterContainer = document.getElementById('chapterContainer');
    let urlParam = new URLSearchParams(window.location.search);
    let chapterNumber = urlParam.get('chapter');
    console.log(chapterNumber);

    // Function to fetch and display the chapter and its verses
    async function loadChapter() {
        const response = await fetch('https://vedicscriptures.github.io/chapters');
        const data = await response.json();
        
        let chapter = data.find((ch) => ch.chapter_number == chapterNumber);
        if (chapter) {
            chapterContainer.innerHTML = `<div class="container">
                <h1>${chapter.chapter_number} - ${chapter.name}</h1>
                <h3>${chapter.translation}</h3>
                <p><strong>Verses:</strong> ${chapter.verses_count}</p>
                <p class="meaningText">${chapter.meaning.en}</p>
                <p><strong>Summary:</strong> ${chapter.summary.en}</p>
                <hr>
            </div>`;
            
            // Now, load verses sequentially
            await loadVerses(chapter);
        } else {
            chapterContainer.innerHTML = `<p>Chapter not found</p>`;
        }
    }

    // Function to fetch and display verses sequentially
    async function loadVerses(chapter) {
        let versesLength = chapter.verses_count;
        for (let count = 1; count <= versesLength; count++) {
            const response = await fetch(`https://vedicscriptures.github.io/slok/${chapter.chapter_number}/${count}`);
            const data = await response.json();
            console.log(data);
            
            let sivaObj = data["siva"];
            let englishTranslation = sivaObj.et;
            let cleanEnglishTranslation = englishTranslation.replace(/[0-9\.]+/g, "").replace(/\s{2,}/g, " ");
            
            verseContainer.innerHTML += `
                <div class="row col-12 mb-3 verseCard">
                    <div class="col-12 col-md-2">
                        Verse ${data.verse}
                    </div>
                    <div class="col-12 col-md-10">
                        ${cleanEnglishTranslation}
                    </div>
                </div>
            `;
        }
    }

    // Call the loadChapter function when the page is loaded
    loadChapter();
