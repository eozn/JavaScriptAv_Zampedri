class Mansion extends Casa
{
  constructor( address, floors, dwells )
  {
  super( address, floors );
  this.dwells = dwells;
  }

  setDwells(dwells)
  {
    this.dwells = dwells;
  }
}
