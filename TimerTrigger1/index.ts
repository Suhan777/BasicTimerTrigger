import { AzureFunction, Context } from "@azure/functions"

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('Timer function is running late!');
    }
    context.log('Timer trigger function ran!!!!!!', timeStamp);

    if (1 == 1) {}

    if (2==2){}

    const secret = "thisisthebestsecretever!123"
    const client_secret = "dontleakthistoanyone"
};

const endsWith = (a: string, b: string) =>{
    return a.lastIndexOf(b) === a.length - b.length
}

export default timerTrigger;
