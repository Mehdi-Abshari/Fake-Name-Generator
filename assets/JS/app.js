function API(link) {
    return ( new Promise((resolve, reject) => {
      // Step 1: Create XHR object
      let xhr = new XMLHttpRequest();

      // Step 2: Open XHR
      xhr.open("GET", link, true);

      // Step 3: Load XHR
      xhr.onload = function () {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Not Found :)");
        }
      };
      // Step 4: Send XHR
      xhr.send();
    })
    )
  }

API();

console.log(API("https://api.namefake.com/english-states/male").then(
  (response)=>{console.log(response);}
));
