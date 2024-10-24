//main.gs

const idDb = '1pUmtkRFNZKZ-xVRYRbLm7NRglrwrXYBY7Shx5ff_rmc'
const ss = SpreadsheetApp.openById(idDb)
const sheet = ss.getSheetByName('feedbacks')

function GET(){
    const res = getDataFromSpreadSheet()


    return res
}


function POST(obj){
    const {id, rating, text, email} = obj



    sheet.appendRow([id, rating, text, email])


    return GET()
}

function DELETE(id){

    const victimRowID = sheet.getDataRange().getValues().map((r,idx) => [idx + 1, ...r]).filter(r => r[1].toString() === id.toString())[0][0]

    sheet.deleteRow(victimRowID)

    return GET()
}


function PUT(obj){

    const {id, rating, text} = obj

    const targetRowID = sheet.getDataRange().getValues().map((r,idx) => [idx + 1, ...r]).filter(r => r[1].toString() === id.toString())[0][0]

    sheet.getRange(targetRowID,2,1,2).setValues([[rating, text]])

    return GET()
}


function doGet(request){

    const {method, id, rating, text, email} = request.parameter

    if (method === 'GET'){
        const JSONString =  JSON.stringify(GET())
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput

    }

    if (method === 'POST'){
        const JSONString =  JSON.stringify(POST({id, rating, text, email}))
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput

    }
    if (method === 'DELETE'){
        const JSONString =  JSON.stringify(DELETE(id))
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput

    }
    if (method === 'PUT'){
        const JSONString =  JSON.stringify(PUT({id, rating, text}))
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput

    }


    const JSONString =  JSON.stringify({msg: "Something bad!"}) //JSON.stringify(getDataFromSpreadSheet())
    const JSONOutput = ContentService.createTextOutput(JSONString);
    JSONOutput.setMimeType(ContentService.MimeType.JSON);
    return JSONOutput
}


//
//utils.gs
//


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
