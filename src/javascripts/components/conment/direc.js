export default {
    //正则表
    regList: {
        SmsCode: /^\d{6}$/,
        /*短信正则*/
        Password: /(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}/,
        /*密码正则*/
        Mobile: /^[1][34578][0-9]{9}$/,
        /*手机号正则*/
        RealName: /^[\u4e00-\u9fa5 ]{2,10}$/,
        /*真实姓名正则*/
        WeiXin: /^[a-zA-Z\d_]{5,19}$/,

        BankNum: /^\d{10,19}$/,
        /*银行卡号正则*/
        Money: /^([1-9]\d*|0)$/,
        /*钱正则*/
        Mail: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ /*邮件正则*/
    },
    showErr(name, checkResult) {
        var type = checkResult[0],
            ext = checkResult[1] || [];

        var ERR_MSG = {
            nonvoid: `${name}不能为空`,
            reg: `${name}格式错误`,
            limit: `${name}必须在${ext[0]}与${ext[1]}之间`,
            equal: `两次${ext}不相同`,
            unique: `${name}重复`
        }
        //提示信息alert()
      alert(ERR_MSG[type]);
    },
    sync(_that, cb) { //负责绑定onchange事件
        let domList = document.querySelector(".va");
        if(!domList) return;

        /**
         * 禁止粘贴
         */
        domList.onpaste = (e) => {
            if(e.target.type === "password") { //密码框，禁止粘贴
                return false; //结束执行
            }
        }

        domList.addEventListener("input", (e) => { //这个是赋值操作
            let type = e.target.type;
            if(type === "tel" || type === "number") { //防止输入中文符号、特殊字符
                e.target.value = e.target.value.replace(/\D/g, '');
            }
            if(cb) cb(e.target);
        });

    },
    bind(cb) {
        let domList = document.querySelectorAll(".va input");
        for(let i = 0; i < domList.length; i++) {
            let dom = domList[i],
                name = dom.name,
                value = dom.value,
                msg = domList[i].getAttribute("data-tag"),
                va = domList[i].getAttribute("data-va").split(".");
            let _result = this.check(value, va, msg);
            if(_result.length > 0) {
                this.showErr(msg, _result);
                return;
            }
        }
        if(cb) cb("校验成功!");
    },
    sendSmsCode(dom, cb) {
        let va = dom.getAttribute("data-va").split("."),
            value = dom.value,
            msg = dom.getAttribute("data-tag");

        let _result = this.check(value, va, msg);
        if(_result.length > 0) {
            this.showErr(msg, _result);
            return;
        }
        if(cb) cb("手机号校验成功！");
    },
    check(v, va, msg) {
        let res = 0,
            cfg = {
                //非空
                nonvoid: (v, bool) => {
                    if(bool) {
                        return v.trim() ? 0 : ['nonvoid'];
                    } else {
                        return 0;
                    }
                },
                reg: (v, reg) => reg.test(v) ? 0 : ['reg'], //正则
            }

        //如果canNull有值，说明改输入框可以为空，但是有值之后需要校验正则
        res = (va[1] || []) === "canNull" ? (v ? 0 : 2) : cfg['nonvoid'](v, true); //验证是否为空

        if(!res) {
            res = cfg['reg'](v, this.regList[va[0]]); //验证正则
        }
        return res;
    }

}