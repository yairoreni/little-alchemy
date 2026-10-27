const STARTING_ELEMENTS = ['Fire', 'Water', 'Earth', 'Air'];

const EMOJIS = {
    // Starting
    'Fire': '🔥', 'Water': '💧', 'Earth': '🌍', 'Air': '💨',
    // Basic natural
    'Steam': '💨', 'Mud': '🤎', 'Lava': '🌋', 'Energy': '⚡', 'Rain': '🌧️', 'Dust': '💨',
    'Cloud': '☁️', 'Storm': '⛈️', 'Lightning': '⚡', 'Stone': '🪨', 'Metal': '🔗', 'Wood': '🪵',
    'Ash': '💨', 'Plant': '🌿', 'Seed': '🌱', 'Life': '🧬', 'Earthquake': '🌪️', 'Sword': '⚔️',
    'Axe': '🪓', 'Phoenix': '🦅', 'Sand': '🏖️', 'Rock': '⛰️', 'Mountain': '⛰️', 'Valley': '🌄',
    'River': '🏞️', 'Lake': '🌊', 'Ocean': '🌊', 'Beach': '🏖️', 'Forest': '🌲', 'Jungle': '🌴',
    'Desert': '🏜️', 'Swamp': '💦', 'Volcano': '🌋', 'Glacier': '❄️', 'Iceberg': '🧊', 'Snow': '❄️',
    // Everyday objects
    'Cup': '☕', 'Plate': '🍽️', 'Fork': '🍴', 'Spoon': '🥄', 'Knife': '🔪', 'Chair': '🪑',
    'Table': '🪑', 'Door': '🚪', 'Window': '🪟', 'Wall': '🧱', 'Roof': '🏠', 'Floor': '🪵',
    'Bed': '🛏️', 'Pillow': '🛏️', 'Blanket': '🛏️', 'Desk': '📝', 'Pen': '✏️', 'Paper': '📄',
    'Book': '📚', 'Backpack': '🎒', 'Shoes': '👟', 'Hat': '🎩', 'Jacket': '🧥', 'Pants': '👖',
    'Shirt': '👕', 'Watch': '⌚', 'Clock': '🕐', 'Phone': '📱', 'Computer': '💻', 'Keyboard': '⌨️',
    'Mouse': '🖱️', 'Monitor': '🖥️', 'Printer': '🖨️', 'Laptop': '💻', 'Tablet': '📱', 'Headphones': '🎧',
    'Microphone': '🎤', 'Speaker': '🔊', 'Camera': '📷', 'Projector': '📽️', 'Screen': '🖥️',
    'Router': '📡', 'Modem': '📡', 'Hard Drive': '💾', 'USB Drive': '💾', 'External HDD': '💾',
    'Whiteboard': '🗒️', 'Chalk': '✍️', 'Eraser': '🧹', 'Notebook': '📓', 'Textbook': '📖',
    'Calculator': '🧮', 'Ruler': '📏', 'Compass': '🧭', 'Protractor': '📐', 'Lamp': '💡',
    // Food
    'Bread': '🍞', 'Cheese': '🧀', 'Milk': '🥛', 'Egg': '🥚', 'Chicken': '🍗', 'Beef': '🥩',
    'Fish': '🐟', 'Rice': '🍚', 'Vegetable': '🥬', 'Fruit': '🍎', 'Apple': '🍎', 'Orange': '🍊',
    'Banana': '🍌', 'Pizza': '🍕', 'Pasta': '🍝', 'Soup': '🍲', 'Cake': '🍰', 'Cookie': '🍪',
    'Chocolate': '🍫', 'Candy': '🍬', 'Honey': '🍯', 'Olive Oil': '🫒', 'Hummus': '🫘',
    'Falafel': '🫓', 'Shawarma': '🌮', 'Sabich': '🥙', 'Schnitzel': '🍗', 'Burekas': '🥐',
    'Rugelach': '🍪', 'Shakshuka': '🍳', 'Tahini': '🤎', 'Za\'atar': '🌿', 'Matzo': '🍞',
    // Landmarks
    'Eiffel Tower': '🗼', 'Big Ben': '🕐', 'Statue of Liberty': '🗽', 'Pyramid': '🔺',
    'Great Wall': '🧱', 'Colosseum': '🏛️', 'Parthenon': '🏛️', 'Taj Mahal': '🏰', 'Sagrada Familia': '⛪',
    'Arc de Triomphe': '🌉', 'Tower Bridge': '🌉', 'Christ the Redeemer': '🙏',
    'Western Wall': '🧱', 'Temple Mount': '⛩️', 'Old City Jerusalem': '🕌', 'Dead Sea': '🌊',
    'Mount of Olives': '⛰️', 'Ein Gedi': '🏜️', 'Masada': '⛰️', 'Dome of the Rock': '🕌',
    // HUJI Specific (most important)
    'Givat Ram Campus': '🏫', 'Mount Scopus Campus': '⛰️', 'Ramat Eshkol Campus': '🏘️',
    'Student': '👨‍🎓', 'CS Student': '👨‍💻', 'Economics Student': '💼', 'Math Student': '🧮',
    'Dorm Room': '🛏️', 'Givat Ram Dorms': '🏢', 'Library': '📚', 'Computer Lab': '💻',
    'Lecture Hall': '🎤', 'Math Department': '🧮', 'CS Department': '💻', 'Economics Department': '💼',
    'Physics Department': '⚛️', 'Chemistry Department': '⚗️', 'Biology Department': '🧬',
    'Atuda': '👮', 'Atuda Cadet': '👮', 'Atuda Uniform': '👔', 'Professor': '👨‍🏫',
    'Teaching Assistant': '📝', 'Homework': '📖', 'Exam': '😰', 'Midterm': '📋', 'Final': '📋',
    'Grade': '📊', 'A+': '🎓', 'F': '😭', 'GPA': '📊', 'Failing': '😭', 'Burnout': '🔥',
    'All-nighter': '🌙', 'Sleep Deprivation': '😴', 'Coffee Addiction': '☕', 'Procrastination': '🐢',
    'Stress': '😰', 'Panic': '😱', 'Confusion': '🤔', 'Understanding': '💡', 'Eureka': '⚡',
    'Project Deadline': '⏰', 'Submission': '📤', 'Code Review': '👀', 'Debugging': '🔍',
    // HUJI Courses
    'Infi 1': '📐', 'Linear Algebra': '📐', 'Discrete Math': '🧮', 'Data Structures': '📦',
    'Algorithms': '⚙️', 'Programming Languages': '💻', 'Operating Systems': '🖥️',
    'Databases': '🗄️', 'Networks': '🌐', 'Web Development': '🌐', 'Machine Learning': '🤖',
    'Computer Vision': '👁️', 'Natural Language Processing': '💬', 'Parallel Computing': '⚙️',
    'Agentic Programming Lab': '🤖', 'Microeconomics': '📈', 'Macroeconomics': '📊',
    'Econometrics': '📊', 'Game Theory': '🎮', 'Finance': '💰', 'Accounting': '📊',
    // Tech/CS Concepts
    'Bug': '🐛', 'Feature': '✨', 'GitHub': '🐙', 'Git': '🐙', 'Deploy': '🚀', 'Deployment': '🚀',
    'Error': '❌', 'Debug': '🔍', 'API': '🔌', 'Server': '🖥️', 'Database': '🗄️',
    'Network': '🌐', 'Algorithm': '⚙️', 'Data': '📊', 'Code': '💻', 'Program': '📱',
    'Software': '💾', 'Hardware': '🖥️', 'CPU': '⚙️', 'GPU': '🎮', 'RAM': '💾',
    'Processor': '⚙️', 'Variable': '📝', 'Function': 'ƒ', 'Class': '📦', 'Object': '🎁',
    'Array': '📊', 'List': '📝', 'Tree': '🌳', 'Graph': '📈', 'String': '📝',
    'Loop': '🔄', 'Recursion': '🪆', 'Inheritance': '👨‍👩‍👧', 'Polymorphism': '🎭',
    'Stack': '📚', 'Queue': '🔄', 'Hash Table': '🗂️', 'Sorting': '📊', 'Searching': '🔍',
    // Languages & Frameworks
    'JavaScript': '📜', 'Python': '🐍', 'Java': '☕', 'C++': '⚙️', 'Rust': '🦀',
    'Go': '🐹', 'Node.js': '🟢', 'React': '⚛️', 'Vue': '💚', 'Angular': '🔴',
    'SQL': '🗄️', 'NoSQL': '🗄️', 'HTML': '🌐', 'CSS': '🎨', 'TypeScript': '📘',
    // Hilarious outcomes
    'Burnout': '🔥', 'Stack Overflow': '🏔️', 'Merge Conflict': '⚠️', 'Rage Quit': '😤',
    'All-nighter': '🌙', 'Career Change': '🚀', 'Unemployment': '😭', 'Debt': '💳',
    'Suffering Complete': '😩', 'Celebration': '🎉', 'ChatGPT': '🤖', 'AI': '🤖',
    'Singularity': '🌌', 'Startup': '🚀', 'IPO': '💵', 'Bankrupt': '📉', 'Rich': '💰',
    // Misc
    'Coffee': '☕', 'Sleep': '😴', 'Beer': '🍺', 'Food': '🍽️', 'Pizza': '🍕',
    'Deadline': '⏰', 'Presentation': '🎯', 'Hackathon': '🏃', 'Internship': '💼',
    'Job Interview': '🎤', 'Tech Talk': '🎧', 'Open Source': '🌍', 'Contribution': '🤝',
    'Pull Request': '📬', 'Commit': '✅', 'Push': '📤', 'Pull': '📥', 'Clone': '📋',
    'Fork': '🍴', 'Star': '⭐', 'Issue': '🐛', 'Release': '🎉', 'Product': '📦',
    'Framework Fatigue': '😔', 'Latte': '☕', 'Myth': '🦄', 'Memory Leak': '💧',
    'Null Pointer': '➡️', 'Regex': '🧩', 'Boolean': '✅', 'Integer': '🔢', 'Float': '🔢',
    'Character': '📝', 'Byte': '📊', 'Bit': '1️⃣', 'Circuit': '⚡', 'Transistor': '⚙️',
    'Logic Gate': '⚡', 'Motherboard': '🖥️', 'SSD': '💾', 'Password': '🔐', 'Token': '🎫',
    'Crypto': '💰', 'Blockchain': '🔗', 'NFT': '🖼️', 'Web3': '🌐', 'Firewall': '🛡️',
    'Hack': '🔓', 'Security Breach': '🔓', 'Password123': '🔑', 'Hacked Account': '😱',
    'Framework': '🏗️', 'Library': '📚', 'Package': '📦', 'npm': '📦', 'Dependency': '🔗',
    'Dependency Hell': '🔥', 'Breaking Changes': '💔', 'Disaster': '🌪️', 'On-call': '📞',
    'Survival': '💪', 'Energy Drink': '⚡', 'Typing Speed': '⌨️', 'Mechanical Keyboard': '⌨️',
    'RGB Lighting': '🌈', 'Hipster Developer': '😎', 'Pitch': '🎯', 'Investment': '💵',
    'Academic Dishonesty': '📵', 'Cheating': '🚫',
    // Missing items referenced in combinations
    'Math': '🧮', 'Tears': '😭', 'Matrix': '📊', 'Pain': '💔', 'Maze': '🧩',
    'Tool': '🔧', 'Furniture': '🪑', 'Village': '🏘️', 'City': '🏙️', 'Grain': '🌾',
    'Bacteria': '🦠', 'Sun': '☀️', 'Success': '✅', 'Fear': '😨', 'Career': '💼',
    'Landmark': '🗽', 'Monument': '🗿', 'Tall': '📏', 'Green': '💚', 'Freedom': '🗽',
    'Logic': '🧠', 'Game': '🎮', 'Number': '🔢', 'Infinity': '∞', 'Vector': '➡️',
    'Set': '📦', 'Sorting': '📊', 'Pattern': '🎨', 'Thought': '💭', 'Language': '💬',
    'Digit': '🔢', 'Ink': '✍️', 'Project': '📋', 'Thread': '🧵', 'Word': '📝',
    'Storage': '💾', 'Tall': '⬆️', 'Expensive': '💎', 'Motivation': '💪', 'Achievement': '🏆',
    'Tool': '🔧', 'Graduation': '🎓', 'Infinity': '∞', 'Process': '⚙️',
};

// Count unique items
const TOTAL_ITEMS = Object.keys(EMOJIS).length;
console.log(`Total unique items: ${TOTAL_ITEMS}`);

const COMBINATIONS = {
    // Basic nature
    'Fire+Water': 'Steam', 'Water+Fire': 'Steam',
    'Earth+Water': 'Mud', 'Water+Earth': 'Mud',
    'Fire+Earth': 'Lava', 'Earth+Fire': 'Lava',
    'Fire+Air': 'Energy', 'Air+Fire': 'Energy',
    'Water+Air': 'Rain', 'Air+Water': 'Rain',
    'Earth+Air': 'Dust', 'Air+Earth': 'Dust',
    'Steam+Air': 'Cloud', 'Air+Steam': 'Cloud',
    'Cloud+Cloud': 'Storm', 'Storm+Energy': 'Lightning',
    'Lava+Water': 'Stone', 'Water+Lava': 'Stone',
    'Stone+Fire': 'Metal', 'Fire+Stone': 'Metal',
    'Metal+Fire': 'Sword', 'Fire+Metal': 'Sword',
    'Life+Fire': 'Phoenix', 'Fire+Life': 'Phoenix',
    'Plant+Water': 'Seed', 'Water+Plant': 'Seed',
    'Seed+Earth': 'Plant', 'Earth+Seed': 'Plant',
    'Fire+Plant': 'Ash', 'Plant+Fire': 'Ash',
    'Earth+Life': 'Plant', 'Life+Earth': 'Plant',
    'Rain+Dust': 'Mud', 'Dust+Rain': 'Mud',
    'Energy+Mud': 'Life', 'Mud+Energy': 'Life',
    'Stone+Metal': 'Tool', 'Metal+Stone': 'Tool',
    'Lightning+Earth': 'Earthquake', 'Earth+Lightning': 'Earthquake',
    'Mountain+Stone': 'Rock', 'Stone+Mountain': 'Rock',
    'Water+Water': 'Ocean', 'Ocean+Earth': 'Beach', 'Earth+Ocean': 'Beach',
    'Plant+Plant': 'Forest', 'Forest+Water': 'Swamp', 'Water+Forest': 'Swamp',
    'Mountain+Fire': 'Volcano', 'Fire+Mountain': 'Volcano',
    'Ice+Water': 'Glacier', 'Water+Ice': 'Glacier',
    'Glacier+Glacier': 'Iceberg', 'Air+Water': 'Rain',

    // HUJI Specific (Core)
    'Math+Tears': 'Infi 1', 'Tears+Math': 'Infi 1',
    'Matrix+Pain': 'Linear Algebra', 'Pain+Matrix': 'Linear Algebra',
    'Code+Maze': 'Data Structures', 'Maze+Code': 'Data Structures',
    'Uniform+Student': 'Atuda Cadet', 'Student+Uniform': 'Atuda Cadet',
    'Sleep Deprivation+Bed': 'Givat Ram Dorms', 'Bed+Sleep Deprivation': 'Givat Ram Dorms',
    'Code+AI': 'Agentic Programming Lab', 'AI+Code': 'Agentic Programming Lab',
    'Fire+Code': 'Error', 'Code+Fire': 'Error',
    'Code+Code': 'Bug', 'Bug+Coffee': 'Debugging',
    'Coffee+Code': 'All-nighter', 'Code+Coffee': 'All-nighter',
    'Student+Sleep': 'Myth', 'Sleep+Student': 'Myth',
    'Exam+Fear': 'Burnout', 'Fear+Exam': 'Burnout',
    'Project+Deadline': 'Panic', 'Deadline+Project': 'Panic',
    'Code+Review': 'Code Review', 'Review+Code': 'Code Review',
    'Computer+Campus': 'Computer Lab', 'Campus+Computer': 'Computer Lab',
    'Book+Campus': 'Library', 'Campus+Book': 'Library',
    'Lecture+Hall': 'Lecture Hall', 'Hall+Lecture': 'Lecture Hall',
    'Student+Dorm': 'Dorm Room', 'Dorm+Student': 'Dorm Room',
    'Uniform+Atuda': 'Atuda Cadet', 'Atuda+Uniform': 'Atuda Cadet',

    // Economics
    'Money+Study': 'Economics', 'Study+Money': 'Economics',
    'Market+Chaos': 'Microeconomics', 'Chaos+Market': 'Microeconomics',
    'Nation+Economy': 'Macroeconomics', 'Economy+Nation': 'Macroeconomics',

    // CS Courses & Concepts
    'Logic+Game': 'Game Theory', 'Game+Logic': 'Game Theory',
    'Number+Infinity': 'Infi 1', 'Infinity+Number': 'Infi 1',
    'Vector+Matrix': 'Linear Algebra', 'Matrix+Vector': 'Linear Algebra',
    'Set+Logic': 'Discrete Math', 'Logic+Set': 'Discrete Math',
    'Array+Sorting': 'Data Structures', 'Sorting+Array': 'Data Structures',
    'Loop+Logic': 'Algorithms', 'Logic+Loop': 'Algorithms',
    'Grammar+Code': 'Programming Languages', 'Code+Grammar': 'Programming Languages',
    'Process+Computer': 'Operating Systems', 'Computer+Process': 'Operating Systems',
    'Table+Query': 'Databases', 'Query+Table': 'Databases',
    'Computer+Computer': 'Network', 'Network+Browser': 'Web Development',
    'Data+Math': 'Machine Learning', 'Math+Data': 'Machine Learning',
    'Image+Algorithm': 'Computer Vision', 'Algorithm+Image': 'Computer Vision',
    'Text+Machine': 'Natural Language Processing', 'Machine+Text': 'Natural Language Processing',
    'Processor+Processor': 'Parallel Computing', 'Computing+Thread': 'Parallel Computing',

    // Tech & Code
    'Computer+Metal': 'Keyboard', 'Metal+Computer': 'Keyboard',
    'Computer+Dust': 'Mouse', 'Dust+Computer': 'Mouse',
    'Computer+Light': 'Monitor', 'Light+Computer': 'Monitor',
    'Paper+Ink': 'Printer', 'Ink+Paper': 'Printer',
    'Digit+Code': 'Algorithm', 'Code+Digit': 'Algorithm',
    'Energy+Dust': 'Computer', 'Dust+Energy': 'Computer',
    'Computer+Computer': 'Server', 'Server+Server': 'Network',
    'Network+Computer': 'Internet', 'Computer+Internet': 'Website',
    'Website+Phone': 'App', 'Phone+Website': 'App',
    'App+Code': 'Software', 'Code+App': 'Software',
    'Thought+Machine': 'AI', 'Machine+Thought': 'AI',
    'AI+Language': 'ChatGPT', 'Language+AI': 'ChatGPT',
    'AI+Singularity': 'Singularity', 'Singularity+Code': 'Singularity',
    'Data+Pattern': 'Machine Learning', 'Pattern+Data': 'Machine Learning',
    'Code+Keyboard': 'Commit', 'Keyboard+Code': 'Commit',
    'Commit+Network': 'Push', 'Network+Commit': 'Push',
    'Push+Pull': 'Merge Conflict', 'Pull+Push': 'Merge Conflict',
    'GitHub+Feature': 'Pull Request', 'Feature+GitHub': 'Pull Request',
    'Code+Error': 'Debug', 'Error+Code': 'Debug',
    'Bug+Coffee': 'Debugging', 'Coffee+Bug': 'Debugging',
    'Feature+Feature': 'Product', 'Product+Keyboard': 'Code',

    // Objects
    'Wood+Fire': 'Ash', 'Fire+Wood': 'Ash',
    'Plant+Seed': 'Plant', 'Seed+Plant': 'Plant',
    'Chair+Table': 'Furniture', 'Table+Chair': 'Furniture',
    'Door+Wood': 'House', 'Wood+House': 'House',
    'House+House': 'Village', 'Village+Village': 'City',
    'Metal+Fire': 'Tool', 'Fire+Tool': 'Tool',
    'Tool+Wood': 'House', 'Wood+Tool': 'House',
    'Paper+Pen': 'Book', 'Pen+Paper': 'Book',
    'Book+Book': 'Library', 'Library+Student': 'Library',

    // Food
    'Grain+Water': 'Bread', 'Water+Grain': 'Bread',
    'Milk+Bacteria': 'Cheese', 'Bacteria+Milk': 'Cheese',
    'Bread+Cheese': 'Pizza', 'Cheese+Bread': 'Pizza',
    'Egg+Fire': 'Food', 'Fire+Egg': 'Food',
    'Water+Plant': 'Vegetable', 'Plant+Water': 'Vegetable',
    'Tree+Sun': 'Fruit', 'Sun+Tree': 'Fruit',

    // HUJI Life
    'Sleep+Coffee': 'All-nighter', 'Coffee+Sleep': 'All-nighter',
    'All-nighter+Exam': 'Burnout', 'Exam+All-nighter': 'Burnout',
    'Stress+Coffee': 'All-nighter', 'Coffee+Stress': 'All-nighter',
    'Professor+Book': 'Lecture', 'Book+Professor': 'Lecture',
    'Lecture+Confusion': 'Understanding', 'Confusion+Lecture': 'Understanding',
    'Understanding+Exam': 'A+', 'Exam+Understanding': 'A+',
    'Confusion+Exam': 'F', 'Exam+Confusion': 'F',
    'Sleep+Sleep': 'Burnout', 'Burnout+Stress': 'Burnout',
    'Procrastination+Deadline': 'Panic', 'Deadline+Procrastination': 'Panic',
    'Job Interview+Fear': 'Internship', 'Fear+Job Interview': 'Internship',
    'Internship+Success': 'Career', 'Success+Internship': 'Career',

    // Landmarks
    'Monument+City': 'Landmark', 'City+Monument': 'Landmark',
    'Stone+Monument': 'Pyramid', 'Monument+Stone': 'Pyramid',
    'Metal+Tall': 'Eiffel Tower', 'Tall+Metal': 'Eiffel Tower',
    'Green+Freedom': 'Statue of Liberty', 'Freedom+Green': 'Statue of Liberty',

    // Advanced concepts
    'Function+Function': 'Recursion', 'Recursion+Loop': 'Infinite Loop',
    'Recursion+Recursion': 'Stack Overflow', 'Stack Overflow+Fire': 'Panic',
    'Variable+Variable': 'Array', 'Array+Array': 'Matrix',
    'Class+Class': 'Inheritance', 'Inheritance+Computer': 'Polymorphism',
    'Data+Code': 'Program', 'Program+Computer': 'Software',
    'Boolean+Logic': 'Bit', 'Bit+Bit': 'Byte', 'Byte+Byte': 'Word',
    'Word+Word': 'Data', 'Data+Storage': 'Database',

    // Misc combinations for more items
    'Framework+Framework': 'Framework Fatigue', 'Framework Fatigue+Motivation': 'Career Change',
    'Code+Code': 'Project', 'Project+Fire': 'Burnout',
    'Coffee+Coffee': 'Energy Drink', 'Energy Drink+Code': 'Typing Speed',
    'Typing Speed+Keyboard': 'Mechanical Keyboard', 'Mechanical Keyboard+Pride': 'RGB Lighting',
    'RGB Lighting+Expensive': 'Hipster Developer', 'Hipster Developer+Latte': 'Startup',
    'Startup+Pitch': 'Investment', 'Investment+Failure': 'Bankrupt',
    'Bankrupt+Coffee': 'Instant Coffee', 'Instant Coffee+Regret': 'Career Change',
    'CS Student+Sleep': 'Myth', 'CS Student+Money': 'Debt', 'CS Student+Graduation': 'Suffering Complete',
    'Suffering Complete+Beer': 'Celebration', 'Celebration+Achievement': 'Success',
};

class Game {
    constructor() {
        this.discovered = new Set(STARTING_ELEMENTS);
        this.placedElements = new Map();
        this.draggedElement = null;
        this.dragOffset = { x: 0, y: 0 };
        this.elementCounter = 0;
        this.lastDropX = null;
        this.lastDropY = null;
        this.loadGame();
        this.init();
    }

    loadGame() {
        const saved = localStorage.getItem('littleAlchemy');
        if (saved) {
            this.discovered = new Set(JSON.parse(saved));
        }
    }

    saveGame() {
        localStorage.setItem('littleAlchemy', JSON.stringify([...this.discovered]));
    }

    init() {
        this.renderSidebar();
        this.setupEventListeners();
        document.getElementById('hintBtn').addEventListener('click', () => this.giveHint());
        document.getElementById('clearCanvasBtn').addEventListener('click', () => this.clearCanvas());
        document.getElementById('resetProgressBtn').addEventListener('click', () => this.resetProgress());
    }

    renderSidebar() {
        const list = document.getElementById('elementList');
        list.innerHTML = '';
        const sorted = Array.from(this.discovered).sort();
        sorted.forEach(element => {
            const div = document.createElement('div');
            div.className = 'element';
            div.draggable = true;

            const emoji = document.createElement('div');
            emoji.className = 'element-emoji';
            emoji.textContent = EMOJIS[element] || '✨';
            emoji.style.pointerEvents = 'none';

            const text = document.createElement('div');
            text.className = 'element-text';
            text.textContent = element;
            text.style.pointerEvents = 'none';

            div.appendChild(emoji);
            div.appendChild(text);
            div.addEventListener('dragstart', (e) => this.onDragStartSidebar(e, element));
            list.appendChild(div);
        });
        document.getElementById('discoveredCount').textContent = this.discovered.size;
    }

    onDragStartSidebar(e, element) {
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('element', element);
        e.dataTransfer.setData('source', 'sidebar');
    }

    setupEventListeners() {
        const canvas = document.getElementById('canvas');
        canvas.addEventListener('dragover', (e) => e.preventDefault());
        canvas.addEventListener('drop', (e) => this.onCanvasDrop(e));
    }

    onCanvasDrop(e) {
        e.preventDefault();
        const source = e.dataTransfer.getData('source');
        const element = e.dataTransfer.getData('element');
        const canvas = document.getElementById('canvas');

        this.lastDropX = e.clientX - canvas.getBoundingClientRect().left;
        this.lastDropY = e.clientY - canvas.getBoundingClientRect().top;

        if (source === 'sidebar') {
            this.placeElement(element, e.clientX, e.clientY);
        } else if (source === 'canvas') {
            const id = e.dataTransfer.getData('elementId');
            const placed = this.placedElements.get(id);
            if (placed) {
                placed.x = this.lastDropX - placed.width / 2;
                placed.y = this.lastDropY - placed.height / 2;
                this.renderCanvas();
                this.checkCombinations();
            }
        }
    }

    placeElement(element, x, y) {
        const canvas = document.getElementById('canvas');
        const rect = canvas.getBoundingClientRect();
        const id = `elem-${this.elementCounter++}`;

        const placed = {
            id,
            element,
            x: x - rect.left - 50,
            y: y - rect.top - 20,
            width: 100,
            height: 40
        };

        this.placedElements.set(id, placed);
        this.renderCanvas();
        this.checkCombinations();
    }

    renderCanvas() {
        const canvas = document.getElementById('canvas');
        canvas.querySelectorAll('.placed-element').forEach(el => el.remove());

        this.placedElements.forEach((placed) => {
            const div = document.createElement('div');
            div.className = 'placed-element';
            if (placed.animate) {
                div.classList.add('pop-in');
                placed.animate = false;
            }

            const emoji = document.createElement('div');
            emoji.className = 'placed-emoji';
            emoji.textContent = EMOJIS[placed.element] || '✨';
            emoji.style.pointerEvents = 'none';

            const text = document.createElement('div');
            text.className = 'placed-text';
            text.textContent = placed.element;
            text.style.pointerEvents = 'none';

            div.appendChild(emoji);
            div.appendChild(text);

            div.style.left = Math.max(0, Math.min(placed.x, canvas.clientWidth - placed.width)) + 'px';
            div.style.top = Math.max(0, Math.min(placed.y, canvas.clientHeight - placed.height)) + 'px';
            div.style.width = placed.width + 'px';

            div.draggable = true;
            div.addEventListener('dragstart', (e) => this.onDragStartCanvas(e, placed));
            div.addEventListener('dblclick', () => this.deleteElement(placed.id));

            canvas.appendChild(div);
        });
    }

    onDragStartCanvas(e, placed) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('source', 'canvas');
        e.dataTransfer.setData('elementId', placed.id);
    }

    deleteElement(id) {
        this.placedElements.delete(id);
        this.renderCanvas();
    }

    checkCombinations() {
        const elements = Array.from(this.placedElements.values());

        for (let i = 0; i < elements.length; i++) {
            for (let j = i + 1; j < elements.length; j++) {
                const e1 = elements[i];
                const e2 = elements[j];

                if (this.isNear(e1, e2)) {
                    const key = e1.element + '+' + e2.element;
                    const result = COMBINATIONS[key];

                    if (result && !this.discovered.has(result)) {
                        this.discovered.add(result);
                        this.saveGame();
                        this.renderSidebar();

                        this.placedElements.delete(e1.id);
                        this.placedElements.delete(e2.id);

                        const spawnX = this.lastDropX !== null ? this.lastDropX : (e1.x + e2.x) / 2;
                        const spawnY = this.lastDropY !== null ? this.lastDropY : (e1.y + e2.y) / 2;

                        const newId = `elem-${this.elementCounter++}`;
                        this.placedElements.set(newId, {
                            id: newId,
                            element: result,
                            x: spawnX - 50,
                            y: spawnY - 20,
                            width: 100,
                            height: 40,
                            animate: true
                        });

                        this.renderCanvas();
                        this.showFeedback(`✓ You created ${result}!`, 'success');
                    }
                }
            }
        }
    }

    isNear(e1, e2, distance = 120) {
        const dx = (e1.x + e1.width / 2) - (e2.x + e2.width / 2);
        const dy = (e1.y + e1.height / 2) - (e2.y + e2.height / 2);
        return Math.sqrt(dx * dx + dy * dy) < distance;
    }

    clearCanvas() {
        this.placedElements.clear();
        this.renderCanvas();
        this.showFeedback('🧹 Canvas cleared!', 'hint');
    }

    resetProgress() {
        if (confirm('Are you sure you want to erase all your progress?')) {
            this.discovered = new Set(STARTING_ELEMENTS);
            this.placedElements.clear();
            this.saveGame();
            this.renderSidebar();
            this.renderCanvas();
            this.showFeedback('🔄 Progress reset to starting elements!', 'hint');
        }
    }

    giveHint() {
        const discovered = Array.from(this.discovered);
        let validRecipes = [];

        for (const key in COMBINATIONS) {
            const [e1, e2] = key.split('+');
            const result = COMBINATIONS[key];

            if (discovered.includes(e1) && discovered.includes(e2) && !this.discovered.has(result)) {
                validRecipes.push({ e1, e2, result });
            }
        }

        if (validRecipes.length === 0) {
            this.showFeedback('💡 You\'ve discovered everything!', 'hint');
            return;
        }

        const recipe = validRecipes[Math.floor(Math.random() * validRecipes.length)];
        this.showFeedback(`💡 Try ${recipe.e1} + ${recipe.e2}...`, 'hint');
    }

    showFeedback(message, type) {
        const div = document.createElement('div');
        div.className = `toast ${type}`;
        div.textContent = message;
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 3000);
    }
}

const game = new Game();
