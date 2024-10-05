

### option

1. title:'表格的标题',
2. align:'center', // 表格列齐方式
3. menuAlign:'center', // 菜单栏对齐方式
4. columnBtn:false, //列动态显隐按钮
5. refreshBtn:false, // 刷新按钮
6. saveBtn:false, // 保存按钮
7. updateBtn:false, // 更新按钮
8. cancelBtn:false, // 行编辑取消按钮
9. addBtn:false, // 表格新增按钮
10. delBtn:false, // 行删除按钮
11. editBtn:false, // 行编辑按钮

---

### 表格属性

1.  width: “100%”, // 表格宽度
2.  height: “auto”, // 表格高度
3.  maxHeight: “auto”, // 表格最大高度
4.  calcHeight: “auto”, // 表格高度差（主要用于减去其他部分让表格高度自适应）
5.  border: true, // 是否显示表格边框
6.  expand: false, // 是否展开折叠行
7.  index: false, // 是否显示表格序号（根据分页会自动计算，比如每页 10 行，到了第二页就会从 11 开始记数）
8.  indexLabel: “#”, // 序号的标题
9.  stripe: true, // 是否显示表格的斑马条纹
10. showHeader: true, // 是否显示表格的表头
11. defaultSort:表格的排序字段{prop:‘date’,order:‘descending/ascending’}prop 默认排序字段，order 排序方式
12. align: “center”, // 表格列对其方式 left/center/right
13. menu: true, // 是否显示操作菜单栏
14. menuWidth: 240, // 操作菜单栏的宽度
15. menuAlign: “left”, // 菜单栏对齐方式 left/center/right
16. searchSize: “small”, // 搜索控件的大小 small/mini
17. columnBtn: true, // 列显隐按钮
18. refreshBtn: true, // 刷新按钮
19. addBtn: true, // 添加按钮
20. searchBtn: true, // 搜索显隐按钮（当 column 中有搜索的属性，或则 searchslot 为 true 时自定义搜索启动起作用）
21. editBtn: true, // 行内编辑按钮
22. delBtn: true, // 行能删除按钮

---

### 列属性

1. label:“租户 ID”, // 列名称
2. prop:“id”, // 列字段
3. placeholder:“请输入租户 ID”, // 控件提示输入语句
4. align:“left”, // 列的对其方式，覆盖 table 的 align
5. width://列宽度
6. minWidth:“auto”, // 列最小宽度
7. sortable:false, // 排序
8. hide:true, // 隐藏列 表格起作用
9. span:12, // 表单栅列
10. precision:2, // 数字框输入精度（当 type 为 number 时）
11. search:false, // 是否支持搜索
12. type:“input”, // input/select/radio/checkbox/textarea/cascader/date/time/datetime/daterange/timerange/datetimerange/week/month/year/dates/password/switch/tree
13. maxRows:4, // 最大行（当 type 为 textarea）
14. minRows:2, // 最小行（当 type 为 textarea）
15. multiple:false,多选（当 type 为 select/tree 时）
16. format:"", // 显示值时间格式（当 type 为 date/time/datetime/daterangetimerange/datetimerange/week/month/year/date
17. valueFormat:"", // 真实值的时间格式（当 type 为 date/time/datetime/daterangetimerange/datetimerange/week/month/year/dates)
18. clearable:true, // 表单清空
19. size:“medium”, // 表单大小 medium/small/mini
20. editDisabled:false, // 表单编辑时是否禁止
21. editDisplay:false, // 表单编辑是否可见
22. addDisabled:false, // 表单编辑时是否禁止
23. addDisplay:false, // 表单编辑是否可见
24. slot:false, // 列自定义 支持自定义列
25. formslot:false, // 表单自定义
26. fixed:true, // 冻结列
27. formWidth:“auto”, // 表单宽度
28. formHeight:“auto”, // 表单行高度
29. overHidden:false, // 超出隐藏
30. rules: // 表单规则,参考 ele 表单规则配置 Object
31. dicData: // 传入本次需要的静态字典（在 column 中 dicData 写对象 key 值即可加载）
32. dicMethod: // 传入字典的请求方式
33. dicQuery: // 传入字典的请求参数 Object
34. dicUrl: // 字典的网络请求接口（例如配置/xxx/xx/{{key}},这样的格式，在 column 中 dicData 自动匹配 prop 字段名）

## 参考地址

> https://blog.csdn.net/qq_18671415/article/details/111466881

<template><!-- vue的模板元素标签 -->
<div class="execution">
<basic-container>
<avue-crud <!-- avue的表格标签 -->
ref="crud" <!-- 在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件 -->
:page="page" <!-- 表格分页配置选项 -->
:data="tableData" <!-- 表格显示的数据 -->
:permission="permissionList"
:table-loading="tableLoading" <!-- 表格等待框的控制-->
:option="tableOption" <!-- 表格配置属性-->
@on-load="getList"
@selection-change="selectionChange" <!-- 当选择项发生变化时会触发该事件  -->
@search-change="searchChange" <!-- 点击搜索后触发该事件  -->
@refresh-change="refreshChange" <!-- 点击刷新按钮触发该事件  -->
@row-update="handleUpdate" <!-- 编辑数据后确定触发该事件  -->
@row-save="handleSave" <!-- 新增数据后点击确定触发该事件  -->
@row-del="rowDel"> <!-- 行数据删除时触发该事件  -->
<template slot="expand" slot-scope="scope"> <!-- 卡槽expand模板是：表格展开折叠行布局。要在tableOption对象的js中搭配expand:true使用；传入的scope为当前行的对象，可通过scope.row获取  -->
联系电话：{{scope.row.lxdh}} ,产品费用：{{scope.row.cpfy}} ,产品销售净额：{{scope.row.xsje}}
</template>
<template slot="menuLeft" slot-scope="scope"> <!-- 卡槽menuLeft模板是：表格上方菜单栏按钮。  -->
<el-button type="primary"
icon="el-icon-plus"
size="small"
@click.stop="rowAdd(scope.row)">添加交易</el-button>
<el-button type="primary"
icon="el-icon-upload2"
size="small"
plain
@click.stop="importExcelDialog">批量导入</el-button>
<el-button type="primary"
icon="el-icon-sell"
size="small"
plain
@click.stop="rowLotDialog(1,scope.row)">提交申请</el-button>
<el-button type="primary"
icon="el-icon-tickets"
size="small"
plain
@click.stop="rowLotDialog(2,scope.row)">我要复核</el-button>
<el-button type="warning"
icon="el-icon-download"
size="small"
plain
@click.stop="exportExcel">导 出</el-button>
</template>
<template slot="menu" slot-scope="scope"> <!-- 卡槽menu模板是：表格内右侧边操作菜单栏按钮。  -->
<el-button icon="el-icon-edit"
size="small" type="text"
@click.stop="rowUpdate(scope.row,scope.index)">编辑</el-button>
<el-button icon="el-icon-delete"
size="small" type="text"
@click.stop="rowDel(scope.row,scope.index)">删除</el-button>
<el-button icon="el-icon-sell"
size="small" type="text"
@click.stop="rowDialog(1,scope.row,scope.index)">提交</el-button>
<el-button icon="el-icon-tickets"
size="small" type="text"
@click.stop="rowDialog(2,scope.row,scope.index)">复核</el-button>
<el-dialog <!-- 使用element弹窗对话框方式，对提交操作按钮布局  -->
title="提交复核申请" <!-- 弹窗标题  -->
:visible.sync="dialogFormVisibleSbumit" <!-- 是否显示 Dialog，支持 .sync 修饰符  -->
width="40%" <!-- 弹出的对话框宽度  -->
append-to-body="true"> <!-- Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true  -->
<el-form :model="form"> <!-- 表单  -->
<h3>当前已选择待复核交易共<span>{{selectcpobjs.length}}</span>笔，详细交易如下：</h3>
<div style="margin-top:20px;" >
<el-tooltip
                        class="item"
                        effect="dark"
                        v-for="(item,i) of selectcpobjs" :key="i"
                        placement="top-start">
<div slot="content">
产品名称:{{selectcpobjs[i].cpmc}} , 客户名称:{{selectcpobjs[i].hymc}} ，<br/>
成交金额:{{selectcpobjs[i].cjje}} , 产品定价:{{selectcpobjs[i].cpdj}} ,<br/>
</div>
<el-button>{{selectcpobjs[i].cpmc.length>9?selectcpobjs[i].cpmc.slice(0,8)+'...':selectcpobjs[i].cpmc}}</el-button>
</el-tooltip>
</div>
<el-form-item>
<el-select v-model="fhrmc" placeholder="请选择复核人">
<el-option
                          v-for="item in fhrList"
                          :key="item.userId"
                          :label="item.username"
                          :value="item.userId"></el-option>
</el-select>
</el-form-item>
</el-form>
<span slot="footer" class="dialog-footer">
<el-button @click="cancelDialog">取 消</el-button>
<el-button type="primary" @click="toAudit(1)">发 送</el-button>
</span>
</el-dialog>
<el-dialog title="复核" :visible.sync="dialogFormVisibleTickets" width="40%" append-to-body="true">
<el-form :model="form">
<div>
<h3>当前需审核产品简要信息如下：</h3>
<div style="margin-top:20px;" >
<el-tooltip
                          class="item"
                          effect="dark"
                          v-for="(item,i) of selectcpobjs" :key="i"
                          placement="top-start">
<div slot="content">
产品名称:{{selectcpobjs[i].cpmc}} , 客户名称:{{selectcpobjs[i].hymc}} ，<br/>
成交金额:{{selectcpobjs[i].cjje}} , 产品定价:{{selectcpobjs[i].cpdj}} ,<br/>
</div>
<el-button>{{selectcpobjs[i].cpmc}}</el-button>
</el-tooltip>
</div>
<div style="margin-top:20px;">
<el-radio-group v-model="radio" @change="setTextArea">
<el-radio-button label="1">同意</el-radio-button>
<el-radio-button label="2">不同意</el-radio-button>
</el-radio-group>
<div style="margin-top:20px;">
<el-input
                            type="textarea"
                            :autosize="{ minRows: 5, maxRows: 10}"
                            v-model="textarea"
                            ref="tex">
</el-input>
</div>
</div>
</div>
<div style="height:10px;"></div>
</el-form>
<span slot="footer" class="dialog-footer">
<el-button type="primary" @click="doAudit(radio)">提 交</el-button>
<el-button @click="cancelDialog">取 消</el-button>
</span>
</el-dialog>
</template>
<template slot-scope="scope" slot="jkhsjlListForm">
<div style="height:135px;">
<el-row v-for="(item,i) of jkhsjlListArr" :key="i">
<el-col :span="5">
<el-input
                        :placeholder=i+1
                        maxlength="18"
                        minlength="1"
                        v-model="index.val[i]">
</el-input>
</el-col>
<el-col :span="1" align="center">--</el-col>
<el-col :span="5">
<el-input
                        placeholder="回输日期"
                        v-model="hsrq.val[i]">
</el-input>
</el-col>
<el-col :span="1" align="center">--</el-col>
<el-col :span="10">
<el-input
                        maxlength="18"
                        minlength="1"
                        placeholder="说明"
                        v-model="sm.val[i]">
</el-input>
</el-col>
<el-col :span="1">
<el-link @click="jkhsjlListDelete(i)" icon="el-icon-remove-outline" :underline="false" style="margin-left:4px;">
</el-link>
</el-col>
<el-col :span="1">
<el-link @click="jkhsjlListAdd()" icon="el-icon-circle-plus-outline" :underline="false">
</el-link>
</el-col>
</el-row>
</div>
</template>
</avue-crud>
</basic-container>
</div>
</template>
