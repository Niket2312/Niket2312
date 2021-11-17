var Penny=0.01;
var Nickel=0.05;
var Dime=0.1;
var Quarter=0.25;
var Dollar=1;
var FiveDollars=5;
var TenDollars=10;
var TwentyDollars=20;
var hundredDollars=100;
var status='';
var text="[";
var price=19.5;
var givenMoney=100;
var diff=sum=0;
var remain,sub,notes,mul,money;
var arr=[];
var result=result1=[];
var inCashDrawer=[];


var arr1=[['PENNY', 0], ['NICKEL', 0], ['DIME', 0], ["QUARTER", 0],
 ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
var arr2=[['PENNY', 0.01], ['NICKEL', 0.05], ['DIME', 0.1],
 ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5.0], ["TEN", 10], ["TWENTY", 20],
  ["ONE HUNDRED", 100],["FIVE HUNDRED", 500]];
var a1,a2,a3,b1;

function giveMeSomeChange()
{
    price=arguments[0];
    givenMoney=arguments[1];
    sub=(givenMoney-price);
    money=sub;
    console.log(arguments);
    for(let value of Object.values(arguments[2])) {
        arr.push(value);
    }
    for(let value1 of arr)
    {
        sum+=value1[1];
    }
    console.log(sum);
    for(var i=0;i<arguments[2].length;i++) {
       
    }
    for(i=0;i<arr1.length;i++){
        
        console.log(arr1[i]);
    }

    if(givenMoney>price)
    {
        diff=givenMoney-price;
        
        { 
            for(i=(arr2.length-1);i>=0;i--)
            {
                if((parseFloat((money).toFixed(2)))>=(parseFloat((arr2[i][1]))))
                {
                    mul=(money%arr[i][1])
                    notes=Math.floor(money/arr2[i][1]);
                    console.log((notes));
                    if(((notes*arr2[i][1]))>(arr[i][1]))
                    {
                        a1=(arr[i][1].toFixed(2));
                        a2=(Math.round(arr[i][1]/arr2[i][1]).toFixed(2));
                       
                        notes=a2;
                    }
                    money-=(((notes*arr2[i][1])).toFixed(2));
                    money = parseFloat(money.toFixed(2));
                    
                    text+='["'+arr2[i][0]+'",'+(notes*arr2[i][1])+"]";
                    if(((notes*arr2[i][1]))!=0)
                    {
                        
                        result.push([arr2[i][0],(notes*arr2[i][1]).toFixed(2),notes]);
                    }
                    console.log(money);
                    
                }
                console.log(arr2[i][1]);
                console.log(result);
            }
            
        }
    }
    text+=']';
    console.log(sum.toFixed(2));
    if(money>0.01)
    {
       
        return  { status: "INSUFFICIENT_FUNDS", change: []};
    }
    if(sum==sub)
    {
        return  { status: 'CLOSED', change: result};
    }
    else
    {
        return  { status: 'OPEN', change: result};
    }
    
    console.log(text);
    
    console.log(money);
}

console.log(giveMeSomeChange(5.4, 1500, [["PENNY", 100.01],
 ["NICKEL", 200.05], ["DIME", 300.1], ["QUARTER", 404.25],
  ["ONE", 100], ["FIVE", 5000], ["TEN", 1000], ["TWENTY", 100],
   ["ONE HUNDRED", 0],["FIVE HUNDRED", 1000]]));