exports.handler = async (e, context) => {
    // const urlParams = new URLSearchParams(e.rawQuery);
    // const name = urlParams.get('name')
    // const skin = urlParams.get('skin')

    // // const url = `https://steamcommunity.com/market/search?appid=730&q${name} | ${skin}`
    // const url = `https://steamcommunity.com/market/search?appid=730&q=Galil+AR+%7C+Zimna+fuzja`
    // const encodedUrl = encodeURI(url)

    // const res = await axios.get(url)
    // const { data } = res
    return { statusCode: 200, success: true, body: JSON.stringify({e:2}) }
}