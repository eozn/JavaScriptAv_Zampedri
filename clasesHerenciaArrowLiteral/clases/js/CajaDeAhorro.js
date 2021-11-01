class CajaDeAhorro extends Cuenta
{
  constructor(numero, saldo, interes)
  {
    super( numero, saldo );
    this.interes = interes;
  }

  getInteres()
  {
    return this.interes;
  }

  setInteres(interes)
  {
    this.interes = interes;
  }

  debitar(importe)
  {
    if ((this.saldo-importe) < 0)
    {
      document.write("</br></br>CA: Saldo no disponible");
    }
    else
    {
      this.saldo -= importe;
    }
  }

  toString()
  {
    return super.toString() + "<br/>Interes= " + this.interes;
  }
}
