import winston,{Logger, transports} from 'winston';

export default class Logging {

    private logger:Logger;

    private timestamp_format = winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
      );

    
    public  getLogger() {
        return this.logger;
    }

    public setLogTransport(fileName:string) {
        const options = {
            transports: [ new winston.transports.File({ 
                filename: `logs/${fileName}.log`,
                maxsize: 1024,
                format: this.timestamp_format
          })
        ]
        }
       this.logger = winston.createLogger(options);
    }
}