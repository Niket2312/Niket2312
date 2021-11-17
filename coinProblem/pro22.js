var moneyToBeGiven,notes,money,newValue,sumCashDrawer=0;
var result=[],inCashDrawer=[];
var originalPrice=[['PENNY', 0.01], ['NICKEL', 0.05], 
['DIME', 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5.0],
 ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100],
 ["FIVE HUNDRED", 500]];

function giveMeSomeChange() {
    price=arguments[0];
    givenMoney=arguments[1];  
    money=(givenMoney-price);
    moneyToBeGiven=money;
    for(let value of Object.values(arguments[2])) {
        inCashDrawer.push(value);
    }
    for(let value of inCashDrawer) {
        sumCashDrawer+=value[1];
    }

    for(i=(originalPrice.length-1);i>=0;i--) {
        if((parseFloat((money).toFixed(2)))>=(parseFloat((originalPrice[i][1])))) {
            notes=Math.floor(money/originalPrice[i][1]);
            
            if(((notes*originalPrice[i][1]))>(inCashDrawer[i][1])) {
                newValue=(Math.round(inCashDrawer[i][1]/originalPrice[i][1]).toFixed(2));
                notes=newValue;
            }
            money-=(((notes*originalPrice[i][1])).toFixed(2));
            money = parseFloat(money.toFixed(2));
            
            if(((notes*originalPrice[i][1]))!=0) {
                
                result.push([originalPrice[i][0],
                    (notes*originalPrice[i][1]).toFixed(2),notes]);
            }
        }
    }
    
    if(money>0.01) {
        return  { status: "INSUFFICIENT_FUNDS", change: []};
    }
    if(sumCashDrawer==moneyToBeGiven) {
        return  { status: 'CLOSED', change: result};
    } else {
        return  { status: 'OPEN', change: result};
    }
}

console.log(giveMeSomeChange(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], 
["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], 
["TWENTY", 60], ["ONE HUNDRED", 100]]));