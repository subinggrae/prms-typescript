class Mountain {
  constructor(public name: string, private height: number) {
    this.name = name;
    this.height = height;
  }
  
  guide() {
    console.log(`이 산은 ${this.name}이고 높이는 ${this.height}미터입니다.`);
  }
}

const hallasan = new Mountain('한라산', 1947.06);
console.log(hallasan);
hallasan.guide();