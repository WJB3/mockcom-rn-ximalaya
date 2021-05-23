import { Model,Effect } from 'dva-core-ts';
import { Reducer } from 'redux';
import axios from 'axios';

//轮播图接口
const CAROUSEL_URL='/mock/11/carousel';
//猜你喜欢接口
const GUESS_URL='/mock/11/likes';
//首页列表请求
const CHANNEL_URL='/mock/11/list';

export interface ICarousel{
    id:string;
    image:string;
    color:[string,string]
}

export interface ILikes{
    id:string,
    title:string,
    image:string
}

export interface IChannel{
    id:string;
    title:string;
    image:string;
    remark:string;
    played:number;
    playing:number;
}
interface HomeState{
    carousels:ICarousel[];
    guessLikes:ILikes[];
    channels:IChannel[];
}

interface HomeModel extends Model{
    namespace: 'home';
    state: HomeState;
    reducers:{
        setState:Reducer<HomeState>
    }; 
    effects:{
        fetchCarousels:Effect;
        fetchGuessLikes:Effect;
        fetchChannels:Effect;
    }
}

const initialState={
    carousels:[],
    guessLikes:[],
    channels:[]
}; 

const homeModel:HomeModel={
    namespace:'home',
    state:initialState,
    reducers:{
        setState(state=initialState,{payload}){
            return {
                ...state, 
                ...payload
            }
        }
    },
    effects:{
        *fetchCarousels(_,{ call,put }){ 
            const { data } =yield call(axios.get,CAROUSEL_URL); 
            yield put({
                type:'setState',
                payload:{
                    carousels:data
                }
            })
        },
        *fetchGuessLikes(_,{ call,put }){
            const { data } =yield call(axios.get,GUESS_URL); 
            yield put({
                type:'setState',
                payload:{
                    guessLikes:data
                }
            })
        },
        *fetchChannels(_,{ call,put }){
            const { data:{result} } =yield call(axios.get,CHANNEL_URL);
            console.log("列表数据",result);
            yield put({
                type:'setState',
                payload:{
                    channels:result
                }
            })
        }
    }
}

export default homeModel;