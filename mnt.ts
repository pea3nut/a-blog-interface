import {Get} from "./index";


var api :Get.tag.all.call =function(){
    return {
        errcode :0,
        errmsg :'ok',
        tag_length :2,
        tag_map :{
            web :{
                name :'Web Develop',
                alias :'web',
            },
            js :{
                name :'JavaScript',
                alias :'js',
            },
        },
    };
};
var response =api();