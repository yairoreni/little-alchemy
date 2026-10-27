const STARTING_ELEMENTS = ['Fire', 'Water', 'Earth', 'Air'];

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
    'Tool+Plant': 'Wood',
    'Plant+Tool': 'Wood',
    'Stone+Tool': 'Axe',
    'Tool+Stone': 'Axe',
    'Fire+Life': 'Phoenix',
    'Life+Fire': 'Phoenix',
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
            div.textContent = element;
            div.draggable = true;
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
            div.textContent = placed.element;
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
