import { Model,Effect } from 'dva-core-ts';
import { Reducer } from 'redux';
import axios from 'axios';

const CAROUSEL_URL='/mock/11/carousel';

export interface ICarousel{
    id:string;
    image:string;
    color:[string,string]
}
interface HomeState{
    carousels:ICarousel[];
}

interface HomeModel extends Model{
    namespace: 'home';
    state: HomeState;
    reducers:{
        setState:Reducer<HomeState>
    }; 
    effects:{
        fetchCarousels:Effect;
    }
}

const initialState={
    carousels:[],
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
        *fetchCarousels({ payload },{ call,put }){ 
            const { data } =yield call(axios.get,CAROUSEL_URL);
            console.log("轮播图数据",data);
            yield put({
                type:'setState',
                payload:{
                    carousels:data
                }
            })
        }
    }
}

export default homeModel;