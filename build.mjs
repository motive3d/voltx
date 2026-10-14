import {mkdir,copyFile,cp,readFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','app.js'])await copyFile(file,'dist/'+file);
await cp('assets','dist/assets',{recursive:true});
await copyFile('.nojekyll','dist/.nojekyll');
const html=await readFile('dist/index.html','utf8');
if(!html.includes('https://maps.app.goo.gl/YGhTV4H22DHaj17P6'))throw Error('Maps URL missing');
console.log('Static production build ready in dist/');
