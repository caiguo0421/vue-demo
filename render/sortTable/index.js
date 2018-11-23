var app = new Vue({
    el: "#app",
    data: {
        columns: [
            {
                title: "姓名",
                key: "name"
            }, {
                title: "年龄",
                key: "age",
                sortable: true
            }, {
                title: "生日",
                key: "birthday",
                sortable: true
            }, {
                title: "家庭地址",
                key: "address"
            },
        ],
        data: [
            {
                name: '王小明',
                age: 18,
                birthday: '1999-12-11',
                address: "北京门头沟"
            },
            {
                name: '张晓华',
                age: 21,
                birthday: '1999-12-11',
                address: "武汉汉阳"
            }, {
                name: '李晓红',
                age: 23,
                birthday: '1985-12-11',
                address: "武汉汉阳"
            }, {
                name: '周晓鸥',
                age: 21,
                birthday: '2000-12-11',
                address: "武汉汉阳"
            },
        ]
    },
    methods: {
        handleAddData: function () {
            this.data.push({
                name: "蔡国新",
                age: 19,
                birthday: '1985-04-21',
                address: '湖北省武汉市'
            });
        }
    }
});