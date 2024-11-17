const body = document.body;

// Set the background to discord.png
body.style.transition = "background-image 2s ease-in-out";  // Smooth transition
body.style.backgroundImage = "url('discord.png')";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center center";

// Show name and dialogue box after background change
setTimeout(() => {
    const ivanDialogueBox = document.getElementById("ivan-dialogue-box");
    const ivanDialogueText = document.getElementById("ivan-dialogue-text");
    const ivanClickToNext = document.getElementById("ivan-click-to-next");
    const ivanNameBox = document.getElementById("name-box");

    ivanNameBox.style.display = "block";
    ivanDialogueBox.style.display = "block";
    
    // First dialogue after background change
    ivanDialogueText.textContent = "When did my surroundings change...?";

    setTimeout(() => {
        ivanDialogueText.textContent = "This... This was our first conversation together.";  // Second dialogue

        setTimeout(() => {
            ivanDialogueText.textContent = "We really stayed up late. Good times.";  // Third dialogue

            setTimeout(() => {
                // Hide dialogue and name box after all the text has been displayed
                ivanDialogueBox.style.display = "none";
                ivanNameBox.style.display = "none";
                ivanClickToNext.style.display = "none";  // Hide the "click to continue" button as well

                // New dialogue with ARIANNE
                setTimeout(() => {
                    ivanNameBox.style.display = "block";  // Show name box
                    ivanNameBox.textContent = "ARIANNE";  // Set name to ARIANNE
                    ivanDialogueBox.style.display = "block";  // Show dialogue box
                    
                    ivanDialogueText.textContent = "Hi babu! To be continued na lang iba huhu. Hindi na kinaya powers ko.";  // First dialogue from ARIANNE

                    setTimeout(() => {
                        ivanDialogueText.textContent = "Wait.";  // Second dialogue from ARIANNE

                        // Wait for "Wait." dialogue to finish, then start fading out
                        setTimeout(() => {
                            // Fade out everything (name box, dialogue box, and "click to continue")
                            ivanDialogueBox.style.transition = "opacity 2s ease";
                            ivanNameBox.style.transition = "opacity 2s ease";
                            ivanClickToNext.style.transition = "opacity 2s ease";
                            

                            ivanDialogueBox.style.opacity = 0;
                            ivanNameBox.style.opacity = 0;
                            ivanClickToNext.style.opacity = 0;

                            // After fade-out, change background to white
                            setTimeout(() => {
                                // Remove the discord background image
                                body.style.backgroundImage = "none";
                                
                                // Change the background to white
                                body.style.transition = "background-color 2s ease";  // Smooth transition
                                body.style.backgroundColor = "white";

                                // Remove any black overlay (in case it's still lingering)
                                const overlay = document.getElementById("overlay");
                                if (overlay) {
                                    overlay.style.display = "none";  // Hide the black overlay if it exists
                                }

                                // Show the "Happiest Birthday" message
                                setTimeout(() => {
                                    const birthdayMessage = document.createElement("div");
                                    birthdayMessage.textContent = "Happiest Birthday to my dearest Ivan!";
                                    birthdayMessage.style.position = "absolute";
                                    birthdayMessage.style.top = "30%";
                                    birthdayMessage.style.left = "50%";
                                    birthdayMessage.style.transform = "translate(-50%, -50%)";
                                    birthdayMessage.style.fontSize = "36px";
                                    birthdayMessage.style.fontWeight = "bold";
                                    birthdayMessage.style.color = "black";  // Text color black
                                    birthdayMessage.style.zIndex = 10;
                                    birthdayMessage.style.textAlign = "center";  // Center text alignment
                                    document.body.appendChild(birthdayMessage);

                                    // Add the cake image below the birthday message with animation
                                    const cakeImage = document.createElement("img");
                                    cakeImage.src = "cake.png";  // Path to your cake image
                                    cakeImage.style.position = "absolute";
                                    cakeImage.style.top = "40%";  // Adjust positioning below the birthday message
                                    cakeImage.style.left = "50%";
                                    cakeImage.style.transform = "translateX(-50%)";
                                    cakeImage.style.width = "150px";  // Adjust width of the cake image
                                    cakeImage.style.height = "auto";  // Maintain aspect ratio
                                    cakeImage.style.zIndex = 10;

                                    // Add animation to the cake image (scale and bounce effect)
                                    cakeImage.style.animation = "cakeAnimation 2s ease-out";

                                    document.body.appendChild(cakeImage);

// Wait for a while and then remove the birthday message and cake
setTimeout(() => {
    birthdayMessage.style.transition = "opacity 1s ease";
    cakeImage.style.transition = "opacity 1s ease";
    birthdayMessage.style.opacity = 0;
    cakeImage.style.opacity = 0;

    // After fading out, show the new multi-line message
    setTimeout(() => {
        // Line 1
        const line1 = document.createElement("div");
        line1.textContent = "I’m truly grateful that fate brought me to you—whether by God, the universe, or some other force I can’t fully explain. I know I’m not the best with words, but you’ve always been so considerate. You’ve inspired me to become a better version of myself, not just for you, but for me. You’ve accepted me completely and made me realize I’m capable of more than I ever thought.";
        line1.style.position = "absolute";
        line1.style.top = "40%";  // Adjust as needed
        line1.style.left = "50%";
        line1.style.transform = "translate(-50%, -50%)";
        line1.style.fontSize = "16px";
        line1.style.fontWeight = "bold";
        line1.style.color = "black";
        line1.style.zIndex = 10;
        line1.style.textAlign = "center";
        document.body.appendChild(line1);

        // Line 2
        const line2 = document.createElement("div");
        line2.textContent = "There are a lot of things left unsaid, but I want you to know how much I care about you. You mean so much to me, more than words can express, and I’m thankful for everything you are. I’m sorry I’ve been MIA this afternoon—I really wanted to create something special and meaningful for you. It’s more than just “the thought that counts.” I hope it’s something you’ll always remember.";
        line2.style.position = "absolute";
        line2.style.top = "60%";  // Adjust as needed
        line2.style.left = "50%";
        line2.style.transform = "translate(-50%, -50%)";
        line2.style.fontSize = "16px";
        line2.style.fontWeight = "bold";
        line2.style.color = "black";
        line2.style.zIndex = 10;
        line2.style.textAlign = "center";
        document.body.appendChild(line2);

        // Fade out Line 1 and Line 2 after a short delay
        setTimeout(() => {
            line1.style.transition = "opacity 2s ease";
            line2.style.transition = "opacity 2s ease";
            line1.style.opacity = 0;
            line2.style.opacity = 0;

            // Wait for the fade-out and show Line 3 and Line 4
            setTimeout(() => {
                // Line 3
                const line3 = document.createElement("div");
                line3.textContent = "I want to create more memories with you, whether they’re good, 'boring,' or even the tough ones. I want to experience everything with you: traveling together, baking, playing games, coding dates, going to church—whatever it is, I want to do it with you. Every moment with you feels special, and I’m excited for all the moments yet to come.";
                line3.style.position = "absolute";
                line3.style.top = "40%";  // Adjust as needed
                line3.style.left = "50%";
                line3.style.transform = "translate(-50%, -50%)";
                line3.style.fontSize = "16px";
                line3.style.fontWeight = "bold";
                line3.style.color = "black";
                line3.style.zIndex = 10;
                line3.style.textAlign = "center";
                document.body.appendChild(line3);

                // Line 4
                const line4 = document.createElement("div");
                line4.textContent = "Enjoy your day today, babu. Kulang pa 'to, but I hope you feel how much I value you. I wish I could say more. Always remember that I’m your pahinga—your safe place, your support system, and I’ll always be here for you, no matter what. (<3)";
                line4.style.position = "absolute";
                line4.style.top = "60%";  // Adjust as needed
                line4.style.left = "50%";
                line4.style.transform = "translate(-50%, -50%)";
                line4.style.fontSize = "16px";
                line4.style.fontWeight = "bold";
                line4.style.color = "black";
                line4.style.zIndex = 10;
                line4.style.textAlign = "center";
                document.body.appendChild(line4);

                // Fade out Line 3 and Line 4 after a short delay
                setTimeout(() => {
                    line3.style.transition = "opacity 2s ease";
                    line4.style.transition = "opacity 2s ease";
                    line3.style.opacity = 0;
                    line4.style.opacity = 0;

                    // Wait for the fade-out and display the coupon
                    setTimeout(() => {
                        // Show the coupon image
                        const couponImage = document.createElement("img");
                        couponImage.src = "COUPONS.png";
                        couponImage.style.position = "absolute";
                        couponImage.style.top = "50%"; // Adjust as needed
                        couponImage.style.left = "50%";
                        couponImage.style.transform = "translate(-50%, -50%)";
                        couponImage.style.width = "200px"; // Resize image (adjust as needed)
                        couponImage.style.height = "auto"; // Maintain aspect ratio
                        couponImage.style.zIndex = 10;
                        document.body.appendChild(couponImage);

                        // Add text below the coupon
                        const claimText = document.createElement("div");
                        claimText.textContent = "CLAIM MO NA!";
                        claimText.style.position = "absolute";
                        claimText.style.top = "80%"; // Adjust as needed
                        claimText.style.left = "50%";
                        claimText.style.transform = "translate(-50%, -50%)";
                        claimText.style.fontSize = "20px";
                        claimText.style.fontWeight = "bold";
                        claimText.style.color = "black";
                        claimText.style.zIndex = 10;
                        claimText.style.textAlign = "center";
                        document.body.appendChild(claimText);
                    }, 2000);  // Wait for Line 3 and Line 4 to fade out
                }, 18000);  // Wait 2 seconds before fading out Line 3 and Line 4
            }, 2000);  // Wait for Line 1 and Line 2 to fade out
        }, 18000);  // Wait 15 seconds before fading out Line 1 and Line 2
    }, 2000);  // Wait 2 seconds before showing Line 1 and Line 2
}, 2000); // Wait for birthday message and cake to fade out

                                }, 2000); // Wait 2 seconds before displaying the birthday message
                            }, 2000); // Wait 2 seconds for fade-out to complete
                        }, 3000); // Wait 3 seconds after "Wait." before starting fade-out
                    }, 3000);  // Wait 3 seconds before second line
                }, 1000);  // Wait 1 second before showing ARIANNE's dialogue
            }, 3000);  // Wait 2 seconds before hiding the previous dialogue
        }, 3000); // Wait 2 seconds before showing the third dialogue
    }, 3000); // Wait 2 seconds before showing the second dialogue

}, 3000); // Delay after background change

// Add the CSS animation keyframes for the cake image
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes cakeAnimation {
    0% {
        transform: translateX(-50%) scale(0); /* Start small */
        opacity: 0;
    }
    50% {
        opacity: 1;
        transform: translateX(-50%) scale(1.2); /* Scale up a bit */
    }
    100% {
        transform: translateX(-50%) scale(1); /* Return to normal size */
    }
}
`;
document.head.appendChild(styleSheet);
