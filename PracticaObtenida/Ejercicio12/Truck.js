class Truck extends Vehicle
{
  constructor( wheels, topSpeed, chargeCapacity )
  {
    super(wheels, topSpeed)
    this.chargeCapacity = chargeCapacity;
  }
}
