document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const lines = [
        document.getElementById("line1"),
        document.getElementById("line2"),
        document.getElementById("line3"),
        document.getElementById("line4")
    ];

    const followMeContainer = document.getElementById("follow-me-container");
    const secondSetLines = [
        document.getElementById("line5"),
        document.getElementById("line6")
    ];

    const dialogueBox = document.getElementById("dialogue-box");
    const dialogueText = document.getElementById("dialogue-text");
    const clickToNext = document.getElementById("click-to-next");
    const nameBox = document.getElementById("name-box");

    const overlay = document.createElement("div");
    overlay.id = "overlay";
    body.appendChild(overlay);

    // Start with a black background
    body.style.backgroundColor = "black";
    body.style.backgroundImage = "none";  // No background image initially
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center center";

    // Fade in each line one by one
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add("fade-in");
        }, index * 3000);
    });

    // Fade out lines after all have appeared
    setTimeout(() => {
        lines.forEach(line => {
            line.classList.add("fade-out");
        });
    }, 12000);

    // Reveal second set of lines
    setTimeout(() => {
        followMeContainer.style.visibility = "visible";
        followMeContainer.classList.remove("hidden");
        followMeContainer.style.opacity = 1;
    }, 13000);

    setTimeout(() => {
        secondSetLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add("fade-in");
            }, index * 3000);
        });
    }, 13000);

    // Fade out second set of lines
    setTimeout(() => {
        secondSetLines.forEach(line => {
            line.classList.add("fade-out");
        });
    }, 18000);

    // Change background to nufv.jpg and show dialogue at 20000ms
    setTimeout(() => {
        body.style.transition = "background-image 2s ease-in-out"; // Smooth transition
        body.style.backgroundImage = "url('nufv.jpg')";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center center";
        
        nameBox.style.display = "block";
        dialogueBox.style.display = "block";
        dialogueText.textContent = "(I can’t believe I’m back here... It’s been so long since that day.)";
    }, 20000);

    let clickCount = 0;
    clickToNext.addEventListener("click", () => {
        clickCount++;

        if (clickCount === 1) {
            dialogueText.textContent = "(This place, NU Fairview... It feels like a dream, almost like it was yesterday...)";
        }

        if (clickCount === 2) {
            dialogueBox.style.display = "none";
            nameBox.style.display = "none";
            clickToNext.style.display = "none";

            // Change background to nufv.jpg after line 6
            setTimeout(() => {
                body.style.transition = "background-image 2s ease-in-out"; // Smooth transition
                body.style.backgroundImage = "url('nufv.jpg')";
                body.style.backgroundSize = "cover";
                body.style.backgroundPosition = "center center";
            }, 1000); // Delay background change after first click

            // Bear Animation
            setTimeout(() => {
                const bear = document.createElement("img");
                bear.id = "bear";
                bear.src = "bear.png";
                bear.style.position = "absolute";
                bear.style.top = "70%";
                bear.style.left = "50%";
                bear.style.transform = "translate(-50%, -50%)";
                bear.style.zIndex = 10;
                document.body.appendChild(bear);

                setTimeout(() => {
                    bear.src = "bearhooray.png";
                    setTimeout(() => {
                        bear.src = "bear.png";
                    }, 500);
                }, 500);

                // Bear Dialogue (matching Ivan's style)
                setTimeout(() => {
                    const bearNameBox = document.getElementById("bear-name-box");
                    const bearDialogueBox = document.getElementById("bear-dialogue-box");
                    const bearDialogueText = document.getElementById("bear-dialogue-text");
                    const bearClickToNext = document.getElementById("bear-click-to-next");

                    // Show bear's name and dialogue
                    bearNameBox.style.display = "block";
                    bearDialogueBox.style.display = "block";
                    bearDialogueText.textContent = "!";  // First dialogue
                    bearClickToNext.style.display = "block"; // Show "click to continue"

                    let bearClickCount = 0;
                    bearClickToNext.addEventListener("click", () => {
                        bearClickCount++;

                        if (bearClickCount === 1) {
                            bearDialogueText.textContent = "Grroar? Raaar~!"; // Second bear dialogue
                        } else if (bearClickCount === 2) {
                            // Hide dialogue and bear after second click
                            bearDialogueBox.style.display = "none";
                            bearNameBox.style.display = "none";
                            document.getElementById("bear").style.display = "none";

                            // Ivan's Dialogue after Bear disappears
                            setTimeout(() => {
                                const ivanDialogueBox = document.getElementById("ivan-dialogue-box");
                                const ivanDialogueText = document.getElementById("ivan-dialogue-text");
                                const ivanClickToNext = document.getElementById("ivan-click-to-next");
                                const ivanNameBox = document.getElementById("name-box");

                                ivanNameBox.style.display = "block";
                                ivanDialogueBox.style.display = "block";
                                ivanDialogueText.textContent = "Did I just see a bear...?";  // Ivan's first dialogue
                                ivanClickToNext.style.display = "block";  // Show "click to continue"

                                let ivanClickCount = 0;
                                ivanClickToNext.addEventListener("click", () => {
                                    ivanClickCount++;

                                    if (ivanClickCount === 1) {
                                        ivanDialogueText.textContent = "It went inside the school. I should go follow it.";  // Second Ivan's dialogue
                                    } else if (ivanClickCount === 2) {
                                        ivanDialogueBox.style.display = "none";
                                        ivanNameBox.style.display = "none";
                                        ivanClickToNext.style.display = "none";

                                        // Black Screen Transition before changing to classroom.png
                                        setTimeout(() => {
                                            body.style.backgroundColor = "black";
                                            overlay.style.opacity = 1;
                                        }, 500);

                                        // Change background to classroom.png after the second click
                                        setTimeout(() => {
                                            body.style.transition = "background-image 2s ease-in-out"; // Smooth transition
                                            body.style.backgroundImage = "url('classroom.png')";
                                            body.style.backgroundSize = "cover";
                                            body.style.backgroundPosition = "center center";
                                        }, 1000); // Delay before the background changes, after the overlay is visible

// Continue Ivan's dialogue after background changes to classroom.png
setTimeout(() => {
    const ivanDialogueBox = document.getElementById("ivan-dialogue-box");
    const ivanDialogueText = document.getElementById("ivan-dialogue-text");
    const ivanClickToNext = document.getElementById("ivan-click-to-next");
    const ivanNameBox = document.getElementById("name-box");

    ivanNameBox.style.display = "block";
    ivanDialogueBox.style.display = "block";
    ivanDialogueText.textContent = "No one's here... But there's a note.";  // First dialogue after background change
    ivanClickToNext.style.display = "block";  // Show "click to continue"

    let ivanClickCount = 0;
    ivanClickToNext.addEventListener("click", function nextStep() {
        ivanClickCount++;

        if (ivanClickCount === 1) {
            ivanDialogueText.textContent = "This handwriting...";  // Second dialogue after clicking
        } else if (ivanClickCount === 2) {
            ivanDialogueBox.style.display = "none";
            ivanNameBox.style.display = "none";
            ivanClickToNext.style.display = "none";

            // Show crumpled paper image and the "Read it" button
            setTimeout(() => {
                const crumpledImage = document.createElement("img");
                crumpledImage.src = "crumpled.png";
                crumpledImage.style.position = "absolute";
                crumpledImage.style.top = "50%";
                crumpledImage.style.left = "50%";
                crumpledImage.style.transform = "translate(-50%, -50%)";
                crumpledImage.style.zIndex = 10;
                document.body.appendChild(crumpledImage);

                // Create the "Read it" button
                const readButton = document.createElement("button");
                readButton.textContent = "Read it";
                readButton.style.position = "absolute";
                readButton.style.top = "60%";
                readButton.style.left = "50%";
                readButton.style.transform = "translateX(-50%)";
                readButton.style.padding = "10px 20px";
                readButton.style.fontSize = "18px";
                readButton.style.zIndex = 15;
                document.body.appendChild(readButton);

                // Add event listener for the button to show the next step
                readButton.addEventListener("click", () => {
                    // Hide the crumpled paper image and the button
                    crumpledImage.style.display = "none";
                    readButton.style.display = "none";

                    // Show the first note image after the button click
                    const firstNoteImage = document.createElement("img");
                    firstNoteImage.src = "firstnote.png";
                    firstNoteImage.style.position = "absolute";
                    firstNoteImage.style.top = "50%";
                    firstNoteImage.style.left = "50%";
                    firstNoteImage.style.transform = "translate(-50%, -50%)";
                    firstNoteImage.style.zIndex = 10;
                    firstNoteImage.style.width = "50%";  // Adjust width percentage
                    firstNoteImage.style.height = "auto";  // Maintain aspect ratio
                    document.body.appendChild(firstNoteImage);

                    // Continue the narrative after reading the note
                    setTimeout(() => {
                        ivanDialogueBox.style.display = "block";
                        ivanNameBox.style.display = "block";
                        ivanDialogueText.textContent = "This note looks different... It’s the first one I’ve seen here.";  // Continue dialogue
                        ivanClickToNext.style.display = "block";
                    }, 500); // Delay for next dialogue

                    // Add an event listener to move to script2.js after clicking
                    ivanClickToNext.removeEventListener("click", nextStep);  // Remove previous listener to avoid double firing
                    ivanClickToNext.addEventListener("click", () => {
                        // Hide dialogue and name box
                        ivanDialogueBox.style.display = "none";
                        ivanNameBox.style.display = "none";
                        ivanClickToNext.style.display = "none";
                        firstNoteImage.style.display = "none";
                    

                        // Dynamically load script2.js
                        const script2 = document.createElement('script');
                        script2.src = 'script2.js';
                        document.body.appendChild(script2);
                    });
                });
            }, 1000); // Delay before showing crumpled paper and button
        }
    });
}, 1000); // Continue dialogue delay
                                    }
                                });
                            }, 1000); // Delay for Ivan's second dialogue
                        }
                    });
                }, 1000); // Delay after bear animation
            }, 3000); // Delay before bear animation
        }
    });
});