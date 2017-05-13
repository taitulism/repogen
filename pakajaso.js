const path = require('path');
const fs   = require('fs');

const read = fs.readFile;
const write = fs.writeFile;
const join = path.join;

function pakajaso (pkgJsonPath, prop, a, b) {
	let key, value;

	if (!b) {
		value = a;
	}
	else {
		key = a;
		value = b;
	}

	// 1. Read package.json
	read(pkgJsonPath, 'utf8', (err, str) => {
		if (err) throw err;

		// JSON.parse
		const obj = tryJSONParse(str);

		if (obj) {
	// 2. Operation
			// get or set? if value then set
			if (typeof value === 'undefined') {
				console.log('GET results:', obj[prop]);
				process.exit(0);
			}
			else {
				if (Array.isArray(obj[prop])) {
					obj[prop].push(value);
				}
				else if (typeof obj[prop] === 'object') {
					obj[prop][key] = value;
				}
				else {
					obj[prop] = value;
				}
				
				// JSON.stringify
				const str = tryJSONStringify(obj, null, 2);

				if (str) {
	// 3. Write package.json
					write(pkgJsonPath, str, (err, x) => {
						if (err) throw err;
					});
				}
			}
		}
	})
}

function tryJSONParse (...args) {
	let obj;

	try {
		obj = JSON.parse(...args)
	}
	catch (err) {
		console.log('PJ ERROR: json source file is invalid.', args[0]);
		console.log(err);
		obj = false;
	}

	return obj;
}

function tryJSONStringify (...args) {
	let str;

	try {
		str = JSON.stringify(...args)
	}
	catch (err) {
		console.log('PJ ERROR: your value is json invalid. ', args[0]);
		console.log(err);
		str = false;
	}

	return str;
}


const args = process.argv.slice(2);

pakajaso(...args);