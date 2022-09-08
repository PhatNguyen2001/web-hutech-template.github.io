function send(){
    
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var email = arr[1].value;
    var mess = arr[2].value;
    if(name =="" || email =="" || mess =="" ){
        alert("Vui lòng nhập đầy đủ thông tin ");
    }
    confirm('Đã lưu thông tin của bạn \n' +name+'\n' +email +'\n' +mess );
}