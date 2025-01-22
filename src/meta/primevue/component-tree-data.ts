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
import { ComponentType } from "./types";
import { ComponentMeta } from "../core";

export const COMPONENT_TREE_DATA: ComponentMeta[] = [
  {
    label: "Form",
    description: "表單",
    children: [
      { label: ComponentType.AutoComplete, description: "自動完成" },
      { label: ComponentType.CascadeSelect, description: "階層式" },
      { label: ComponentType.Checkbox, description: "複選框" },
      { label: ComponentType.ColorPicker, description: "顏色選擇器" },
      { label: ComponentType.DatePicker, description: "日期選擇器" },
      { label: ComponentType.Editor, description: "編輯器" },
      { label: ComponentType.FloatLabel, description: "浮動標籤" },
      { label: ComponentType.IconField, description: "圖示欄位" },
      { label: ComponentType.InputGroup, description: "輸入群組" },
      { label: ComponentType.InputMask, description: "輸入遮罩" },
      { label: ComponentType.InputNumber, description: "輸入數字" },
      { label: ComponentType.InputOtp, description: "輸入單次驗證碼" },
      { label: ComponentType.InputText, description: "輸入文字" },
      { label: ComponentType.KeyFilter, description: "按鍵過濾" },
      { label: ComponentType.Knob, description: "旋鈕" },
      { label: ComponentType.Listbox, description: "列表選取框" },
      { label: ComponentType.MultiSelect, description: "複選下拉清單" },
      { label: ComponentType.Password, description: "輸入密碼" },
      { label: ComponentType.RadioButton, description: "單選按鈕" },
      { label: ComponentType.Rating, description: "評分" },
      { label: ComponentType.Select, description: "選擇器" },
      { label: ComponentType.SelectButton, description: "選擇按鈕" },
      { label: ComponentType.Slider, description: "滑桿" },
      { label: ComponentType.Textarea, description: "文字區域" },
      { label: ComponentType.ToggleButton, description: "切換按鈕" },
      { label: ComponentType.ToggleSwitch, description: "切換開關" },
      { label: ComponentType.TreeSelect, description: "樹狀選擇" },
    ],
  },
  {
    label: "Button",
    description: "按鈕",
    children: [
      { label: ComponentType.Button, description: "按鈕" },
      { label: ComponentType.SpeedDial, description: "快捷懸浮按鈕" },
      { label: ComponentType.SplitButton, description: "更多功能按鈕" },
    ],
  },
  {
    label: "Data",
    description: "資料",
    children: [
      { label: ComponentType.DataTable, description: "資料表格" },
      { label: ComponentType.DataView, description: "資料清單" },
      { label: ComponentType.OrderList, description: "訂單項目" },
      { label: ComponentType.OrgChart, description: "組織架構圖" },
      { label: ComponentType.Paginator, description: "分頁導航列" },
      { label: ComponentType.PickList, description: "調整排序清單" },
      { label: ComponentType.Timeline, description: "時間軸" },
      { label: ComponentType.Tree, description: "樹狀圖" },
      { label: ComponentType.TreeTable, description: "樹狀表格" },
      { label: ComponentType.VirtualScroller, description: "虛擬滾動" },
    ],
  },
  {
    label: "Panel",
    description: "面板",
    children: [
      { label: ComponentType.Accordion, description: "折疊項目集合" },
      { label: ComponentType.Card, description: "卡片" },
      { label: ComponentType.Deferred, description: "延遲載入" },
      { label: ComponentType.Divider, description: "分隔線" },
      { label: ComponentType.Fieldset, description: "文字區段" },
      { label: ComponentType.Panel, description: "內容面板" },
      { label: ComponentType.ScrollPanel, description: "滾動內容面板" },
      { label: ComponentType.Splitter, description: "分割器" },
      { label: ComponentType.Stepper, description: "步驟" },
      { label: ComponentType.Tabs, description: "標籤頁" },
      { label: ComponentType.Toolbar, description: "工具列" },
    ],
  },
  {
    label: "Overlay",
    description: "覆蓋",
    children: [
      { label: ComponentType.ConfirmDialog, description: "確認用對話框" },
      { label: ComponentType.ConfirmPopup, description: "確認用彈出框" },
      { label: ComponentType.Dialog, description: "對話框" },
      { label: ComponentType.Drawer, description: "抽屜" },
      { label: ComponentType.DynamicDialog, description: "動態對話框" },
      { label: ComponentType.Popover, description: "彈出框" },
      { label: ComponentType.Tooltip, description: "懸浮提示文字" },
    ],
  },
  {
    label: "File",
    description: "檔案",
    children: [{ label: ComponentType.Upload, description: "上傳" }],
  },
  {
    label: "Menu",
    description: "菜單",
    children: [
      { label: ComponentType.Breadcrumb, description: "階層導航" },
      { label: ComponentType.ContextMenu, description: "右鍵選單" },
      { label: ComponentType.Dock, description: "快捷欄" },
      { label: ComponentType.Menu, description: "選單" },
      { label: ComponentType.Menubar, description: "選單列" },
      { label: ComponentType.MegaMenu, description: "大量選單" },
      { label: ComponentType.PanelMenu, description: "內容面板選單" },
      { label: ComponentType.TieredMenu, description: "懸浮層級選單" },
    ],
  },
  {
    label: "Chart",
    description: "圖表",
    children: [{ label: ComponentType.Chart, description: "圖表" }],
  },
  {
    label: "Messages",
    description: "訊息",
    children: [
      { label: ComponentType.Message, description: "訊息" },
      { label: ComponentType.Toast, description: "提示用訊息" },
    ],
  },
  {
    label: "Media",
    description: "媒體",
    children: [
      { label: ComponentType.Carousel, description: "輪播圖檔" },
      { label: ComponentType.Galleria, description: "圖庫" },
      { label: ComponentType.Image, description: "圖片" },
      { label: ComponentType.ImageCompare, description: "雙圖片對照" },
    ],
  },
  {
    label: "Misc",
    description: "其他雜項",
    children: [
      { label: ComponentType.AnimateOnScroll, description: "滾動式動畫" },
      { label: ComponentType.Avatar, description: "用戶圖示" },
      { label: ComponentType.Badge, description: "徽章" },
      { label: ComponentType.BlockUI, description: "停用區域" },
      { label: ComponentType.Chip, description: "標籤式圖標" },
      { label: ComponentType.FocusTrap, description: "焦點鎖定" },
      { label: ComponentType.Fluid, description: "自適應佈局" },
      { label: ComponentType.Inplace, description: "即時編輯" },
      { label: ComponentType.MeterGroup, description: "量表群組" },
      { label: ComponentType.ProgressBar, description: "加載進度條" },
      { label: ComponentType.ProgressSpinner, description: "加載進度圈" },
      { label: ComponentType.ScrollTop, description: "滾回頂部" },
      { label: ComponentType.Skeleton, description: "佔位骨架" },
      { label: ComponentType.Ripple, description: "波紋效果" },
      { label: ComponentType.StyleClass, description: "樣式切換" },
      { label: ComponentType.Tag, description: "標籤" },
      { label: ComponentType.Terminal, description: "終端機介面" },
    ],
  },
];
