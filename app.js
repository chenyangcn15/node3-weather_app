const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//console.log(process.argv[2])

const location = process.argv[2]
if (!location)
{
    return console.log('please provide a location')
}

geocode(location,(error, response) => {
    if(error)
    {
        return console.log(error)
    }
    const lat = response.lat
    const lon = response.lon
    const loc = response.loc
    forecast(lat, lon, (error, fdata) => {
        if(error) 
        {
            return console.log(error)
        }
        console.log(loc)
        console.log(fdata)
      })
})

