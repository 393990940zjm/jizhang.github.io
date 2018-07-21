$('#zdmx').bootstrapTable({
	dataType: 'json',
	method: "GET",
	pagination: true,
	pageNumber: 1,
	pageSize: 15,
	pageList: [10, 25, 50, 100],
	uniqueId: "id",
	columns: [{
		field: "date",
		align: 'center',
		title: '日期',
	}, {
		field: 'type',
		align: 'center',
		title: '类型'
	}, {
		field: 'mx',
		align: 'center',
		title: '分支'
	}, {
		field: 'money',
		align: 'center',
		title: '费用'
	}, {
		field: 'user',
		align: 'center',
		title: '姓名'
	}],
	onLoadSuccess: function(data) {
		//console.log(data);  
	}
})
var data=[];
for(var i=0;i<20;i++){
	var result={};
	result.date="2018-07-21 12:12:12";
	result.type="支出";
	result.mx="化妆品";
	result.money=23;
	result.user="张三";
	data.push(result);
}
	

$('#zdmx').bootstrapTable('load',data)





var data2 = [
    {"value": 26, "name": "日用品"}, 
    {"value": 16.7, "name": "游戏"}, 
    { "value": 12.4, "name": "化妆品"},
    {"value": 12.2, "name": "首饰"}, 
    {"value": 8.4, "name": "服装"},
    { "value": 7.6, "name": "电影"}, 
    {"value": 5.9, "name": "餐饮"},
    {"value": 3.6, "name": "学习"},
    { "value": 2.9, "name": "路费"},
    {"value": 2.2, "name": "旅游"},
    {"value": 1.7, "name": "罚款"},
    {"value": 0.4, "name": "其他"}
];


data_name = [];
for (var n  in data2){
    data2[n]['name'] = data2[n]['name'] + ' '+data2[n]['value'] +'%';
    data_name.push(data2[n]['name'])
}


var myChart = echarts.init(document.getElementById('echats'));		
option = {
    title: {
        text: '支出类别占比',
        left: '50%',
        textAlign: 'center',
        textStyle: {
            color: "#000",
            fontWeight:'normal',
            fontFamily:'宋体'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        right: 20,
        data:data_name,
        textStyle: {
            color: "#000",
            fontWeight:'normal',
            fontFamily:'宋体'
        }
    },
    series: [

        {
            name:'',
            type:'pie',
            radius: ['50%', '70%'],
            data:data2
        }
    ]
};
myChart.setOption(option);