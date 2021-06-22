class StatsApp {
    d0Input: HTMLInputElement;
    dArray: HTMLInputElement[] = [];
    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;

    i0Input: HTMLInputElement;
    icontainer: HTMLElement;

    constructor (){
        this.startApp();
    }
    startApp(){
        this.getInput()
        this.i0Input = document.querySelector('#i0');
        this.icontainer = document.getElementById("icontainer");
        this.watchInputValues();
    }

    createInput(){
        while(this.icontainer?.hasChildNodes()){
            this.icontainer?.removeChild(this.icontainer?.lastChild);
            this.dArray = [];
            const temp:string = "0";
            this.sumInput.value = temp;
            this.avgInput.value = temp;
            this.minInput.value = temp;
            this.maxInput.value = temp;
        }
        const temp = +this.i0Input.value;

        for(let i = 0; i < temp; i++ ){
            const p = document.createElement("label");
            p.textContent="Value: ";
            p.id = "label" + (i + 1);
            this.icontainer?.appendChild(p);

            var input = document.createElement("input");
            input.type = "text";
            input.id = "input" + (i + 1);
            input.className = "input";
            this.icontainer?.appendChild(input);

            var button = document.createElement("button");
            button.textContent = "Delete";
            button.id = (i + 1).toString();

            button.addEventListener('click',() => {
                if(this.icontainer.childElementCount>4){
                    var d = document.getElementById("input"+(i + 1));
                    var l = document.getElementById("label"+(i + 1));
                    var b = document.getElementById((i + 1).toString());
                    var dd = document.getElementById("icontainer");

                    dd.removeChild(d);
                    dd.removeChild(l);
                    dd.removeChild(b);

                    const val = +(this.i0Input.value)-1;
                    this.i0Input.value = val.toString();
                    var brbr = document.getElementById("br"+(i+1));
                    dd.removeChild(brbr);

                    this.dArray.splice(i,1);
                    this.computeData();
                }
                else{
                    alert("There must be at least one input");
                }
            });

            this.icontainer?.appendChild(button);

            var br = document.createElement("br")
            br.id = "br"+(i + 1);
            this.icontainer?.appendChild(br);
        }
        this.getInput();
        this.watchInputValues();
    }

    getInput(){
        this.i0Input = document.querySelector('#i0');
        this.icontainer = document.getElementById("icontainer");

        if(this.icontainer.hasChildNodes()){
            for(var i = 0; i < +this.i0Input.value; i++){
                const temp = "#input" + (i+1);

                this.dArray.push(document.querySelector(temp))
            }
        }

        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }

    watchInputValues(){
        this.i0Input.addEventListener('input', () => this.createInput());
        if(this.icontainer.hasChildNodes()){
            for(var i = 0; i < +this.i0Input.value; i++){
                this.dArray[i]?.addEventListener('input', () => this.computeData());
            }
        }
    }

    computeData(){
        var datArray:number[]= [];
        var sum:number = 0;
        for(var i = 0; i< +this.i0Input.value; i++){
            datArray[i] = +this.dArray[i].value;
            sum += datArray[i];
        }
        const avg = sum / +this.i0Input.value;
        const min = Math.min.apply(Math, datArray);
        const max = Math.max.apply(Math, datArray);
        this.showStats(sum, avg, min, max);
    }

    showStats(sum: number, avg: number, min: number, max: number){
        if(!isNaN(sum) || isNaN(avg) || isNaN(min) || isNaN(max)){
            var el = document.getElementById('hid');
            var el1 = document.getElementById('lSum');
            var el2 = document.getElementById('lAvg');
            var el3 = document.getElementById('lMin');
            var el4 = document.getElementById('lMax');

            var elGood = document.getElementById('correct')
            elGood.style.visibility = "hidden";

            el.style.visibility = "visible";
            el1.style.visibility = "visible";
            el2.style.visibility = "visible";
            el3.style.visibility = "visible";
            el4.style.visibility = "visible";

            this.sumInput.value = sum.toString();
            this.avgInput.value = avg.toString();
            this.minInput.value = min.toString();
            this.maxInput.value = max.toString();
        }
        else{
            var el = document.getElementById('hid');
            var el1 = document.getElementById('lSum');
            var el2 = document.getElementById('lAvg');
            var el3 = document.getElementById('lMin');
            var el4 = document.getElementById('lMax');

            var elGood = document.getElementById('correct')
                elGood.style.visibility = "visible";

            el.style.visibility = "hidden";
            el1.style.visibility = "hidden";
            el2.style.visibility = "hidden";
            el3.style.visibility = "hidden";
            el4.style.visibility = "hidden";
        }
    }
}

const statsApp = new StatsApp();
