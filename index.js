const ask = require('./ask');
main().then(() => ask.close());

async function main() {

    console.log('hi');
    let ans = await(ask('How did it happen? '));
    console.log(`Answer ${ans}`);

}
