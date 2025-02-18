export class Fibonacci {
  public result: number;

  private first: number;

  private second: number;

  constructor(number: number) {
    this.setResult(this.fibonacci(number));
  }

  private fibonacci = (number: number): number => {
    if (number <= 1) return number;

    this.setFirst(0);
    this.setSecond(1);

    this.setResult(this.first + this.second);

    for (let i = 2; i < number; i++) {
      this.setFirst(this.second);
      this.setSecond(this.result);
      this.setResult(this.first + this.second);
    }

    return this.getResult();
  };

  public getResult = () => this.result;

  private setResult = (result: number) => (this.result = result);

  private setFirst = (first: number) => (this.first = first);

  private setSecond = (second: number) => (this.second = second);
}
