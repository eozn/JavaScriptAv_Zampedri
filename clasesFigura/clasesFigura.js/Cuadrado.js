class Cuadrado extends Figura
{
  constructor(nombre, lado)
  {
    super(nombre);
    this.lado=lado;
  }

  calcularPerimetro()
  {
    if (this.lado>0)
      return this.lado*4
    else
      throw new Error("Lado < 0")
  }

  calcularSuperficie()
  {
    if (this.lado>0)
      return this.lado*this.lado
    else
      throw new Error("Lado < 0")
  }

  toString()
  {
    return super.toString()+`<br/>Lado  : ${this.lado}`
  }
}
