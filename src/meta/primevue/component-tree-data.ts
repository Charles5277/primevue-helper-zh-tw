// [...$0.children].map((c) => {
//     console.log(c)
//     const title = c.querySelector('.menu-child-category')
//     const label = title.textContent
//     const children = [...c.querySelectorAll('li span')].map(item => item.textContent)
//     return {
//         label,
//         children
//     }
// })
import { ComponentType } from './types'
import { ComponentMeta } from "../core";

export const COMPONENT_TREE_DATA: ComponentMeta[] = [
    {
        label: "Form",
        description: "表单",
        children: [
            { label: ComponentType.AutoComplete, description: "自动完成" },
            { label: ComponentType.CascadeSelect, description: "级联选择" },
            { label: ComponentType.Checkbox, description: "复选框" },
            { label: ComponentType.ColorPicker, description: "颜色选择器" },
            { label: ComponentType.DatePicker, description: "日期选择器" },
            { label: ComponentType.Editor, description: "编辑器" },
            { label: ComponentType.FloatLabel, description: "浮动标签" },
            { label: ComponentType.IconField, description: "图标字段" },
            { label: ComponentType.InputGroup, description: "输入组" },
            { label: ComponentType.InputMask, description: "输入掩码" },
            { label: ComponentType.InputNumber, description: "数字输入" },
            { label: ComponentType.InputOtp, description: "一次性密码输入" },
            { label: ComponentType.InputText, description: "文本输入" },
            { label: ComponentType.Knob, description: "旋钮" },
            { label: ComponentType.Listbox, description: "列表框" },
            { label: ComponentType.MultiSelect, description: "多选" },
            { label: ComponentType.Password, description: "密码" },
            { label: ComponentType.RadioButton, description: "单选按钮" },
            { label: ComponentType.Rating, description: "评分" },
            { label: ComponentType.Select, description: "选择" },
            { label: ComponentType.SelectButton, description: "选择按钮" },
            { label: ComponentType.Slider, description: "滑块" },
            { label: ComponentType.Textarea, description: "文本域" },
            { label: ComponentType.ToggleButton, description: "切换按钮" },
            { label: ComponentType.ToggleSwitch, description: "切换开关" },
            { label: ComponentType.TreeSelect, description: "树选择" },
        ],
    },
    {
        label: "Button",
        description: "按钮",
        children: [
            { label: ComponentType.Button, description: "按钮" },
            { label: ComponentType.SpeedDial, description: "速度拨号" },
            { label: ComponentType.SplitButton, description: "分割按钮" },
        ],
    },
    {
        label: "Data",
        description: "数据",
        children: [
            { label: ComponentType.DataTable, description: "数据表" },
            { label: ComponentType.DataView, description: "数据视图" },
            { label: ComponentType.OrderList, description: "订单列表" },
            { label: ComponentType.OrgChart, description: "组织结构图" },
            { label: ComponentType.Paginator, description: "分页器" },
            { label: ComponentType.PickList, description: "选择列表" },
            { label: ComponentType.Timeline, description: "时间线" },
            { label: ComponentType.Tree, description: "树" },
            { label: ComponentType.TreeTable, description: "树表" },
            { label: ComponentType.VirtualScroller, description: "虚拟滚动" },
        ],
    },
    {
        label: "Panel",
        description: "面板",
        children: [
            { label: ComponentType.Accordion, description: "手风琴" },
            { label: ComponentType.Card, description: "卡片" },
            { label: ComponentType.Deferred, description: "延迟" },
            { label: ComponentType.Divider, description: "分隔符" },
            { label: ComponentType.Fieldset, description: "字段集" },
            { label: ComponentType.Panel, description: "面板" },
            { label: ComponentType.ScrollPanel, description: "滚动面板" },
            { label: ComponentType.Splitter, description: "分割器" },
            { label: ComponentType.Stepper, description: "步骤" },
            { label: ComponentType.Tabs, description: "标签页" },
            { label: ComponentType.Toolbar, description: "工具栏" },
        ],
    },
    {
        label: "Overlay",
        description: "覆盖",
        children: [
            { label: ComponentType.ConfirmDialog, description: "确认对话框" },
            { label: ComponentType.ConfirmPopup, description: "确认弹出" },
            { label: ComponentType.Dialog, description: "对话框" },
            { label: ComponentType.Drawer, description: "抽屉" },
            { label: ComponentType.DynamicDialog, description: "动态对话框" },
            { label: ComponentType.Popover, description: "弹出框" },
            { label: ComponentType.Tooltip, description: "工具提示" },
        ],
    },
    {
        label: "File",
        description: "文件",
        children: [
            {label: ComponentType.Upload, description: "上传" }
        ]
    },
    {
        label: "Menu",
        description: "菜单",
        children: [
            { label: ComponentType.Breadcrumb, description: "面包屑" },
            { label: ComponentType.ContextMenu, description: "上下文菜单" },
            { label: ComponentType.Dock, description: "停靠" },
            { label: ComponentType.Menu, description: "菜单" },
            { label: ComponentType.Menubar, description: "菜单栏" },
            { label: ComponentType.MegaMenu, description: "巨量菜单" },
            { label: ComponentType.PanelMenu, description: "面板菜单" },
            { label: ComponentType.TieredMenu, description: "分层菜单" },
        ],
    },
    {
        label: "Chart",
        description: "图表",
        children: [
            { label: ComponentType.Chart, description: "图表" }
        ]
    },
    {
        label: "Messages",
        description: "消息",
        children: [
            { label: ComponentType.Message, description: "消息" },
            { label: ComponentType.Toast, description: "提示" }
        ]
    },
    {
        label: "Media",
        description: "媒体",
        children: [
            { label: ComponentType.Carousel, description: "轮播" },
            { label: ComponentType.Galleria, description: "画廊" },
            { label: ComponentType.Image, description: "图片" },
        ],
    },
    {
        label: "Misc",
        description: "杂项",
        children: [
            { label: ComponentType.AnimateOnScroll, description: "滚动动画" },
            { label: ComponentType.Avatar, description: "头像" },
            { label: ComponentType.Badge, description: "徽章" },
            { label: ComponentType.BlockUI, description: "阻止UI" },
            { label: ComponentType.Chip, description: "纸片" },
            { label: ComponentType.FocusTrap, description: "焦点陷阱" },
            { label: ComponentType.Inplace, description: "原地" },
            { label: ComponentType.Fluid, description: "流体" },
            { label: ComponentType.MeterGroup, description: "计量组" },
            { label: ComponentType.ScrollTop, description: "滚动到顶部" },
            { label: ComponentType.Skeleton, description: "骨架屏" },
            { label: ComponentType.ProgressBar, description: "进度条" },
            { label: ComponentType.ProgressSpinner, description: "进度旋转器" },
            { label: ComponentType.Ripple, description: "波纹" },
            { label: ComponentType.StyleClass, description: "样式类" },
            { label: ComponentType.Tag, description: "标签" },
            { label: ComponentType.Terminal, description: "终端" },
        ],
    },
];
