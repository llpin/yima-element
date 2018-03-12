<template>
  <div>
    <el-dialog
      title="添加权限"
      :visible.sync="visible"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="表达式" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="ok('form')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "UserRoleAddingDialog",
    props:{
      visible:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return{
        productAddingForm:{
          name:"",
          description:""
        },
        rules:{
          name:[
            {
              //注意拼写错误
              required: true,
              message: '表达式不能为空',
              trigger: 'blur'
            }
          ],
          description:[
            {
              required: true,
              message: '描述不能为空',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    computed:{

    },
    methods: {
      cancel(){
        this.$emit('cancel', this);
      },
      ok(formName){
        this.$refs[formName].validate((valid)=>{
          if (valid){
            //验证成功
            this.$emit('ok', this.productAddingForm);
          }else {
            //验证失败
            console.log("验证失败");
          }
        })
      },
      handleClose(){
        this.$emit('close', this);
      }
    }
  }
</script>

<style scoped>

</style>
