import * as fs from 'fs-extra';

function readFile() {
     fs.mkdirs('/tmp/some/long/path/that/prob/doesnt/exist', function(err){
          if (err) return console.error(err);
        
          console.log("success!")
        });
        
        fs.mkdirsSync('/tmp/another/path');
}

export {readFile};