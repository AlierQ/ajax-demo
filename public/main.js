console.log("AJAX Demo");


let n = 1;

// AJAX引入CSS
getCss.addEventListener('click',()=>{
    // 创建一个请求对象
    const request = new XMLHttpRequest();
    // 与服务器建立连接
    request.open('GET','/style.css',true)
    // 请求成功处理
    request.onload = ()=>{
        console.log('请求资源成功');
        console.log('请求响应内容:\n',request.response);

        // 创建一个style标签放入内容
        let style = document.createElement('style');
        style.innerHTML = request.response
        document.head.appendChild(style);
    }
    // 请求失败处理
    request.onerror = ()=>{
        console.log('请求资源失败');
    }
    // 发送请求
    request.send()
})


getJs.addEventListener('click',()=>{
    // 创建一个请求对象
    const request = new XMLHttpRequest();
    // 与服务器建立连接
    request.open('GET','/test.js',true)
    // 请求成功处理
    request.onload = ()=>{
        console.log('请求资源成功');
        console.log('请求响应内容:\n',request.response);

        // 创建一个script标签放入js内容
        let script = document.createElement('script');
        script.innerHTML = request.response
        document.body.appendChild(script);
    }
    // 请求失败处理
    request.onerror = ()=>{
        console.log('请求资源失败');
    }
    // 发送请求
    request.send()
})

getHTML.addEventListener('click',()=>{
    // 创建一个请求对象
    const request = new XMLHttpRequest();

    // 建立连接
    request.open('GET','/test.html')
    // 请求成功处理
    request.onload = ()=>{
        console.log('请求资源成功');
        console.log('请求响应内容:\n',request.response);
        // 创建div
        const div = document.createElement('div');
        // 将test.html内容放入div中
        div.innerHTML = request.response;
        // 插入到页面body中
        document.body.appendChild(div);
    }   
    // 请求失败处理
    request.onerror = ()=>{
        console.log('请求资源失败');
    }
    // 发送send
    request.send()
})


getXML.onclick = ()=>{
    const request = new XMLHttpRequest();

    request.open('GET','test.xml');
    request.send();
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <= 300)
            {
                // responseXML 返回的是一个document对象
                let dom = request.responseXML;
                // 可以使用dom操作
                let text = dom.getElementsByTagName('warning')[0].textContent

                console.log(text);
            }
        }
    }
}


getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();

    request.open('GET','test.json')

    request.send()

    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200)
        {
            console.log(request.response);
            // JSON.parse 把字符串转成object对象
            // JSON.stringify 对象转化成json
            let obj =  JSON.parse(request.response)
            console.log(obj);
            data.textContent = obj.name;
        }
    }
}


next.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/page' + (n+1));
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li = document.createElement('li')
                li.textContent = item.id
                ppp.appendChild(li);
            })
            n++;
        }
    }
    request.send();
}