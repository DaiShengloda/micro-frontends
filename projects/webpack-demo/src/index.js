// import _ from 'lodash'
import '@/assets/style/style.css'
import sg from '@/assets/images/sg.png'
import { say } from '@/assets/js/util.js'

console.log('NODE_ENV', process.env.NODE_ENV)

function component() {
    let element = document.createElement('div');
  
    // 动态导入
    // const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 图片
    var myIcon = new Image();
    myIcon.src = sg;
    element.appendChild(myIcon);

    // 按钮
    var btn = document.createElement('button');
    btn.innerHTML = '按钮'
    btn.onclick = say;
    element.appendChild(btn);

    return element;
}

let element = component();
document.body.appendChild(element);  

// if (module.hot) {
//     module.hot.accept('@/assets/js/util.js', function() {
//         console.log('Accepting the updated printMe module!');
//         document.body.removeChild(element);
//         element = component(); // Re-render the "component" to update the click handler
//         element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
//         document.body.appendChild(element);
//     })
// }

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration)
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError)
        })
    })
}