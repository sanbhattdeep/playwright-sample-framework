import winston,{Logger, transports} from 'winston';
import Utils from './utils';

export default class Logging {

    private logger:Logger;

    private timestamp_format = winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss.SSS'
          }),
        winston.format.align(),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
      );

    
    public  getLogger() {
        return this.logger;
    }

    public setLogTransport(fileName:string) {
      const logFileName = `logs/${fileName}_${(new Date().toJSON().slice(0,10))}.log`
        const options = {
            transports: [ new winston.transports.File({ 
                filename: logFileName,
                maxsize: 1024000,
                format: this.timestamp_format
          })
        ]
        }
       this.logger = winston.createLogger(options);
    }
}