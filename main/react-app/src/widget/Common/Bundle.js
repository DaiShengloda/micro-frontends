import React, { Component } from 'react'

/**
 * 懒加载组件的包装组件
 */
class Bundle extends Component {

    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    }

    componentWillMount() {
        this.load(this.props)//接收一个懒加载组件作为props，将懒加载组件此时的初始状态传入load方法进一步处理
    }

    componentWillReceiveProps(nextProps) {//有新懒加载组件，将其初始状态作为props传入时
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)//处理新懒加载组件
        }
    }

    load(props) {
        //重置状态
        this.setState({
            mod: null
        });
        //调用懒加载组件的load方法，触发组件的加载
        props.load((mod) => {
            //不管是es的模块管理方式（mod.default），还是commentjs的模块管理方式（mod），找到真正加载完成的组件对象，放入state中
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render() {
        return this.props.children(this.state.mod)//把加载完成的组件对象作为当前组件的子组件返回
    }
}

export default Bundle;