<template>
    <div class=''>
        <!-- 轮播 -->
        <div class="swiperWrapper">
            <Swiper></Swiper>
            <InvestmentService></InvestmentService>
        </div>
        <div class="registerContent">
            <div class="front singleUpload">
                <p class="registerTitle">
                    <i class="el-icon-user registerIcon"></i>
                    <span>身份证人像面</span> 
                </p>
                <div class="uploadSection">
                    <el-upload
                    action="#"
                    list-type="picture-card"
                    :class="[ frondFileList.length > 0 ? 'frontDispear' : '']"
                    :auto-upload="false"
                    :file-list="frondFileList"
                    :on-preview="handlePictureCardPreview"
                    :on-change='FrontfileChange'
                    :on-remove="handleRemove">
                    <i class="el-icon-plus" v-show='frondFileList.length == 0'></i>
                    </el-upload>

                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
            </div>
            <div class="back singleUpload">
                <p class="registerTitle">
                    <i class="el-icon-document-add registerIcon"></i>
                    <span>身份证国徽面</span>
                </p>
                <div class="uploadSection">
                    <el-upload
                    action="#"
                    list-type="picture-card"
                    :class="[ backFileList.length > 0 ? 'backDispear' : '']"
                    :auto-upload="false"
                    :file-list="backFileList"
                    :on-preview="handleBackPictureCardPreview"
                    :on-change='BackfileChange'
                    :on-remove="handleBackfileRemove">
                    <i class="el-icon-plus" v-show='backFileList.length == 0'></i>
                    </el-upload>

                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "@/components/swiper";
import InvestmentService from "@/components/investmentService";
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Swiper,
    InvestmentService
},
data() {
//这里存放数据
return {
        dialogImageUrl: '',
        dialogVisible: false,
        frondFileList:[],
        backFileList:[]
    };
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    FrontfileChange(file,fileList){
        console.log(file,fileList)
        this.frondFileList=fileList
    },
      handleRemove(file, fileList) {
        console.log(file, fileList);
        this.frondFileList=fileList
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleBackPictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
        BackfileChange(file,fileList){
            console.log(file,fileList)
            this.backFileList=fileList
        },
      handleBackfileRemove(file, fileList) {
        console.log(file, fileList);
        this.backFileList=fileList
      },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    console.log(this.frondFileList.length)
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss'>
/* @import url(); 引入公共css类*/
.registerContent{
    min-height: 5rem;

    .singleUpload{
        width: 50%;
        height: 50%;
        margin: 0 auto;
        padding-top:0.2rem;
        background: #F3F3F3;
        border-radius: 5px;
        position: relative;
    }

    .uploadSection{
        padding-bottom:.2rem;
    }

    .registerTitle{
        height: .4rem;
        border-bottom: 2px solid white ;
        margin-top: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .front{
        border-bottom: 1px solid white ;
        margin: 0.2rem auto;
    }

    .el-upload-list--picture-card .el-upload-list__item{
        width: 2.5rem;
        height: 2.5rem;
    }

    .el-upload--picture-card{
        width: 2.5rem;
        height: 2.5rem;
        line-height: 2rem;
    }
    .frontDispear .el-upload.el-upload--picture-card{
        display: none;
    }
    .backDispear .el-upload.el-upload--picture-card{
        display: none;
    }
}
.registerTitle{
    font-size: .2rem;
    font-weight: 600;
}
.registerIcon{
    font-size: .25rem;
    margin-right: 10px;
}
</style>