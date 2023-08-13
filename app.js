// getting-started.js
const mongoose = require('mongoose');
const ApiKeys = require('./schemas/Api-keys');
const Stocks = require('./schemas/Stocks');
const Alerts = require('./schemas/Alerts');
const Essentials = require('./schemas/Essentials');
const TeamsStocks = require('./schemas/TeamsStocks');
const Channels = require('./schemas/Channels');
const { sdk, database, DATABASE_NAME } = require("./db/appwrite");

// const main = async () => {
//     try {
//         //Connect to the database of mongodb 
//        await mongoose.connect("mongodb+srv://kostat:sQnwAtorUcaVqB1t@cluster0.tfmelcn.mongodb.net/documents");
       
//        //Get documents from the Appwrite 
//        await database.listDocuments("default",DATABASE_NAME.API_KEYS,[sdk.Query.limit(100)]).then(async (db) => {
//             if(db.total > 0) {
//                 for await (let obj of db.documents) {
//                     // const apikeys = new ApiKeys({
//                     //     key: obj.key,
//                     //     value: obj.value,
//                     //     iv: obj.iv
//                     // });

//                     // await apikeys.save().then(() => console.log("saved")).catch((err) => 
//                     // console.log(err));
                    
//                     // const stocks = new Stocks({
//                     //     symbol: obj.symbol, 
//                     //     fullname: obj.fullname, 
//                     //     is_active: obj["is_active"],
//                     //     stocktwits_last_updated: obj["stocktwits_last_updated"],
//                     //     yahoo_finance_stock_id: obj["yahoo_finance_stock_id"],
//                     //     yahoo_finance_last_updated: obj["yahoo_finance_last_updated"],
//                     //     twitter_first_message: obj["twitter_first_message"],
//                     //     twitter_last_message: obj["twitter_last_message"],
//                     //     twitter_last_updated: obj["twitter_last_updated"],
//                     //     reddit_last_updated: obj["reddit_last_updated"],
//                     //     reddit_official_channel: obj["reddit_official_channel"],
//                     //     stockhouse_last_updated: obj["stockhouse_last_updated"],
//                     //     discord_last_updated: obj["discord_last_updated"],
//                     //     telegram_last_updated: obj["telegram_last_updated"],
//                     //     subreddits_last_updated: obj["subreddits_last_updated"],
//                     //     search_in_twitter: obj["search_in_twitter"],
//                     //     determ_keyword_id: obj["determ_keyword_id"]
//                     // });


//                     // await stocks.save().then(() => console.log("saved")).catch((err) => 
//                     // console.log(err));     
//                 }
//             }   
//         }).catch(err => console.error(err));

    
//     } catch (err) {
//         console.error(err);
//     }
// }

// main();


const insertData = async () => {
    //Connect to the database of mongodb 
    await mongoose.connect("mongodb+srv://kostat:sQnwAtorUcaVqB1t@cluster0.tfmelcn.mongodb.net/documents");
    
    const documents = await getAllChannels();
    
    for await (const obj of documents) {
        // const channels = new Channels({
        //     platform: obj.platform,
        //     name: obj.name,
        //     notes: obj.notes,
        //     "symbols-array": obj["symbols-array"],
        //     priority: obj.priority
        // });
        
        // await channels.save().then(() => console.log("saved")).catch((err) => 
        // console.log(err)); 

        const alerts = new Alerts({
            stock: obj.stock,
            timestamp: obj.timestamp,
            color: obj.color,
            title: obj.title,
            message: obj.message,
            source: obj.source,
            link: obj.link,
            image: obj.image,
            timeRange: obj.timeRange
        });
        
        await alerts.save().then(() => console.log("saved")).catch((err) => 
        console.log(err)); 
    }
};



const getAllChannels = async () => {

    let channelsArray = [];
      
    let result=await getChannels();
    let k=0;
    //In Channel situations k enough to be until 4, in alert and essential situation it must be in loop 50
    while(result !=undefined && result.documents.length > 0 && k < 50){
      result=await getChannels(result.documents[result.documents.length-1].$id);
      channelsArray = channelsArray.concat(result.documents);
      k++;
    }
    console.log(channelsArray.length,'channelsArray');
    return channelsArray;
  };
  
  const getChannels = async (lastId=undefined, limit=100) => {
    let query=[];
    
    query.push(sdk.Query.limit(limit));
    
    if(lastId!=undefined)
    {
      query.push(sdk.Query.cursorAfter(lastId));
    }
    //In channel version
    // let result = await database.listDocuments("default", DATABASE_NAME.CHANNELS, query);
    //In Alert version
    let result = await database.listDocuments("default", DATABASE_NAME.ALERTS, query);

    return result;
  };

  insertData();


