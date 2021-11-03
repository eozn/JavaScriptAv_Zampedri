class Figura
{
  constructor(nombre)
  {
    this.nombre = nombre;
  }

  calcularPerimetro(){}
  calcularSuperficie(){}

  toString()
  {
    return `<br/>Nombre: ${this.nombre}`
  }
}
