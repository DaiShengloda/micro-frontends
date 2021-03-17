import _ from 'lodash'
import '@/assets/style/style.css'

function component() {
    let element = document.createElement('div');
  
    // 动态导入
    // const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
    element.innerHTML = _.join(['Hello', 'webpack', 'typescript'], ' ');
    element.classList.add('hello');

    return element;
}

let element = component();
document.body.appendChild(element);  