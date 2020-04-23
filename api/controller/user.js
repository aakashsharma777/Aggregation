var Population=require('../model/PopulationModel') // schema

module.exports.registercity=(request,response)=>{
    var city=request.body.city;
    var year=request.body.year;
    var population=request.body.population;
    var popul = Population({
        city:city,
        year:year,
        population:population
    })
    popul.save(function (err, result) {
        console.log(result);
            if (err)
            response.json({msg:'Data Not Inserted',description:err})
            else if(result.city!=undefined)
            response.json({msg:'Data Inserted'})
            else
           response.json({msg:'Data NOT Inserted'})
          });

}

module.exports.addpopulation=(request,response)=>{
    var city=request.body.city;
    var year=request.body.year;
    var population=request.body.population;
    Population.findOneAndUpdate({city:city},{year:year,$add:{population:population}},(err)=>{
        if (err)
        response.json({'msg':'Data Not Updated'})
        else
        response.json({'msg':'Data Updated'})

    })
    
}
