const verses = {
    general: [
        { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16" },
        { text: "I can do all this through him who gives me strength.", reference: "Philippians 4:13" },
        { text: "Trust in the LORD with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" }
    ],
    anger: [
        { text: "Be angry and do not sin; do not let the sun go down on your anger.", reference: "Ephesians 4:26" },
        { text: "Whoever is slow to anger has great understanding, but he who has a hasty temper exalts folly.", reference: "Proverbs 14:29" },
        { text: "A soft answer turns away wrath, but a harsh word stirs up anger.", reference: "Proverbs 15:1" }
    ],
    hope: [
        { text: "For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.", reference: "Jeremiah 29:11" },
        { text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles.", reference: "Isaiah 40:31" },
        { text: "May the God of hope fill you with all joy and peace as you trust in him.", reference: "Romans 15:13" }
    ],
    depression: [
        { text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        { text: "Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God.", reference: "Psalm 42:5" },
        { text: "He heals the brokenhearted and binds up their wounds.", reference: "Psalm 147:3" }
    ],
    peace: [
        { text: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", reference: "Philippians 4:7" },
        { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives.", reference: "John 14:27" },
        { text: "Great peace have those who love your law; nothing can make them stumble.", reference: "Psalm 119:165" }
    ],
    fear: [
        { text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.", reference: "2 Timothy 1:7" },
        { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.", reference: "Psalm 23:4" },
        { text: "The LORD is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" }
    ],
    stress: [
        { text: "Cast your burden on the LORD, and he will sustain you.", reference: "Psalm 55:22" },
        { text: "Come to me, all who labor and are heavy laden, and I will give you rest.", reference: "Matthew 11:28" },
        { text: "Let not your hearts be troubled. Believe in God; believe also in me.", reference: "John 14:1" }
    ],
    patience: [
        { text: "Be patient, therefore, brothers, until the coming of the Lord.", reference: "James 5:7" },
        { text: "But if we hope for what we do not see, we wait for it with patience.", reference: "Romans 8:25" },
        { text: "Better is the end of a thing than its beginning, and the patient in spirit is better than the proud in spirit.", reference: "Ecclesiastes 7:8" }
    ],
    pride: [
        { text: "Pride goes before destruction, and a haughty spirit before a fall.", reference: "Proverbs 16:18" },
        { text: "When pride comes, then comes disgrace, but with the humble is wisdom.", reference: "Proverbs 11:2" },
        { text: "For all that is in the world—the desires of the flesh and the desires of the eyes and pride of life—is not from the Father.", reference: "1 John 2:16" }
    ],
    doubt: [
        { text: "Immediately the father of the child cried out and said, 'I believe; help my unbelief!'", reference: "Mark 9:24" },
        { text: "But let him ask in faith, with no doubting, for the one who doubts is like a wave of the sea.", reference: "James 1:6" },
        { text: "Jesus said to him, 'Have you believed because you have seen me? Blessed are those who have not seen and yet have believed.'", reference: "John 20:29" }
    ],
    joy: [
        { text: "Rejoice in the Lord always; again I will say, rejoice.", reference: "Philippians 4:4" },
        { text: "The joy of the LORD is your strength.", reference: "Nehemiah 8:10" },
        { text: "Until now you have asked nothing in my name. Ask, and you will receive, that your joy may be full.", reference: "John 16:24" }
    ],
    jealousy: [
        { text: "Love is patient and kind; love does not envy or boast.", reference: "1 Corinthians 13:4" },
        { text: "A tranquil heart gives life to the flesh, but envy makes the bones rot.", reference: "Proverbs 14:30" },
        { text: "For where jealousy and selfish ambition exist, there will be disorder and every vile practice.", reference: "James 3:16" }
    ]
};

function getRandomVerse(category = 'general') {
    const categoryVerses = verses[category];
    const randomIndex = Math.floor(Math.random() * categoryVerses.length);
    return categoryVerses[randomIndex];
}

function displayVerse(verse) {
    const verseDisplay = document.getElementById('verseDisplay');
    const verseText = document.getElementById('verse');
    const verseReference = document.getElementById('reference');

    verseText.textContent = verse.text;
    verseReference.textContent = verse.reference;
    verseDisplay.classList.remove('hidden');
}

// Main generate button
document.getElementById('generateVerse').addEventListener('click', () => {
    const verse = getRandomVerse();
    displayVerse(verse);
});

// Category buttons
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        const verse = getRandomVerse(category);
        displayVerse(verse);
    });
});

// Close button for verse display
document.getElementById('closeVerse').addEventListener('click', () => {
    document.getElementById('verseDisplay').classList.add('hidden');
});