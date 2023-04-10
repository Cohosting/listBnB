export const convertBedsDataToText = (bedsObject: any) => {
    let newText: any = []
    Object.keys(bedsObject.beds).forEach((key) => {
        if (bedsObject.beds[key] > 0) {
            newText.push(bedsObject.beds[key] + ' ' + key + ' ' + ' ' + 'beds')
        }

    });
    return newText.join(', ');

};