let vm=new Vue({
    el:'#app',
    directives:{
        focusAa(el,bindings){
           // 当点击当前li时让内部的输入框获取焦点
           if(bindings.value){
               el.focus();//获取焦点；
           }
        }
    },
    data:{
        title:'',
        cur:'',
        hash:'',
        todos:[
            {
                isSelected: true,
                title:'睡觉'
            },
            {
                isSelected: false,
                title:'吃饭'
            },
        ]
    },
    created(){//ajax获取， 初始化数据
       // 如果localStorage中有数据就用有的，没数据就用默认的
       this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;

    //   监控hash(哈希值)的变化,如果页面已经有hash了，重新刷新页面也要获取hash值;如果有hash截取赋值，没有的话用all
        this.hash=window.location.hash.slice(2) || 'all';
        window.addEventListener('hashchange',()=>{
            //和跳转有关的都在window.location里
            // console.log(window.location);
            //当hash值变化，重新操作记录的数据
            this.hash=window.location.hash.slice(2)
        },false)
    },
    watch:{
        //下面如果是函数的话，watch默认只监控一层的数据变化，下面变为对象为深度监控
      todos:{
          handler(){//默认写成函数，就相当于默认写了个handler

           //   localStorage默认存的是字符串，如果只是存this.todos，存到的是数据类型[Object object],所以先要转成json格式的字符串
           localStorage.setItem('data',JSON.stringify(this.todos))
          },deep:true
      }
    },
    methods:{
        add(){//keydown和keyup差一个单词，keydown的时候内容没有进入输入框内
            this.todos.push({
                isSelected:false,
                title:this.title
            });
            this.title='';
        },
        remove(todo){//拿到当前点击的和数组里的比对，相等则返回false即可
            this.todos=this.todos.filter(item=>item!==todo);
        },
        remember(todo){//当前传递的是todo（当前点击的这一项）
            this.cur=todo;
        },
        cancel(){
            this.cur=''
        }
    },

    computed:{
        filterTodos(){
          if(this.hash==='all') return this.todos;
          if(this.hash==='finish') return this.todos.filter(item=>item.isSelected);
          if(this.hash==='unfinish') return this.todos.filter(item=>!item.isSelected);
            return this.todos;
        },
       count(){
          return this.todos.filter(item=>!item.isSelected).length
       }
    }
});
//1.将数据循环到页面上，
//2.敲回车时添加新数据，需要加入isSelected属性
//3.删除功能
//4.计算一下当前没有被选中的个数
//5.当我点击li时，我可以知道点击的是那一项，如果我点击的todo和当前循环的某一个相等的时候，应该显示输入框