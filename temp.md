homepage chapter card

<div class="col d-flex flex-column align-items-start gap-2">

                <div>
                    <h2 class="fw-bold text-body-emphasis">1 - मोक्षसंन्यासयोग</h2>
                    <p>Translation - Moksha Sanyaas Yoga</p>
                </div>

                <p class="text-body-secondary">Yoga through the Perfection of Renunciation and Surrender</p>
                <a href="#" class="btn btn-primary btn-sm">View Chapter</a>
            </div>

chapter card 

heading section

chapterContainer.innerHTML = `
                <div class="container">
                    <h1>${chapter.chapter_number} - ${chapter.name}</h1>
                    <h3>${chapter.translation}</h3>
                    <p><strong>Verses:</strong> ${chapter.verses_count}</p>
                    <p class="meaningText">${chapter.meaning.en}</p>
                    <p><strong>Summary:</strong> ${chapter.summary.en}</p>
                </div>
            `;


try {
                // Fetch verse data
                const response = await fetch(`https://vedicscriptures.github.io/slok/${chapter}/${verse}`);
                if (!response.ok) {
                    throw new Error("Verse not found");
                }
                const data = await response.json();

                // Clean and display the verse
                const verseContainer = document.getElementById("verseContainer");
                const cleanEnglishTranslation = data.siva.et.replace(/[0-9\.]+/g, "").replace(/\s{2,}/g, " ");
                verseContainer.innerHTML = `
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h2 class="card-title">Chapter ${chapter}, Verse ${verse}</h2>
                            <p class="card-text">${cleanEnglishTranslation}</p>
                        </div>
                    </div>`;