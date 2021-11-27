const DOM = {
    render:(calback) => {
        let code = calback();
        document.body.innerHTML += code;
    }   
}

function format_css(code_json){
    var code = '';
    for (i in code_json){
        var afName = i
        var beName = ""
        for (l of afName){
            var upped = false
            for (ll of "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
                if (l === ll){
                    upped = true;
                    break
                }
    
            }
            if (upped){
                beName += "-" + String(l).toLowerCase()
            } else if (l == "_") {
                beName += "-"
            } else {
                beName += l
            }
            
        }
        var lowCode = `${beName}:${code_json[afName]};`
        code += lowCode
    }
    return (code)
}

function format_props(props){
    var code = ""
    for (i in props){
        var _c = "";
        if (i == "style"){
            const c = (format_css(props[i]))
            _c = `style="${c}"`

        } else if (String(i).startsWith("on")){
            let c = String(props[i]).split(" ")
            if (c.length == 1){
                _c = `${i}="${props[i]}"`
            
            }
        } else {
            _c = `${i}="${props[i]}"`
        }
        code += _c
    }
    return (code)
}

function format_code(a,tagName,props,...values){
    var code = "<"+`${tagName} ${format_props(props)}`    
    
    if (a == 0){
        code += ">"
    }

    for (i of values){
        code += i;
    }
    if (a == 0){
        code += "</"+`${tagName}>`
    } else {
        code += ">"

    }
    return code
}


function h1(props={},...values){
    var code = format_code(0,"h1",props,...values)
    return code
}  

function p(props={},...values){
    var code = format_code(0,"p",props,...values)
    return code
}   

function div(props={},...values){
    var code = format_code(0,"div",props,...values)
    return code
}   

function input(props={}){
    var code = format_code(1,"input",props,"")
    return code
}   

function button(props={},...values){
    var code = format_code(0,"button",props,values)
    return code
}   