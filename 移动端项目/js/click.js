/**
 * Created by 000 on 2017/9/27.
 */
var kk={};/*object ���� �����Ǽ�ֵ�� ��������ֵ*/
//var=[];/*���� ������ ���ֻ����ַ����ļ���*/
kk.tap=function(objDom,callback){
    /*1.���ܻ���
     * 2.��Ӧ��Ҫ��һ����ʱ����� 150ms*/
    var isMove=false;/*��¼�Ƿ񻬶���*/
    var startTime=0;
    objDom.addEventListener('touchstart',function(e){
        console.time('end');/*��ʱ��ʼ��һ������ end*/
        startTime=Date.now();/*ȡ��1970�굽������һ�̵ĺ���msֵ*/
    });
    objDom.addEventListener('touchmove',function(e){
        isMove=true;
        /*������ ֻҪmove�� �Ͳ���������¼���*/
    });
    objDom.addEventListener('touchend',function(e){
        console.timeEnd('end');/*��ʱ������ʱ�� ��ӡ��ʱ��� end ��λ����*/
        /*isMove��false
         * ���� ��Ӧʱ����150ms��
         * �����һ��ģ���װ��tap�¼�����������*/
        if(!isMove && (Date.now()-startTime)<150){
            callback && callback(e);
            /*û�д���move�¼� ����ʱ���С��150ms*/
        }
        /*ע��Ҫ����*/
        isMove=false;
        startTime=0;
    })
}