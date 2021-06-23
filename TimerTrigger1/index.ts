import { AzureFunction, Context } from "@azure/functions"

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('Timer function is running late!');
    }
    context.log('Timer trigger function ran!!!!!!', timeStamp);   
};

const endsWith = (a: string, b: string) =>{
    return a.lastIndexOf(b) === a.length - b.length
}

export default timerTrigger;
