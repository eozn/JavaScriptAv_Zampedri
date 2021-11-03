class Triangulo extends Figura
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
        return ((this.altura**2)+((this.base/2)**2))**(1/2)
      else
        throw new Error("Altura < 0")
    else
      throw new Error("Base < 0")
  }

  calcularSuperficie()
  {
    if (this.base>0)
      if (this.altura>0)
        return (this.altura*this.base)/2
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
