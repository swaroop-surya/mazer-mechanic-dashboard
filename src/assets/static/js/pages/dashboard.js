fetch('/data.json')
.then(res => {
    console.log(res);
    return res.text();
})
.then(data => console.log(data));