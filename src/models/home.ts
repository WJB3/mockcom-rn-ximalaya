import { Model,Effect } from 'dva-core-ts';
import { Reducer } from 'redux';
import axios from 'axios';
import {RootState} from './index';

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

export interface IPagination{
    current:number;
    total:number;
    hasMore:boolean;
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
    pagination:IPagination;
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
    channels:[],
    pagination:{
        current:1,
        total:0,
        hasMore:true
    }
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
        *fetchChannels({payload},{ call,put,select }){
            const { channels,pagination }=yield select((state:RootState)=>state.home);
            let page=1;
            if(payload && payload.loadMore){
                page=pagination.current+1;
            }
            const { data } =yield call(axios.get,CHANNEL_URL,{
                params:{
                    page,
                }
            });
            let newChannels=data.result;
            if(payload && payload.loadMore){
                newChannels=channels.concat(newChannels);
            }
            let newPagination=data.pagination;
            yield put({
                type:'setState',
                payload:{
                    channels:newChannels,
                    pagination:{
                        current:page,
                        total:newPagination.total,
                        hasMore:newChannels.length<newPagination.total
                    }
                }
            })
        }
    }
}

export default homeModel;