import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function render(props: any) {
    const { container } = props;
    ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

// 单独启动
if (!(window as any).__POWERED_BY_QIANKUN__) {
    render({});
}

// 修改、导出微应用钩子
export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
    console.log('[react16] props from main framework', props);
    render(props);
}

export async function unmount(props: any) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
