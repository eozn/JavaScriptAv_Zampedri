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

  debitar(saldo)
  {
    if ((this.saldo-saldo) < 0)
    {
      document.write("</br>");
      document.write("</br>CA: Saldo no disponible");
    }
    else
    {
      this.saldo -= saldo;
    }
  }
}
