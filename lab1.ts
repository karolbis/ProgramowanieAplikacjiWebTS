class AppControl {
  InputData1: HTMLInputElement;
  InputData2: HTMLInputElement;
  InputData3: HTMLInputElement;
  InputData4: HTMLInputElement;

  InputSUM:  HTMLInputElement;
  InputAVG:  HTMLInputElement;
  InputMIN:  HTMLInputElement;
  InputMAX:  HTMLInputElement;
  constructor() {
      this.start();
  }

start(){
    this.FilledData();
 }
}

FilledData() {
this.InputData1 = document.querySelector('#Data1');
this.InputData2 = document.querySelector('#Data2');
this.InputData3 = document.querySelector('#Data3');
this.InputData4 = document.querySelector('#Data4');

this.InputSUM = document.querySelector('#sum');
this.InputAVG = document.querySelector('#avg');
this.InputMIN = document.querySelector('#min');
this.InputMAX = document.querySelector('#max');


}

//DeleteField() {}

//