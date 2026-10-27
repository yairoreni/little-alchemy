const STARTING_ELEMENTS = ['Fire', 'Water', 'Earth', 'Air'];

const EMOJIS = {
    // Starting
    'Fire': '🔥',
    'Water': '💧',
    'Earth': '🌍',
    'Air': '💨',
    // Basic elements
    'Steam': '💨',
    'Mud': '🤎',
    'Lava': '🌋',
    'Energy': '⚡',
    'Rain': '🌧️',
    'Dust': '💨',
    'Cloud': '☁️',
    'Storm': '⛈️',
    'Lightning': '⚡',
    'Stone': '🪨',
    'Metal': '🔗',
    'Wood': '🪵',
    'Ash': '💨',
    'Plant': '🌿',
    'Seed': '🌱',
    'Life': '🧬',
    'Earthquake': '🌪️',
    'Sword': '⚔️',
    'Axe': '🪓',
    'Phoenix': '🦅',
    // CS/University themed
    'Computer': '💻',
    'Code': '💻',
    'Keyboard': '⌨️',
    'Mouse': '🖱️',
    'Book': '📚',
    'Homework': '📖',
    'Test': '📝',
    'Exam': '😰',
    'Grade': '📊',
    'A+': '🎓',
    'F': '😭',
    'Burnout': '🔥',
    'Coffee': '☕',
    'Sleep': '😴',
    'Procrastination': '🐢',
    'All-nighter': '🌙',
    'Professor': '👨‍🏫',
    'Lecture': '🎤',
    'Confusion': '🤔',
    'Understanding': '💡',
    'Bug': '🐛',
    'Feature': '✨',
    'GitHub': '🐙',
    'Git': '🐙',
    'Deployment': '🚀',
    'Error': '❌',
    'Debug': '🔍',
    'AI': '🤖',
    'ChatGPT': '🤖',
    'LLM': '🧠',
    'API': '🔌',
    'Server': '🖥️',
    'Network': '🌐',
    'Database': '🗄️',
    'Algorithm': '📐',
    'Data Structure': '📦',
    'Runtime': '⏱️',
    'Compile': '⚙️',
    'Terminal': '⌨️',
    'Sudo': '👑',
    'Hack': '🔓',
    'Firewall': '🛡️',
    'Password': '🔐',
    'Token': '🎫',
    'Crypto': '💰',
    'Blockchain': '🔗',
    'NFT': '🖼️',
    'Web3': '🌐',
    'Framework': '🏗️',
    'Library': '📚',
    'Package': '📦',
    'npm': '📦',
    'JavaScript': '📜',
    'Python': '🐍',
    'Java': '☕',
    'C++': '⚙️',
    'Rust': '🦀',
    'Go': '🐹',
    'Node.js': '🟢',
    'React': '⚛️',
    'Vue': '💚',
    'Angular': '🔴',
    'Database': '🗄️',
    'SQL': '🗄️',
    'NoSQL': '🗄️',
    'Regex': '🧩',
    'Loop': '🔄',
    'Recursion': '🪆',
    'Variable': '📝',
    'Function': 'ƒ',
    'Class': '📦',
    'Object': '🎁',
    'Array': '📊',
    'Memory Leak': '💧',
    'Null Pointer': '➡️',
    'Stack Overflow': '🏔️',
    'Deadline': '⏰',
    'Presentation': '🎯',
    'Hackathon': '🏃',
    'Internship': '💼',
    'Job Interview': '🎤',
    'Salary Negotiation': '💰',
    'Tech Talk': '🎧',
    'Open Source': '🌍',
    'Contribution': '🤝',
    'Pull Request': '📬',
    'Code Review': '👀',
    'Merge Conflict': '⚠️',
    'Rebase': '📚',
    'Commit': '✅',
    'Push': '📤',
    'Pull': '📥',
    'Clone': '📋',
    'Fork': '🍴',
    'Star': '⭐',
    'Issue': '🐛',
    'Release': '🎉',
    // Missing items from combinations
    'Product': '📦',
    'Dependency Hell': '🔥',
    'Rage Quit': '😤',
    'Fear': '😨',
    'Deploy': '🚀',
    'Review': '👀',
    'Inheritance': '👨‍👩‍👧',
    'Polymorphism': '🎭',
    'Nested Loop': '🔄',
    'Frontend': '🎨',
    'Backend': '⚙️',
    'Full Stack': '🏔️',
    'Crash': '💥',
    'Panic': '😱',
    'State Management': '🧩',
    'Simplicity': '✨',
    'Motivation': '💪',
    'Happiness': '😊',
    'Latte': '☕',
    'Beer': '🍺',
    'Myth': '🦄',
    'Debt': '💳',
    'Suffering Complete': '😩',
    'Celebration': '🎉',
    'Query': '🔍',
    'SQL Injection': '💉',
    'Madness': '🤪',
    'Crypto': '💰',
    'Lost Money': '🪦',
    'Security Breach': '🔓',
    'Password123': '🔑',
    'Hacked Account': '😱',
    'Singularity': '🌌',
    'Academic Dishonesty': '📵',
    'Unemployment': '😭',
    'Framework Fatigue': '😔',
    'Career Change': '🚀',
    'JavaScript': '📜',
    'Impossible': '🤯',
    'Complexity': '🌀',
    'Pain': '🔥',
    'npm Hell': '🔥',
    'Breaking Changes': '💔',
    'Disaster': '🌪️',
    'On-call': '📞',
    'Survival': '💪',
    'Energy Drink': '⚡',
    'Typing Speed': '⌨️',
    'Mechanical Keyboard': '⌨️',
    'Pride': '🦁',
    'Rgb Lighting': '🌈',
    'Hipster Developer': '😎',
    'Startup': '🚀',
    'Pitch': '🎯',
    'Investment': '💵',
    'Bankrupt': '📉',
    'Instant Coffee': '☕',
    'CS Student': '👨‍🎓',
    'Tool': '🔧',
    'Deploy': '🚀',
};

const COMBINATIONS = {
    'Fire+Water': 'Steam',
    'Water+Fire': 'Steam',
    'Earth+Water': 'Mud',
    'Water+Earth': 'Mud',
    'Fire+Earth': 'Lava',
    'Earth+Fire': 'Lava',
    'Fire+Air': 'Energy',
    'Air+Fire': 'Energy',
    'Water+Air': 'Rain',
    'Air+Water': 'Rain',
    'Earth+Air': 'Dust',
    'Air+Earth': 'Dust',
    'Steam+Air': 'Cloud',
    'Air+Steam': 'Cloud',
    'Rain+Dust': 'Mud',
    'Dust+Rain': 'Mud',
    'Energy+Mud': 'Life',
    'Mud+Energy': 'Life',
    'Life+Earth': 'Plant',
    'Earth+Life': 'Plant',
    'Plant+Water': 'Seed',
    'Water+Seed': 'Plant',
    'Seed+Earth': 'Plant',
    'Fire+Plant': 'Ash',
    'Plant+Fire': 'Ash',
    'Ash+Water': 'Mud',
    'Water+Ash': 'Mud',
    'Cloud+Cloud': 'Storm',
    'Storm+Energy': 'Lightning',
    'Lightning+Earth': 'Earthquake',
    'Lava+Water': 'Stone',
    'Water+Lava': 'Stone',
    'Stone+Fire': 'Metal',
    'Fire+Stone': 'Metal',
    'Metal+Fire': 'Sword',
    'Fire+Metal': 'Sword',
    'Fire+Life': 'Phoenix',
    'Life+Fire': 'Phoenix',

    // CS/University themed combinations
    'Energy+Dust': 'Computer',
    'Computer+Metal': 'Keyboard',
    'Computer+Dust': 'Mouse',
    'Computer+Computer': 'Network',
    'Network+Computer': 'Server',
    'Book+Fire': 'Homework',
    'Homework+Sleep': 'A+',
    'Sleep+Sleep': 'Burnout',
    'Coffee+Code': 'Bug',
    'Bug+Bug': 'Feature',
    'Fire+Code': 'Error',
    'Error+Computer': 'Debug',
    'Debug+Bug': 'Feature',
    'Feature+Feature': 'Product',
    'Product+Keyboard': 'Code',
    'Code+Code': 'Algorithm',
    'Algorithm+Computer': 'AI',
    'AI+Computer': 'ChatGPT',
    'ChatGPT+Code': 'LLM',
    'Computer+Water': 'Server',
    'Server+Server': 'Network',
    'Network+Metal': 'API',
    'API+Code': 'Framework',
    'Framework+Keyboard': 'Library',
    'Library+Computer': 'Package',
    'Package+Package': 'Dependency Hell',
    'Homework+Fire': 'Stress',
    'Stress+Coffee': 'All-nighter',
    'All-nighter+Exam': 'Burnout',
    'Professor+Book': 'Lecture',
    'Lecture+Confusion': 'Understanding',
    'Confusion+Code': 'Bug',
    'Understanding+Computer': 'Feature',
    'Feature+Deploy': 'Release',
    'Release+Test': 'Presentation',
    'Presentation+Stress': 'Job Interview',
    'Job Interview+Fear': 'Internship',
    'Internship+Computer': 'Tech Talk',
    'Tech Talk+Coffee': 'Hackathon',
    'Code+Keyboard': 'Commit',
    'Commit+Network': 'Push',
    'Push+Pull': 'Merge Conflict',
    'Merge Conflict+Coffee': 'Rage Quit',
    'Commit+Book': 'Git',
    'Git+Network': 'GitHub',
    'GitHub+Feature': 'Pull Request',
    'Pull Request+Review': 'Code Review',
    'Code Review+Stress': 'Burnout',
    'Open Source+Contribution': 'Star',
    'Star+Star': 'Fame',
    'GitHub+Keyboard': 'Open Source',
    'Open Source+Computer': 'Contribution',
    'Debug+Algorithm': 'Recursion',
    'Recursion+Recursion': 'Stack Overflow',
    'Stack Overflow+Fire': 'Panic',
    'Panic+Coffee': 'All-nighter',
    'Variable+Computer': 'Memory Leak',
    'Memory Leak+Water': 'Crash',
    'Crash+Computer': 'Error',
    'Function+Function': 'Recursion',
    'Class+Class': 'Inheritance',
    'Inheritance+Computer': 'Polymorphism',
    'Array+Keyboard': 'Loop',
    'Loop+Loop': 'Nested Loop',
    'Nested Loop+Deadline': 'Panic',
    'Deadline+Code': 'Crunch Time',
    'Crunch Time+All-nighter': 'Burnout',
    'Database+Metal': 'SQL',
    'SQL+Code': 'Query',
    'Query+Error': 'SQL Injection',
    'Regex+Confusion': 'Madness',
    'Token+Crypto': 'Blockchain',
    'Blockchain+NFT': 'Web3',
    'Web3+Confusion': 'Lost Money',
    'Hack+Firewall': 'Security Breach',
    'Password+Password': 'Password123',
    'Password123+Time': 'Hacked Account',
    'AI+AI': 'Singularity',
    'ChatGPT+Homework': 'A+',
    'ChatGPT+Exam': 'Academic Dishonesty',
    'ChatGPT+Job': 'Unemployment',
    'Framework+Framework': 'Framework Fatigue',
    'Framework Fatigue+Motivation': 'Career Change',
    'Node.js+JavaScript': 'Backend',
    'Backend+Frontend': 'Full Stack',
    'Full Stack+Sleep': 'Impossible',
    'React+State Management': 'Complexity',
    'Vue+Simplicity': 'Happiness',
    'Angular+Learning Curve': 'Pain',
    'Package+Package': 'npm Hell',
    'npm Hell+Update': 'Breaking Changes',
    'Breaking Changes+Production': 'Disaster',
    'Disaster+Weekend': 'On-call',
    'On-call+Coffee': 'Survival',
    'Coffee+Coffee': 'Energy Drink',
    'Energy Drink+Code': 'Typing Speed',
    'Typing Speed+Keyboard': 'Mechanical Keyboard',
    'Mechanical Keyboard+Pride': 'Rgb Lighting',
    'Rgb Lighting+Expensive': 'Hipster Developer',
    'Hipster Developer+Latte': 'Startup',
    'Startup+Pitch': 'Investment',
    'Investment+Failure': 'Bankrupt',
    'Bankrupt+Coffee': 'Instant Coffee',
    'Hebrew University+Computer': 'CS Student',
    'CS Student+Sleep': 'Myth',
    'CS Student+Money': 'Debt',
    'CS Student+Graduation': 'Suffering Complete',
    'Suffering Complete+Beer': 'Celebration',
};

class Game {
    constructor() {
        this.discovered = new Set(STARTING_ELEMENTS);
        this.placedElements = new Map();
        this.draggedElement = null;
        this.dragOffset = { x: 0, y: 0 };
        this.elementCounter = 0;
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

        if (source === 'sidebar') {
            this.placeElement(element, e.clientX, e.clientY);
        } else if (source === 'canvas') {
            const id = e.dataTransfer.getData('elementId');
            const placed = this.placedElements.get(id);
            if (placed) {
                placed.x = e.clientX - document.getElementById('canvas').getBoundingClientRect().left - placed.width / 2;
                placed.y = e.clientY - document.getElementById('canvas').getBoundingClientRect().top - placed.height / 2;
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

    showFeedback(message, type) {
        const div = document.createElement('div');
        div.className = `feedback ${type}`;
        div.textContent = message;
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 2000);
    }
}

const game = new Game();
