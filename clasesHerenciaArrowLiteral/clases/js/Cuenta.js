class Cuenta
{
  constructor( numero, saldo )
  {
  this.numero = numero;
  this.saldo = saldo;
  }

  getNumero()
  {
    return this.numero;
  }

  getSaldo()
  {
    return this.saldo;
  }

  setNumero(numero)
  {
    this.numero = numero;
  }

  setSaldo(saldo)
  {
    this.saldo = saldo
  }

  acreditar(importe)
  {
    this.saldo += importe;
  }

  debitar(importe)
  {
    this.saldo -= importe;
  }

  toString()
  {
    return `<br/>Numero=  ${this.numero}
            <br/>Saldo =  ${this.saldo }`;
  }
}
