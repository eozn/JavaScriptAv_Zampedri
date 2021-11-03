class Circulo extends Figura
{
  constructor(nombre, radio)
  {
    super(nombre);
    this.radio=radio;
  }

  calcularPerimetro()
  {
    if (this.radio > 0)
      return this.radio*2*Math.PI
    else
      throw new Error("Radio < 0")
  }

  calcularSuperficie()
  {
    if (this.radio > 0)
      return Math.PI*((this.radio)**2)
    else
      throw new Error("Radio < 0")
  }

  toString()
  {
    return super.toString()+`<br/>Radio : ${this.radio}`
  }
}
