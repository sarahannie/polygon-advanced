const fs = require('fs');
const path = require('path');
console.log(__dirname);

for (let i = 1; i <= 5; i++) {

  // Creates a JSON object for each NFT
  const json = {
      name: `Annie NFT #${i}`,
      description: `South Eastern Queen #${i}`,
      image: `https://gateway.pinata.cloud/ipfs/QmZbuRwZuEsmjHVUc5wFYek83GCqAj72xjKJGrBmkaeb1u/${i}.jpeg`
  };

  // Writes the JSON object to a file
  fs.writeFileSync(
    path.join(__dirname, 'collection', String(i)),
    JSON.stringify(json)
  );
}
