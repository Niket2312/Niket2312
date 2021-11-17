function rot13()
{
    var input=document.getElementById('input').value;
    let arr=[];
    var text='';
    var checknum,maintain;
    for(var i=0;i<input.length;i++)
    {
        if(input.charCodeAt(i)>=0 && input.charCodeAt(i)<=64)
        {
            arr.push(input.charCodeAt(i));
        }
        if(input.charCodeAt(i)>=65 && input.charCodeAt(i)<=90)
        {
            checknum=(input.charCodeAt(i)+13);
            if(checknum>90)
            {
                maintain=checknum-90+64;
                arr.push(maintain);
            }
            else
            {
                arr.push(input.charCodeAt(i)+13);
            }
            
        }
        if(input.charCodeAt(i)>=97 && input.charCodeAt(i)<=122)
        {
            checknum=(input.charCodeAt(i)+13);
            if(checknum>122)
            {
                maintain=checknum-122+96;
                arr.push(maintain);
            }
            else
            {
                arr.push(input.charCodeAt(i)+13);
            }
        }
    }
    for(i=0;i<arr.length;i++)
    {
        text+=String.fromCharCode(arr[i]);
    }
    console.log(text);
}