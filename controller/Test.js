class testController {
   static async test(ctx){
    
    let data = [];
    for(let i = 0;i<1000;i++){
        data.push({
            count: i + 1,
            time: new Date() + i,
        })
    }
    ctx.body = {
            msg: 'xxx',
            code: 200,
            status: 'ok',
            data,
            success: true,
        }
    }
}

module.exports = {
    testController,
};
