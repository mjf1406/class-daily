async function fetchCSV(filePath) {
    try {
        const response = await fetch(`${filePath}.csv`);
        const data = await response.text();
        return csvToJson(data);
    } catch (error) {
        console.error("Error fetching the CSV file:", error);
    }
}

function parseCSV(text) {
    var lines = text.split('\n');
    return lines.map(line => line.split(','));
}

function csvToJson(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',').map(header => header.trim()); // Using comma as the separator

    return lines.slice(1).map(line => {
        const values = line.split(',').map(value => value.trim());
        return headers.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
        }, {});
    });
}
