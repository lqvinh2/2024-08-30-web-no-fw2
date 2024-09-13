import '../js/common/extention'
import { storageClient } from './common/storageClient';



// console.log('app11.js'.getLast(1));
storageClient.set('111', {
    a:1,
    d:2
})

console.log(storageClient.get('111'));

export const onStartLoadPage = () => {
    
    console.log('onStartLoadPage');
    
}

export const onAfterLoadPage = () => {
    
    console.log('onAfterLoadPage');
    
}

export const onLoadPageError = (error) => {
    
    console.log(error);
    
}
