function _focus(id){
    const input = document.getElementById(id)
    // input.style.borderBottom = "1px red";
    const affColor = input.style.border
    const affBorderR = input.style.borderRadius
    input.style.borderBottom = "1.5px solid #02477be9"
    input.style.borderRadius = "5px 5px 2px 2px"
    input.addEventListener("focusout",() => {
        input.style.borderBottom = affColor
        input.style.borderRadius = affBorderR

    })
}


const text = (props={},value) => {
    return h1(
        {...props},
        value
    )
}

const Input = (props,props2) => {
    // p(props,values)
    // input(props)
    const t=props.text ||  ""
    delete props.text
    return (
        p(props,t)+input(props2)
    )
}

const Main = () => {
    return (
        div(
            Style.div,
            text(Style.text,"Fazer Login"),
            Input({text:"Email"},{
                id:"input1",
                onfocus:`_focus('input1')`
            }),
            Input({text:"Senha"},{
                id:"input2",
                onfocus:`_focus('input2')`
            }),
            button({},"Login")
        )   
    )
}

const Style = {
    div:{
        id:"main-div",
    },
    text:{
        id:"text"
    },
}

DOM.render(Main)