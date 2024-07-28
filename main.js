const btn = document.getElementById('#btn');
 btn.addEventListener('click', ()=>{
     let file = "/file/test.pdf"
     let link = document.createElement('a');
     
     link.href = file;
     link.download = "test.pdf"
     
     link.click();
 })