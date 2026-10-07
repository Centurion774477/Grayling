
var filesystem = require('fs');

if (process.argv.length < 4) {
    console.log("Please provide a file to read and a file to write.");
    return;
}

var fileToRead = process.argv[2];
var fileToCreate = process.argv[3];

if (filesystem.existsSync(fileToRead) == false) {
    console.log(`Failed to locate ${fileToRead} in this context.`);
    return;
}

var data = null;

try {
    data = filesystem.readFileSync(fileToRead, 'utf8');
} catch (error) {
    console.error(error);
}

if (data == null) {
    console.log(`${fileToRead} is empty.`);
    return
}

var newLines = [];

var lines = data.split('\n').filter(line => line != "");

lines.forEach(line => {
    newLines.push(line
        .replaceAll("<p>", "")
        .replaceAll("</p>", "")
        .replaceAll("<h1>", "")
        .replaceAll("<h2>", "")
        .replaceAll("<h3>", "")
        .replaceAll("<h4>", "")
        .replaceAll("<h5>", "")
        .replaceAll("<h6>", "")
        .replaceAll("</h1>", "")
        .replaceAll("</h2>", "")
        .replaceAll("</h3>", "")
        .replaceAll("</h4>", "")
        .replaceAll("</h5>", "")
        .replaceAll("</h6>", "")
        .replaceAll("<br>", "\n").trim());
});

filesystem.writeFileSync(
    fileToCreate, newLines.join("\n")
);

console.log(`Great! Your new file can be found at ${fileToCreate}`);
console.log(
    "\n" +
    "Did you know Finland didn't gain independence until 1917?\n" +
    "That's 141 years after the US did."
);