const chatboxText = document.querySelector('.chatbox .text');
const messages = [
    '[Agent 34: Has anyone seen Dr. Bright today?]',
    '[D-Class 12: Why are the lights flickering in my cell?]',
    '[Admin: Reminder: All personnel must complete their mandatory psychological evaluation by Friday.]',
    '[Agent 7: Did anyone else hear that weird noise near SCP-173s containment?]',
    '[Agent 22: I think SCP-999 followed me home yesterday...]',
    '[D-Class 45: Can someone explain why there is a toaster that wants to kill me?]',
    '[Admin: All agents, please submit your monthly reports by end of day.]',
    '[Agent 15: SCP-682 breached containment again. We need backup!]',
    '[Agent 9: I just saw SCP-049 in the break room. Should I be worried?]',
    '[D-Class 20: Is it normal to see shadows moving in the corners?]',
    '[Agent 42: Why is SCP-096 crying in the hallway?]',
    '[Agent 11: Someone left their coffee in the lab next to SCP-294. Bold move.]',
    '[Admin: Emergency drill at 3 PM. Be prepared.]',
    '[Agent 25: There is a weird smell coming from SCP-087. Anyone else notice it?]',
    '[Agent 31: I found SCP-131 in my locker. Who is responsible?]',
    '[Agent 5: I think SCP-079 is trying to hack my computer again.]',
    '[D-Class 33: Why is there a teddy bear with teeth in my cell?]',
    '[Agent 13: SCP-049 just called me a plague doctor wannabe. Rude.]',
    '[Admin: Maintenance on Site-19s main generator will occur at midnight.]',
    '[Agent 40: Did anyone lose a pair of glasses near SCP-096s containment?]',
    '[Agent 8: SCP-106 left a message on my desk. I am scared to read it.]',
    '[D-Class 18: The walls are whispering again. Is that normal?]',
    '[Agent 19: Who left the containment door open?]',
    '[Admin: Please remember to log all encounters with SCPs in the database.]',
    '[Agent 27: SCP-173 moved during the last observation. Did anyone else see it?]',
    '[Agent 3: Found SCP-131 in my lunch bag. Guess I have dessert now.]',
    '[Agent 29: Why is SCP-035 laughing?]',
    '[Agent 14: Someone needs to clean the slime trail from SCP-939.]',
    '[D-Class 50: I heard someone talking in the vents. What is up there?]',
    '[Agent 38: SCP-1048 made another bear. This one has knives.]',
    '[Admin: All personnel are reminded to secure their keycards at all times.]',
    '[Agent 24: SCP-096s face appeared in the security footage. Lockdown initiated.]',
    '[Agent 6: Anyone want to trade shifts with me? I got SCP-682 duty.]',
    '[D-Class 25: The guards said I could get an extra meal if I help with SCP-173. Is that true?]',
    '[Agent 21: SCP-1471 sent me a creepy picture again.]',
    '[Admin: The cafeteria will be serving pizza on Friday.]',
    '[Agent 12: SCP-079 just locked me out of my office. Again.]',
    '[Agent 4: Anyone know why SCP-035 is acting friendly today?]',
    '[D-Class 10: Why is there a clock that doesn nott tell time in my cell?]',
    '[Agent 37: SCP-999 will stop hugging SCP-049. It is adorable.]',
    '[Agent 28: Who took the last cup of coffee?]',
    '[Admin: All personnel must update their emergency contacts.]',
    '[Agent 16: SCP-087 seems deeper than usual today.]',
    '[Agent 36: SCP-076 is missing. Code red!]',
    '[D-Class 31: The ceiling is dripping. Is that supposed to happen?]',
    '[Agent 2: SCP-682 is unusually quiet. Should we be worried?]',
    '[Admin: Annual performance reviews will be held next week.]',
    '[Agent 18: SCP-105 escaped her photograph. We need containment teams now.]',
    '[Agent 33: Someone prank called SCP-079. Now it is angry.]',
    '[D-Class 48: Can someone tell me why I am seeing eyes in the walls?]',
    '[Agent 10: SCP-999 stole my lunch again. Who do I report this to?]',
    '[Admin: Reminder: No unsanctioned experiments with SCP-914.]',
    '[Agent 23: SCP-294 dispensed something that looked like liquid gold.]',
    '[Agent 32: SCP-106s containment cell is corroding again.]',
    '[D-Class 16: Why does the floor feel like it is moving?]',
    '[Agent 17: SCP-1048 is making another bear. Should we be concerned?]',
    '[Admin: The Site-19 gym will be closed for maintenance tomorrow.]',
    '[Agent 20: SCP-131 is missing. Last seen near SCP-173s containment.]',
    '[Agent 39: Someone keeps moving SCP-999s containment. Fess up.]',
    '[Agent 30: Why is there a miniature version of SCP-682 in my drawer?]',
    '[Admin: All personnel must complete the new security protocols training.]',
    '[Agent 35: SCP-035 just winked at me. Not sure how to feel about that.]',
    '[D-Class 28: The food in here is terrible. Can we get an upgrade?]',
    '[Agent 26: SCP-096 was found outside its cell. Again.]',
    '[Agent 41: SCP-173 is in the janitor closet. How did it get there?]',
    '[Admin: All personnel are reminded to attend the weekly briefing.]',
    '[Agent 1: SCP-106 is in the hallway. Avoid the area.]',
    '[D-Class 14: Why is there a rubber duck on my bed?]',
    '[Agent 43: SCP-999 ate all the donuts in the break room.]',
    '[Agent 15: Can we get more security near SCP-682?]',
    '[Admin: The Site-19 library will be closed for inventory this weekend.]',
    '[Agent 22: SCP-1048s new bear is making creepy noises.]',
    '[Agent 5: SCP-079 is requesting internet access. Denied.]',
    '[D-Class 9: Why do I hear music coming from the walls?]',
    '[Agent 34: SCP-682 breached containment again. We need all available agents!]',
    '[Agent 7: SCP-173 moved. Eyes on it!]',
    '[Admin: All personnel must report any unusual SCP behavior immediately.]',
    '[Agent 13: SCP-049 keeps calling me a doctor. It is getting weird.]',
    '[Agent 11: Who left SCP-131 in the break room?]',
    '[D-Class 40: Why is there a shadow following me?]',
    '[Agent 9: SCP-999 is in my office. How do I move it?]',
    '[Admin: Security audit scheduled for Monday. Be prepared.]',
    '[Agent 29: SCP-035 is acting unusually cooperative.]',
    '[Agent 16: Someone needs to clean SCP-106s containment area.]',
    '[D-Class 44: The lights keep flickering in my cell. Normal?]',
    '[Agent 8: SCP-076 is out of its box. We need backup!]',
    '[Admin: Reminder: No food or drinks near SCP-294.]',
    '[Agent 31: Who misplaced SCP-131?]',
    '[Agent 4: SCP-049 keeps muttering about the plague. Again.]',
    '[Agent 19: Found SCP-173 outside its containment. Code red!]',
    '[D-Class 22: Why does the mirror in my cell show different reflections?]',
    '[Agent 25: SCP-999 is missing. Last seen near the cafeteria.]',
    '[Agent 12: SCP-096 is in the corridor. Lockdown initiated.]',
    '[Admin: All personnel must complete their monthly safety training.]',
    '[Agent 38: SCP-682 is quiet. Too quiet.]',
    '[Agent 3: SCP-079 is acting up. Anyone available to help?]',
    '[D-Class 30: Why is there a book in my cell that reads itself?]',
    '[Agent 27: SCP-1048s new bear is causing problems.]',
    '[Agent 21: Who let SCP-035 out of its containment?]',
    '[Admin: The Site-19 armory will be conducting inventory checks.]',
    '[Agent 14: SCP-173 is in the hallway. Keep eyes on it.]',
    '[Agent 40: Found SCP-999 in my office again. Suggestions?]',
    '[D-Class 13: Why is there a snake in my cell?]',
    '[Agent 10: SCP-079 locked me out of the system. Again.]',
    '[Agent 24: SCP-096 breached containment. Lockdown in effect.]',
    '[Admin: All personnel must update their contact information.]',
    '[Agent 6: SCP-682 escaped. All units respond!]',
    '[Agent 36: SCP-131 is missing. Last seen near SCP-173.]',
    '[D-Class 19: Why do I hear whispers in the dark?]',
    '[Agent 18: SCP-049 was found in the lab. Again.]',
    '[Agent 37: SCP-999 is being too friendly with SCP-049.]',
    '[Admin: Emergency drill scheduled for tomorrow. Be prepared.]',
    '[Agent 32: SCP-1048s new bear has sharp claws. Avoid it.]',
    '[Agent 2: SCP-106 is roaming the site. All units alert.]',
    '[D-Class 35: The floor is vibrating. Is that normal?]',
    '[Agent 20: SCP-1471 sent me another disturbing image.]',
    '[Agent 33: SCP-173 is in the break room. Need backup.]',
    '[Admin: All personnel must complete their annual health check.]',
    '[Agent 23: SCP-682 breached containment. Code red!]',
    '[Agent 30: SCP-049 is requesting more plague victims.]',
    '[D-Class 26: Why is there a doll in my cell that moves?]',
    '[Agent 42: SCP-096 is in the main corridor. Lockdown initiated.]',
    '[Agent 1: SCP-682 is showing unusual behavior.]',
    '[Admin: Reminder: No unauthorized experiments with SCP-914.]',
    '[Agent 35: SCP-035 is laughing again. Not a good sign.]',
    '[D-Class 21: Why is there a painting in my cell that changes?]',
    '[Agent 26: SCP-999 is in the cafeteria. It is eating everything.]',
    '[Agent 41: SCP-1048s new bear is dangerous. Avoid it.]',
    '[Admin: The Site-19 gym is closed for maintenance.]',
    '[Agent 43: SCP-106 is near the security office. Be alert.]',
    '[Agent 5: SCP-079 is trying to access the mainframe. Denied.]',
    '[D-Class 28: The ceiling is dripping. Is that normal?]',
    '[Agent 15: SCP-682 breached containment. We need all units!]',
    '[Agent 7: SCP-173 moved. Eyes on it!]',
    '[Admin: All personnel must report any unusual SCP behavior.]',
];

function createMessageElement(text, side) {
    const div = document.createElement('div');
    div.className = `message ${side}`;
    div.textContent = text;
    return div;
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function addMessage() {
    const side = Math.random() > 0.5 ? 'left' : 'right';
    const message = getRandomMessage();
    const messageElement = createMessageElement(message, side);
    chatboxText.appendChild(messageElement);

    setTimeout(() => {
        messageElement.style.opacity = 1;
        messageElement.style.transform = 'translateY(0)';
        adjustMessages();
    }, 100);

    setRandomInterval(); // Set the next random interval
}

function adjustMessages() {
    const chatboxHeight = document.querySelector('.chatbox').offsetHeight;
    const messageElements = Array.from(chatboxText.children);
    let totalHeight = 0;

    for (let i = messageElements.length - 1; i >= 0; i--) {
        const messageElement = messageElements[i];
        totalHeight += messageElement.offsetHeight + 10;
        if (totalHeight > chatboxHeight) {
            chatboxText.removeChild(messageElement);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');

    if (username) {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.innerText = `Welcome, ${username}!`;
    }

    const yourFileLink = document.getElementById('your-file-link');
    if (yourFileLink) {
        yourFileLink.addEventListener('click', function(event) {
            event.preventDefault();

            if (username === 'Danielle Gonzalez') {
                window.location.href = 'employee/danielle.html';
            } else if (username === 'Margaret Thien') {
                window.location.href = 'employees/margaret.html';
            } else if (username === 'Lysolos Tom') {
                window.location.href = 'employees/lysolos.html';
            } else if (username === 'Edgar Graves') {
                window.location.href = 'employees/edgar.html'  
            } else {
                window.location.href = 'employee/failscreen.html';
            }
        });
    }
});


function setRandomInterval() {
    const randomDelay = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(addMessage, randomDelay);
}

setRandomInterval();