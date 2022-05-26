broj="025468";
broj1="";
for(i=0;i<broj.length;i++)
{
    broj1+=broj[i];
    if(broj[i]%2===0 && broj[i+1]%2===0)
    {
        broj1+="-"
    }
}
console.log(broj);
console.log(broj1);