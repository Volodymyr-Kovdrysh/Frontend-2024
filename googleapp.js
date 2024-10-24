//main.gs

const idDb = '1pUmtkRFNZKZ-xVRYRbLm7NRglrwrXYBY7Shx5ff_rmc'

function doGet(request){
    const JSONString = JSON.stringify(getDataFromSpreadSheet())
    const JSONOutput = ContentService.createTextOutput(JSONString);
    JSONOutput.setMimeType(ContentService.MimeType.JSON);
    return JSONOutput
}

//utils.gs
function getDataFromSpreadSheet() {
    const res = {}
    const ss = SpreadsheetApp.openById(idDb)
    const sheet = ss.getSheetByName('feedbacks')
    const data = sheet.getDataRange().getValues()
    const headers = data[0]
    /**
     * @type {any[]}
     */
    res.feedbacks = data.slice(1).map(r => {
        const tmp = {}
        tmp.id = r[0]
        tmp.rating = r[1]
        tmp.text = r[2]
        return tmp
    })
    // console.log(JSON.stringify(res))
    return res
}
