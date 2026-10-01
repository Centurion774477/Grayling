
const filesystem = require('fs');

let data = null;

const fileToRead = process.argv[2];
const fileToCreate = process.argv[3];

console.log(fileToRead, fileToCreate)

if (filesystem.existsSync(fileToRead) === false) {
    console.log(`Failed to locate ${fileToRead} in this context.`);
    return;
}

try {
    data = filesystem.readFileSync(fileToRead, 'utf8');
} catch (error) {
    console.error(error);
}

if (data == null) {
    console.log(`No data was found in ${fileToRead}`);
    return
}

let newLines = [];

lines = data.split('\n');

for (let line of lines) {
    if (line === "") {
        continue;
    }

    const changed_line = line
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
        .replaceAll("<br>", "\n");

    newLines.push(
        changed_line.trim()
    );
}

newLines = newLines.join("\n");

filesystem.writeFileSync(
    fileToCreate, newLines
);

console.log(`Great! Your new file can be found at ${fileToCreate}`);
console.log(
    "\n" +
    "Did you know Finland didn't gain independence until 1917?\n" +
    "That's 141 years after the US did."
);