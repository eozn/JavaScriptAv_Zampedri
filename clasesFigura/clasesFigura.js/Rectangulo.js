class Rectangulo extends Figura
{
  constructor(nombre, base, altura)
  {
    super(nombre);
    this.base=base;
    this.altura=altura;
  }

  calcularPerimetro()
  {
    if (this.base>0)
      if (this.altura>0)
        return (this.base*2)+(this.altura*2)
      else
        throw new Error("Altura < 0")
    else
      throw new Error("Base < 0")
  }

  calcularSuperficie()
  {
    if (this.base>0)
      if (this.altura>0)
        return this.base*this.altura
      else
        throw new Error("Altura < 0")
    else
      throw new Error("Base < 0")
  }

  toString()
  {
    return super.toString()+`<br/>Base  : ${this.base}
                             <br/>Altura: ${this.altura}`
  }
}
