function createIterator( array )
{
  let currentIndex = 0;
  return{
    next: function(){
      return currentIndex < array.length ?
        { value: array[currentIndex++], done: false} :
        { done: true };
    }
  }
}

function *gen()
{
    let i=1;
    while (true)
    {
        yield i;
        i=i*2;
    }
}

function *fibonacci()
{
    let i=0;
    let anterior=i;
    let actual=i;

    while (true)
    {
        yield i;
        if (i==0)
        {
            i=1;
            anterior=0;
            actual=i;
        }
        else
          if(i==1 && anterior==0)
          {
            i=1;
            anterior=1;
            actual=1;
          }
          else
          {
            i=actual+anterior;
            anterior=actual;
            actual=i;
          }
      }
}
