// import getName from './training/practice_1';
// import reduceExample from './training/reduce';
import get from './utils/apiHelper';

  // const args = process.argv;
  // const res = args[2];
  // console.log(res);
  const data = get('http://localhost:3000/teams').then(data => {
    // console.log(data)
    return data;
  });

  const aFunction = async function() {
    const data = await get('http://localhost:3000/teams');
    console.log(`DATA: ${JSON.stringify(data)}`);
    return data;
  }
  const data1 = aFunction();
  console.log(`DATA 1: ${JSON.stringify(data1)}`);
