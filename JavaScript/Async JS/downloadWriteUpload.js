function download(url, callback){
    console.log("Downloading from", url);
    setTimeout(()=>{
        console.log("Data downloaded...");
        let downloadedData = "some data";
        callback?.(downloadedData);
    }, 3000)
}

function write(data, file,  callback){
    console.log("Writing", data, "to", file);
    setTimeout(()=>{
        console.log("Data written to ", file);
        let status = "success";
        callback?.(file);
    }, 3000)
}

function upload(file, url, callback){
    console.log("Uploading", file, "to", url);
    setTimeout(()=>{
        console.log("Data uploaded...");
        let status = "success";
        callback?.(status);
    }, 3000)
}


function process(){
    download("www.google.com", function handleDownloadedData(data){
        write(data, "file.txt", function handleWrittenFile(file){
            upload(file, "www.website.com", function handleUpload(status){
                if(status){
                    console.log("All Done...");
                }
                else{
                    console.log("Some error occured");
                }
            })
        })
    })
}

process();