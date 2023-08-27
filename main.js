const promise = new Promise ((resolve, reject) => {
  const errorIndicator = false  ;

  setTimeout(() => {
   if (!errorIndicator) {
    const jsonData = {
      username: 'Ali',
      userage: 16,
    };

    const strJsonData = JSON.stringify(jsonData);
    console.log(strJsonData);

    resolve(strJsonData);
   } else {
    reject('Oops something went wrong');
   }
  }, 2000);
});

promise
.then((data) => {
  console.log(data);
  setTimeout(() => {
   const parseData = JSON.parse(data);
    console.log(parseData);
  }, 2000)
})
 .catch(() => {
  console.log('Preparing data...');
 })