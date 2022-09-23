1. Find the Smaller Angle
 ans 

 var Minimal_Angle = (h, m) => 
 {    if(h!=12)
    { let Hangle= (h*5*6)+(m*0.5),
         Mangle= (m*6)
       return Math.abs(Hangle-Mangle)
    }
    else 
     return 0
 };
  
2.  Check whether the year is Leap year or not.
ans 
 
var Check_Leap = (year) => 
{  
 
    if(year%100==0)
     {   
       if(year%400==0)
       return 'Leap Year'
       else 
       return 'Non Leap Year'
     }
    else 
    {
      if(year%4==0)
      return 'Leap Year'
    
      else 
      return 'Non Leap Year'
    }
  
  

};
 
3. Perfect Number Check.
ans
 
var Perfect_Check = (N) => 
{
      sum=0
      if(N!=1)
      {
      for(let i=1;i<N;i++)
      {
        if(N%i==0)
        sum+=i
      }
      if(sum==N)
      return 'YES'
      else 
      return 'NO'
      }
      else
      return 'YES'
};
 

4. Reverse a Number.
 ans 

  
var Reverse_Number = (N) => 
{   let a,b=0
  while(N!=0)
  {
    a=N%10
    b=b*10+a
    N=parseInt(N/10)
  }
   return b
};
 

5. Substring Check.
ans 


var Substring_Check = (S1, S2) => 
{   let a
    a=S1.split(" ")
    for(let i of a)
    {
      if(i==S2)
      return 'YES'
    }
    return 'NO'
};
 
