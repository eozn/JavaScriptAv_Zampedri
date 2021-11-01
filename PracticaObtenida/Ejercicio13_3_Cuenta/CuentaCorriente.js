class CuentaCorriente extends Cuenta
{
  constructor(numero, saldo, descubierto)
  {
    super(numero, saldo);
    this.descubierto = descubierto;
  }

  getDescubierto()
  {
    return this.descubierto;
  }

  setDescubierto(descubierto)
  {
    this.descubierto = descubierto;
  }

  debitar(importe)
  {
    if (((this.saldo + this.descubierto)-importe) < 0)
    {
      document.write("</br>");
      document.write("</br>CC: Saldo no disponible");
    }
    else
    {
      this.saldo -= importe;
    }
  }
}
