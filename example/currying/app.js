/*
 * @FileName: My file
 * @Author: Leinov
 * @Date: 2019-11-28 10:14:44
 * @LastEditTime: 2019-11-28 20:50:06
 * @Description: description your file
 * @FilePath: \Blog\examples\currying\app.js
 */
new Vue({
    el:'#app',
    
    data:{
       theme:[
        'Tomato',
        'Orange',
        'DodgerBlue',
        'MediumSeaGreen',
        'Gray',
        'SlateBlue',
        'Violet',
        'LightGray'
       ],
        getThemeUseNum: () => {},
        num1:0,
        num2:0,
        time1:0,
        time2:0,
        currentTheme: '#fff',
        code1:`
        // 柯里化处理
        function currying (list) {
            let obj = {};
            const themeList = this.list.map((item) => item.theme);
            themeList.forEach((item) => {
                if (!obj[item]) {
                    obj[item] = 1;
                } else {
                    obj[item] = obj[item] + 1;
                }
            });
            return (theme) => {
                if (theme in obj) {
                    return obj[theme];
                } else {
                    return 0;
                }
            }
        }`,
        code2: `
        // 非柯里化处理
        function noCurrying(theme) {
            const themeList = this.list.filter((item) => item.theme === theme);
            return themeList.length;
        }`
    },
    computed: {
        list() {
            const arr = new Array();
            for (var i = 1; i < 10001; i++) {
                const colorRandom = Math.floor(Math.random() * this.theme.length);
                arr.push({
                    id: i,
                    theme: this.theme[colorRandom]
                })
            }
            return arr;
        },
        pageLength() {
            return this.list.length;
        }
    },
    methods: {
        // 获取主题背景使用数量
        usedNum (theme, type) {
            this.currentTheme = theme;
            // 柯里化方式计算查询主题背景使用数量
            const start1 = performance.now();
            this.num1 = this.getThemeUseNum(theme);
            const end1 = performance.now();
            this.time1 = end1 - start1;
            
            // 普通方式计算查询主题背景使用数量
            const start2 = performance.now();
            this.num2 = this.noCurrying(theme);
            const end2 = performance.now();
            this.time2 = end2 - start2;
        },
        // 柯里化处理
        currying (list) {
            let obj = {};
            const themeList = this.list.map((item) => item.theme);
            themeList.forEach((item) => {
                if (!obj[item]) {
                    obj[item] = 1;
                } else {
                    obj[item] = obj[item] + 1;
                }
            });
            return (theme) => {
                if (theme in obj) {
                    return obj[theme];
                } else {
                    return 0;
                }
            }
        },
       // 非柯里化处理
       noCurrying(theme) {
        const themeList = this.list.filter((item) => item.theme === theme);
        return themeList.length;
       }
    },
    mounted() {
       this.getThemeUseNum = this.currying(this.list);
    },
})