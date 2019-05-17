<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2019 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 老猫 <thinkcmf@126.com>
// +----------------------------------------------------------------------
namespace app\portal\controller;

use cmf\controller\HomeBaseController;
use think\Db;
use think\Session;

class IndexController extends HomeBaseController
{
    public function index()
    {

    //在读数据开始
       $c = Db::name('portal_post')->where('pid','like','%1,%')->where('delete_time', 0)->count();


        //ceil();加一
        $num = $c/10;
        $n = '';
        if($num){
            $n = ceil($num);
        }


        $data1 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('delete_time', 0)->limit(0,10)->select();

        $row = array();
        foreach($data1 as $k=>$v){
            $img =json_decode($v['more']);
            $row[$k]['id'] = $v['id'];
            $row[$k]['post_title'] = $v['post_title'];
            $row[$k]['post_keywords'] = $v['post_keywords'];
            $row[$k]['post_excerpt'] = $v['post_excerpt'];
            $row[$k]['author_name'] = $v['author_name'];

            $row[$k]['img']  =$img->thumbnail;

        }

        $this->assign('data1', $row);


        if($data1){
            $data2 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(10,10)->select();

            $row1 = array();
            foreach($data2 as $k=>$v){
                $img1 =json_decode($v['more']);
                $row1[$k]['id'] = $v['id'];
                $row1[$k]['post_title'] = $v['post_title'];
                $row1[$k]['post_excerpt'] = $v['post_excerpt'];
                $row1[$k]['post_keywords'] = $v['post_keywords'];
                $row1[$k]['author_name'] = $v['author_name'];
                $row1[$k]['img']  =$img1->thumbnail;

            }
            $this->assign('data2', $row1);
        }

        if($data2){
            $data3 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(20,10)->select();


            $row2 = array();
            foreach($data3 as $k=>$v){
                $img2 =json_decode($v['more']);
                $row2[$k]['id'] = $v['id'];
                $row2[$k]['post_title'] = $v['post_title'];
                $row2[$k]['post_excerpt'] = $v['post_excerpt'];
                $row2[$k]['post_keywords'] = $v['post_keywords'];
                $row2[$k]['author_name'] = $v['author_name'];
                $row2[$k]['img']  =$img2->thumbnail;

            }


            $this->assign('data3', $row2);
        }

        if($data3){
            $data4 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(30,10)->select();


            $row3 = array();
            foreach($data4 as $k=>$v){
                $img3 =json_decode($v['more']);
                $row3[$k]['id'] = $v['id'];
                $row3[$k]['post_title'] = $v['post_title'];
                $row3[$k]['post_excerpt'] = $v['post_excerpt'];
                $row3[$k]['post_keywords'] = $v['post_keywords'];
                $row3[$k]['author_name'] = $v['author_name'];
                $row3[$k]['img']  =$img3->thumbnail;

            }


            $this->assign('data4', $row3);
        }

    if($data4){
        $data5 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(40,10)->select();


        $row4 = array();
        foreach($data5 as $k=>$v){
            $img4 =json_decode($v['more']);
            $row4[$k]['id'] = $v['id'];
            $row4[$k]['post_title'] = $v['post_title'];
            $row4[$k]['post_excerpt'] = $v['post_excerpt'];
            $row4[$k]['post_keywords'] = $v['post_keywords'];
            $row4[$k]['author_name'] = $v['author_name'];
            $row4[$k]['img']  =$img4->thumbnail;

        }
        $this->assign('data5', $row4);
    }

if($data5){
    $data6 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(50,10)->select();

    $row5= array();
    foreach($data6 as $k=>$v){
        $img5 =json_decode($v['more']);
        $row5[$k]['id'] = $v['id'];
        $row5[$k]['post_title'] = $v['post_title'];
        $row5[$k]['post_excerpt'] = $v['post_excerpt'];
        $row5[$k]['post_keywords'] = $v['post_keywords'];
        $row5[$k]['author_name'] = $v['author_name'];
        $row5[$k]['img']  =$img5->thumbnail;

    }

    $this->assign('data6', $row5);
}

if($data6){
    $data7 = Db::name('portal_post')->field('id,post_title,post_excerpt,post_keywords,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(60,10)->select();


    $row6= array();
    foreach($data7 as $k=>$v){
        $img6 =json_decode($v['more']);
        $row6[$k]['id'] = $v['id'];
        $row6[$k]['post_title'] = $v['post_title'];
        $row6[$k]['post_excerpt'] = $v['post_excerpt'];
        $row7[$k]['post_keywords'] = $v['post_keywords'];
        $row6[$k]['author_name'] = $v['author_name'];
        $row6[$k]['img']  =$img6->thumbnail;

    }

    $this->assign('data7', $row6);

}

if($data7){
    $data8 = Db::name('portal_post')->field('id,post_title,post_excerpt,post_keywords,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(70,10)->select();


    $row7= array();
    foreach($data8 as $k=>$v){
        $img7 =json_decode($v['more']);
        $row7[$k]['id'] = $v['id'];
        $row7[$k]['post_title'] = $v['post_title'];
        $row7[$k]['post_keywords'] = $v['post_keywords'];
        $row7[$k]['post_excerpt'] = $v['post_excerpt'];
        $row7[$k]['author_name'] = $v['author_name'];
        $row7[$k]['img']  =$img7->thumbnail;

    }
    $this->assign('data8', $row7);
}

if($data8){
    $data9 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(80,10)->select();


    $row8= array();
    foreach($data9 as $k=>$v){
        $img8 =json_decode($v['more']);
        $row8[$k]['id'] = $v['id'];
        $row8[$k]['post_title'] = $v['post_title'];
        $row8[$k]['post_excerpt'] = $v['post_excerpt'];
        $row8[$k]['post_keywords'] = $v['post_keywords'];
        $row8[$k]['author_name'] = $v['author_name'];
        $row8[$k]['img']  =$img8->thumbnail;

    }
    $this->assign('data8', $row8);



}

if($data9){

    $data10 = Db::name('portal_post')->field('id,post_title,post_excerpt,post_keywords,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(90,10)->select();
    $row9= array();
    foreach($data10 as $k=>$v){
        $img9 =json_decode($v['more']);
        $row9[$k]['id'] = $v['id'];
        $row9[$k]['post_title'] = $v['post_title'];
        $row9[$k]['post_excerpt'] = $v['post_excerpt'];
        $row9[$k]['post_keywords'] = $v['post_keywords'];
        $row9[$k]['author_name'] = $v['author_name'];
        $row9[$k]['img']  =$img9->thumbnail;

    }
    $this->assign('data10', $row9);

}


        if($data10){

            $data11 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(100,10)->select();


            $row10= array();
            foreach($data11 as $k=>$v){
                $img10 =json_decode($v['more']);
                $row10[$k]['id'] = $v['id'];
                $row10[$k]['post_title'] = $v['post_title'];
                $row10[$k]['post_keywords'] = $v['post_keywords'];
                $row10[$k]['post_excerpt'] = $v['post_excerpt'];
                $row10[$k]['author_name'] = $v['author_name'];
                $row10[$k]['img']  =$img10->thumbnail;

            }

            $this->assign('data11', $row10);

        }

        if($data11){

            $data12 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(110,10)->select();

            $row11= array();
            foreach($data12 as $k=>$v){
                $img11 =json_decode($v['more']);
                $row11[$k]['id'] = $v['id'];
                $row11[$k]['post_title'] = $v['post_title'];
                $row11[$k]['post_excerpt'] = $v['post_excerpt'];
                $row11[$k]['post_keywords'] = $v['post_keywords'];
                $row11[$k]['author_name'] = $v['author_name'];
                $row11[$k]['img']  =$img11->thumbnail;

            }
            $this->assign('data12', $row11);

        }


        if($data12){

            $data13 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(120,10)->select();

            $row12= array();
            foreach($data13 as $k=>$v){
                $img12 =json_decode($v['more']);
                $row12[$k]['id'] = $v['id'];
                $row12[$k]['post_title'] = $v['post_title'];
                $row12[$k]['post_excerpt'] = $v['post_excerpt'];
                $row12[$k]['post_keywords'] = $v['post_keywords'];
                $row12[$k]['author_name'] = $v['author_name'];
                $row12[$k]['img']  =$img12->thumbnail;

            }
            $this->assign('data13', $row12);

        }

        if($data13){

            $data14 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(130,10)->select();

            $row13= array();
            foreach($data14 as $k=>$v){
                $img13 =json_decode($v['more']);
                $row13[$k]['id'] = $v['id'];
                $row13[$k]['post_title'] = $v['post_title'];
                $row13[$k]['post_excerpt'] = $v['post_excerpt'];
                $row13[$k]['post_keywords'] = $v['post_keywords'];
                $row13[$k]['author_name'] = $v['author_name'];
                $row13[$k]['img']  =$img13->thumbnail;

            }


            $this->assign('data14', $row13);

        }

        if($data14){

            $data15 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(140,10)->select();

            $row14= array();
            foreach($data15 as $k=>$v){
                $img14 =json_decode($v['more']);
                $row14[$k]['id'] = $v['id'];
                $row14[$k]['post_title'] = $v['post_title'];
                $row14[$k]['post_excerpt'] = $v['post_excerpt'];
                $row14[$k]['post_keywords'] = $v['post_keywords'];
                $row14[$k]['author_name'] = $v['author_name'];
                $row14[$k]['img']  =$img14->thumbnail;

            }

            $this->assign('data15', $row14);

        }

        if($data15){

            $data16 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(150,10)->select();

            $row15= array();
            foreach($data16 as $k=>$v){
                $img15 =json_decode($v['more']);
                $row15[$k]['id'] = $v['id'];
                $row15[$k]['post_title'] = $v['post_title'];
                $row15[$k]['post_excerpt'] = $v['post_excerpt'];
                $row15[$k]['post_keywords'] = $v['post_keywords'];
                $row15[$k]['author_name'] = $v['author_name'];
                $row15[$k]['img']  =$img15->thumbnail;

            }

            $this->assign('data16', $row15);

        }


        if($data16){

            $data17 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(160,10)->select();


            $row16= array();
            foreach($data17 as $k=>$v){
                $img16 =json_decode($v['more']);
                $row16[$k]['id'] = $v['id'];
                $row16[$k]['post_title'] = $v['post_title'];
                $row16[$k]['post_keywords'] = $v['post_keywords'];
                $row16[$k]['post_excerpt'] = $v['post_excerpt'];
                $row16[$k]['author_name'] = $v['author_name'];
                $row16[$k]['img']  =$img16->thumbnail;

            }

            $this->assign('data17', $row16);

        }


        if($data17){

            $data18 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(170,10)->select();

            $row17= array();
            foreach($data18 as $k=>$v){
                $img17 =json_decode($v['more']);
                $row17[$k]['id'] = $v['id'];
                $row17[$k]['post_title'] = $v['post_title'];
                $row17[$k]['post_keywords'] = $v['post_keywords'];
                $row17[$k]['post_excerpt'] = $v['post_excerpt'];
                $row17[$k]['author_name'] = $v['author_name'];
                $row17[$k]['img']  =$img17->thumbnail;

            }

            $this->assign('data18', $row17);

        }

        if($data18){

            $data19 = Db::name('portal_post')->field('id,post_title,post_excerpt,post_keywords,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(180,10)->select();

            $row18= array();
            foreach($data19 as $k=>$v){
                $img18 =json_decode($v['more']);
                $row18[$k]['id'] = $v['id'];
                $row18[$k]['post_title'] = $v['post_title'];
                $row18[$k]['post_keywords'] = $v['post_keywords'];
                $row18[$k]['post_excerpt'] = $v['post_excerpt'];
                $row18[$k]['author_name'] = $v['author_name'];
                $row18[$k]['img']  =$img18->thumbnail;

            }
            $this->assign('data19', $row18);

        }

        if($data19){

            $data20 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(190,10)->select();

            $row19= array();
            foreach($data20 as $k=>$v){
                $img19=json_decode($v['more']);
                $row19[$k]['id'] = $v['id'];
                $row19[$k]['post_title'] = $v['post_title'];
                $row19[$k]['post_excerpt'] = $v['post_excerpt'];
                $row19[$k]['post_keywords'] = $v['post_keywords'];
                $row19[$k]['author_name'] = $v['author_name'];
                $row19[$k]['img']  =$img19->thumbnail;

            }
            $this->assign('data20', $data20);


        }


        if($data20){

            $data21 = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%1,%')->whereOr('pid','like','%1%')->where('post_status',1)->where('delete_time', 0)->limit(200,10)->select();

            $row20= array();
            foreach($data21 as $k=>$v){
                $img20=json_decode($v['more']);
                $row20[$k]['id'] = $v['id'];
                $row20[$k]['post_title'] = $v['post_title'];
                $row20[$k]['post_excerpt'] = $v['post_excerpt'];
                $row20[$k]['post_keywords'] = $v['post_keywords'];
                $row20[$k]['author_name'] = $v['author_name'];
                $row20[$k]['img']  =$img20->thumbnail;

            }
            $this->assign('data21', $row20);

        }

        $teacher = Db::name('portal_teacher')->field('id,teacher_name,more,teacher_sex')->where('delete_time', 0)->limit(0,8)->select();
            $list = array();
            $i=1;
            foreach($teacher as $k=>$v){

                $img=json_decode($v['more']);
                $list[$k]['id'] = $v['id'];
                $list[$k]['teacher_name'] = $v['teacher_name'];
                $list[$k]['sex'] = $v['teacher_sex'];
                $list[$k]['img']  =$img->thumbnail;
                $list[$k]['num'] = $i;
                $i++;
            }

//待读书籍

            $daidu = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%2,%')->whereOr('pid','like','%2%')->where('post_status',1)->where('delete_time', 0)->limit(0,15)->select();

            $daidu1= array();
            foreach($daidu as $k=>$v){
                $imgdaidu=json_decode($v['more']);
                $daidu1[$k]['id'] = $v['id'];
                $daidu1[$k]['post_title'] = $v['post_title'];
                $daidu1[$k]['post_excerpt'] = $v['post_excerpt'];
                $daidu1[$k]['post_keywords'] = $v['post_keywords'];
                $daidu1[$k]['author_name'] = $v['author_name'];
                $daidu1[$k]['img']  =$imgdaidu->thumbnail;

            }

        $this->assign('daidu', $daidu1);






//已读书籍

        $yidu = Db::name('portal_post')->field('id,post_title,post_keywords,post_excerpt,author_name,more')->where('pid','like','%3,%')->whereOr('pid','like','%3%')->where('post_status',1)->where('delete_time', 0)->limit(0,15)->select();

        $yidu1= array();
        foreach($yidu as $k=>$v){
            $imgyi=json_decode($v['more']);
            $yidu1[$k]['id'] = $v['id'];
            $yidu1[$k]['post_title'] = $v['post_title'];
            $yidu1[$k]['post_excerpt'] = $v['post_excerpt'];
            $yidu1[$k]['post_keywords'] = $v['post_keywords'];
            $yidu1[$k]['author_name'] = $v['author_name'];
            $yidu1[$k]['img']  =$imgyi->thumbnail;

        }

        $this->assign('yidu', $yidu1);




        $this->assign('teacher', $list);
        $this->assign('n', $n);
        return $this->fetch(':index');
    }


    public function teacher(){


        $id = $this->request->param('id', 0, 'intval');
        $data = Db::name('portal_teacher')->where('id', $id)->find();


        $type = $this->request->param('type');

        if($type=='content'){
            $datas = Db::name('portal_teacher')->field('content')->where('id', $id)->find();
            $content = htmlspecialchars_decode($datas['content']);
            echo $content;
            exit;
        }

        $teacher = Db::name('portal_teacher')->field('id,teacher_name')->where('delete_time', 0)->limit(0,8)->select();




        $name = $data['teacher_name'];

        $titlearray = [];
        if (preg_match('/^[\x{4e00}-\x{9fa5}]+$/u',$name)) {
            $length = mb_strlen($name, 'utf-8');

            for ($i=0; $i<$length; $i++)
            {
                $titlearray[] = mb_substr($name, $i, 1, 'utf-8');
            }
        } else {
            $titlearray = str_split($name);

        }
        $front = $titlearray[0];
        unset($titlearray[0]);

        $behinid = implode("", $titlearray);

        $img=json_decode($data['more']);
        $data['img']  =$img->thumbnail;

        $data['content'] = htmlspecialchars_decode($data['content']);


        $this->assign('front', $front);

        $this->assign('behinid', $behinid);
        $this->assign('teacher', $teacher);
        $this->assign('data', $data);
        return $this->fetch(':info');


    }

    public function contentinfo(){


        $id = $this->request->param('id', 0, 'intval');
        Db::name('portal_post')->where('id',$id)->setInc('post_hits');

        $data = Db::name('portal_post')->where('id', $id)->find();

        $teacher = Db::name('portal_teacher')->field('id,teacher_name,more,teacher_sex')->where('delete_time', 0)->limit(0,8)->select();
        $list = array();
        $i=1;
        foreach($teacher as $k=>$v){

            $img=json_decode($v['more']);
            $list[$k]['id'] = $v['id'];
            $list[$k]['teacher_name'] = $v['teacher_name'];
            $list[$k]['sex'] = $v['teacher_sex'];
            $list[$k]['img']  =$img->thumbnail;
            $list[$k]['num'] = $i;
            $i++;
        }

        session('downloadUrl',null);

        if($data['download_url']){
            session('downloadUrl', $data['download_url']);
        }

        $data['content'] = htmlspecialchars_decode($data['post_content']);

        $data['author'] = htmlspecialchars_decode($data['author']);

        $jpg =json_decode($data['more']);
        $data['img'] = $jpg->thumbnail;
        $this->assign('data', $data);
        $this->assign('teacher', $list);

        return $this->fetch(':content');

    }


    public function dowlog(){


        $type = $this->request->param('type');

        $id = $this->request->param('id', 0, 'intval');

        $data = array();
        $data['ip'] = $_SERVER['REMOTE_ADDR'];
        $data['dowtime'] = date("Y-m-d H:i",$_SERVER['REQUEST_TIME']);
        $data['cid'] = $id;
        $data['url'] = session('downloadUrl');

        if($type=='dowsuccess'){

            echo session('downloadUrl');
            exit;
        }

        if($type=='inserlog'){

             Db('downloadLog') -> insert($data);

        }





    }
}
