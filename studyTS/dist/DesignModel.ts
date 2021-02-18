namespace singleton{
    //优点共享资源
    //缺点无法继承
    class Toast{
        //静态私有的成员
        private static instance:Toast;
        //构造函数私有
        private constructor(){};
        //提供一个静态访问方法
        public static getInstance():Toast{
            if(!this.instance){
                Toast.instance = new Toast();
            }
            return Toast.instance;
        }
    }

}

namespace observer{

    interface Subject{

        //注册一个
        registerObserver();

    }


}