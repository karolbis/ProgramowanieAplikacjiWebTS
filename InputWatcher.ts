interface IResults {
	name: string;
	element: Element;
}

export class InputWatcher {
	inputs: Element[];
	results!: IResults[];

	constructor(inputs: NodeListOf<Element>) {
		this.inputs = [...inputs];
		this.attachEventListeners();
		this.getResultElements();
	}

	getResultElements() {
		const results = [
			...(document.querySelector('.resultsContainer')
				?.children as HTMLCollection),
		].map((el) => ({ name: el.className, element: el }));

		this.results = Object.values(results);
	}

	attachEventListeners() {
		this.inputs.forEach((element) =>
			element.addEventListener('input', () => this.calculateValues())
		);
	}

	calculateValues() {
		const nodeValues = [
			...(this.inputs as HTMLInputElement[]),
		].map(({ value }) => (value ? +value : 0));

		const sum = nodeValues.reduce((acc, value) => (acc += value));

		const average = sum / this.inputs.length;

		const min = Math.min(...nodeValues);
		const max = Math.max(...nodeValues);

		this.insertValues(sum, average, min, max);
	}

	insertValues(sum: number, average: number, min: number, max: number) {
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
