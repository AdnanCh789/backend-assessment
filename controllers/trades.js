const {Trade} = require('../models/trades')


exports.getTrades = async(req, res)=>{
    const trades =await Trade.findAll()
    if(trades) {
        res.status(200).send({res : trades})
    }
    }


    exports.getTradeByID = async(req, res)=>{
        const tradeId = req.params.id;

        const trade = await User.findByPk(tradeId)
        if(trade) {
            res.status(200).send({res : trade})
        }
        }

exports.createTrade = async(req, res)=>{

const reqData = req.body;
const newTrade =await Trade.create(reqData)

if(newTrade) {
    res.status(200).send({res : newTrade})
}

}

exports.updateTrade = async(req, res)=>{

//assuming trade id in req obect
    const tradeID = req.body.id;
//finf by id
const reqData = req.body;

    const trade = await User.findByPk(tradeID)

    if(trade) {

     const updatedTrade =  await User.update(
            reqData, // New data to be updated
            {
              where: {
                id: tradeID, // Specify the condition to identify the record to update (in this case, where id = 1)
              },
            }
          )

          if(updatedTrade) {
            res.status(200).send({res : updatedTrade})
        }
    }
    else {
        res.status(404).send({message : "Trade Not found"})

    }
    }

    exports.deleteTrade = async(req, res)=>{

        //assuming trade id in req obect
            const tradeID = req.body.id;
        //finf by id
      
        
            const trade = await User.findByPk(tradeID)
        
            if(trade) {
        
             const updatedTrade =  await User.destroy(
                    {
                      where: {
                        id: tradeID, 
                      },
                    }
                  )
        
                  if(updatedTrade) {
                    res.status(200).send({message : "Successfully deleted"})
                }
            }
            else {
                res.status(404).send({message : "Trade Not found"})
        
            }
            }