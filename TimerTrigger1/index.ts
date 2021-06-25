import { AzureFunction, Context } from "@azure/functions"
import SftpClient from 'ssh2-sftp-client';

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('Timer function is running late!');
    }
    context.log('Timer trigger function ran!!!!!!', timeStamp);

    if (1 == 1) {}

    if (2==2){}

    const config = {
        host: '1.1.1.1',
        username: 'root',
        password: 'password',
        port: 22,
    };

    const sftpLocal: SftpClient = new SftpClient();
    await sftpLocal.connect(config);
};

const endsWith = (a: string, b: string) =>{
    return a.lastIndexOf(b) === a.length - b.length
}

export default timerTrigger;
