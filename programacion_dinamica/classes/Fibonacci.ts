export class Fibonacci {
  public result: number;

  private first: number;

  private second: number;

  constructor(number: number) {
    this.result = this.fibonacci(number);
  }

  private fibonacci = (number: number): number => {
    if (number <= 1) return number;

    this.first = 0;
    this.second = 1;

    this.result = this.first + this.second;

    for (let i = 2; i < number; i++) {
      this.first = this.second;
      this.second = this.result;
      this.result = this.first + this.second;
    }

    return this.result;
  };

  public getResult = () => this.result;
}
