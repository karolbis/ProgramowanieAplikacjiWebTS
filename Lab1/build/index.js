var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.dArray = [];
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInput();
        this.i0Input = document.querySelector('#i0');
        this.icontainer = document.getElementById("icontainer");
        this.watchInputValues();
    };
    StatsApp.prototype.createInput = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g;
        while ((_a = this.icontainer) === null || _a === void 0 ? void 0 : _a.hasChildNodes()) {
            (_b = this.icontainer) === null || _b === void 0 ? void 0 : _b.removeChild((_c = this.icontainer) === null || _c === void 0 ? void 0 : _c.lastChild);
            this.dArray = [];
            var temp_1 = "0";
            this.sumInput.value = temp_1;
            this.avgInput.value = temp_1;
            this.minInput.value = temp_1;
            this.maxInput.value = temp_1;
        }
        var temp = +this.i0Input.value;
        var _loop_1 = function (i) {
            var p = document.createElement("label");
            p.textContent = "Value: ";
            p.id = "label" + (i + 1);
            (_d = this_1.icontainer) === null || _d === void 0 ? void 0 : _d.appendChild(p);
            input = document.createElement("input");
            input.type = "text";
            input.id = "input" + (i + 1);
            input.className = "input";
            (_e = this_1.icontainer) === null || _e === void 0 ? void 0 : _e.appendChild(input);
            button = document.createElement("button");
            button.textContent = "Delete";
            button.id = (i + 1).toString();
            button.addEventListener('click', function () {
                if (_this.icontainer.childElementCount > 4) {
                    var d = document.getElementById("input" + (i + 1));
                    var l = document.getElementById("label" + (i + 1));
                    var b = document.getElementById((i + 1).toString());
                    var dd = document.getElementById("icontainer");
                    dd.removeChild(d);
                    dd.removeChild(l);
                    dd.removeChild(b);
                    var val = +(_this.i0Input.value) - 1;
                    _this.i0Input.value = val.toString();
                    var brbr = document.getElementById("br" + (i + 1));
                    dd.removeChild(brbr);
                    _this.dArray.splice(i, 1);
                    _this.computeData();
                }
                else {
                    alert("There must be at least one input");
                }
            });
            (_f = this_1.icontainer) === null || _f === void 0 ? void 0 : _f.appendChild(button);
            br = document.createElement("br");
            br.id = "br" + (i + 1);
            (_g = this_1.icontainer) === null || _g === void 0 ? void 0 : _g.appendChild(br);
        };
        var this_1 = this, input, button, br;
        for (var i = 0; i < temp; i++) {
            _loop_1(i);
        }
        this.getInput();
        this.watchInputValues();
    };
    StatsApp.prototype.getInput = function () {
        this.i0Input = document.querySelector('#i0');
        this.icontainer = document.getElementById("icontainer");
        if (this.icontainer.hasChildNodes()) {
            for (var i = 0; i < +this.i0Input.value; i++) {
                var temp = "#input" + (i + 1);
                this.dArray.push(document.querySelector(temp));
            }
        }
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        var _a;
        this.i0Input.addEventListener('input', function () { return _this.createInput(); });
        if (this.icontainer.hasChildNodes()) {
            for (var i = 0; i < +this.i0Input.value; i++) {
                (_a = this.dArray[i]) === null || _a === void 0 ? void 0 : _a.addEventListener('input', function () { return _this.computeData(); });
            }
        }
    };
    StatsApp.prototype.computeData = function () {
        var datArray = [];
        var sum = 0;
        for (var i = 0; i < +this.i0Input.value; i++) {
            datArray[i] = +this.dArray[i].value;
            sum += datArray[i];
        }
        var avg = sum / +this.i0Input.value;
        var min = Math.min.apply(Math, datArray);
        var max = Math.max.apply(Math, datArray);
        this.showStats(sum, avg, min, max);
    };
    StatsApp.prototype.showStats = function (sum, avg, min, max) {
        if (!isNaN(sum) || isNaN(avg) || isNaN(min) || isNaN(max)) {
            var el = document.getElementById('hid');
            var el1 = document.getElementById('lSum');
            var el2 = document.getElementById('lAvg');
            var el3 = document.getElementById('lMin');
            var el4 = document.getElementById('lMax');
            var elGood = document.getElementById('correct');
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
        else {
            var el = document.getElementById('hid');
            var el1 = document.getElementById('lSum');
            var el2 = document.getElementById('lAvg');
            var el3 = document.getElementById('lMin');
            var el4 = document.getElementById('lMax');
            var elGood = document.getElementById('correct');
            elGood.style.visibility = "visible";
            el.style.visibility = "hidden";
            el1.style.visibility = "hidden";
            el2.style.visibility = "hidden";
            el3.style.visibility = "hidden";
            el4.style.visibility = "hidden";
        }
    };
    return StatsApp;
}());
var statsApp = new StatsApp();
