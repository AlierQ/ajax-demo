// console.log('错误请求')

errorGet.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/test.htm'); // readystate = 1
    request.onreadystatechange = ()=>{
        console.log(request.readyState) // XMLHttpRequest代理状态
        if(request.readyState === 4){
            console.log('下载完成');
            console.log(request.status); // 请求状态码
            // 2开头的状态码都表示成功
            // 4、5开头通常表示失败
            if(request.status >= 200 && request.status < 300){
                // 创建div
                const div = document.createElement('div');
                // 将test.html内容放入div中
                div.innerHTML = request.response;
                // 插入到页面body中
                document.body.appendChild(div);
            }else{
                alert('加载html失败！')
            }
        }
    }
    request.send(); //readystate = 2
}