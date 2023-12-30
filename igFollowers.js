document.getElementById('submit-button').addEventListener('click', function() {
    var file1 = document.getElementById('file1').files[0];
    var file2 = document.getElementById('file2').files[0];

    if (!file1 || !file2) {
        alert("Please upload both files.");
        return;
    }

    Promise.all([readFile(file1), readFile(file2)]).then(([content1, content2]) => {
        const result = processFiles(content1, content2);
        displayResults(result);
    });
});

function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = e => reject(e);
        reader.readAsText(file);
    });
}

function processFiles(content1, content2) {
    const evenLines1 = extractEvenLines(content1);
    const evenLines2 = extractEvenLines(content2);

    const uniqueToFirst = evenLines1.filter(line => !evenLines2.includes(line));
    const uniqueToSecond = evenLines2.filter(line => !evenLines1.includes(line));

    return {
        uniqueToFirst,
        uniqueToSecond
    };
}

function extractEvenLines(content) {
    const lines = content.split('\n');
    return lines.filter((_, index) => (index % 2) !== 0);
}

function displayResults(result) {
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = '<h3>You dont follow them: </h3><p>' + result.uniqueToFirst.join('<br>') + '</p>';
    resultsElement.innerHTML += '<h3>They dont follow you: </h3><p>' + result.uniqueToSecond.join('<br>') + '</p>';
    const e = document.getElementById('urlLink2')
    e.style.visibility=true;
}

function showURL(){
    var URL = document.getElementById('urlLink2');
    URL.style.visibility = 'visible';
}
