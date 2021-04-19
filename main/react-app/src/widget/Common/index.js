/**
 * Created by xiaolv on 20/1/16.
 */
import React from 'react'
import Bundle from './Bundle';
import Loading from 'widget/Loading/Loading';

//懒加载，加载成功后，会返回被加载的Component组件对象，输入参数component是import组件的路径
export const createBundle = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);