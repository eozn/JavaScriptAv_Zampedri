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

  acreditar(saldo)
  {
    this.saldo += saldo;
  }

  debitar(saldo)
  {
    this.saldo -= saldo;
  }

  toString(){
    return `<br/>numero= ${this.numero}
            <br/>saldo = ${this.saldo}`;
  }
}
