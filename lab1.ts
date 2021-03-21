export class InputWatcher {
    constructor(inputs) {
        this.inputs = [...inputs];
        this.attachEventListeners();
        this.getResultElements();
        console.log(this);
    }
    getResultElements() {
        const results = [
            ...document.querySelector('.resultsContainer')
                ?.children,
        ].map((el) => ({ name: el.className, element: el }));
        this.results = Object.values(results);
    }
    attachEventListeners() {
        this.inputs.forEach((element) => element.addEventListener('input', () => this.calculateValues()));
    }
    calculateValues() {
        const nodeValues = [
            ...this.inputs,
        ].map(({ value }) => (value ? +value : 0));
        const sum = nodeValues.reduce((acc, value) => (acc += value));
        const average = sum / this.inputs.length;
        const min = Math.min(...nodeValues);
        const max = Math.max(...nodeValues);
        this.insertValues(sum, average, min, max);
    }
    insertValues(sum, average, min, max) {
        this.results.forEach((el) => {
            switch (el.name) {
                case 'sum':
                    el.element.textContent = sum.toString();
                    break;
                case 'average':
                    el.element.textContent = average.toString();
                    break;
                case 'min':
                    el.element.textContent = min.toString();
                    break;
                case 'max':
                    el.element.textContent = max.toString();
                    break;
                default:
                    break;
            }
        });
    }
}
