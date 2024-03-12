'use strict';
let plan_shift = [
 {
     id: 1,
     order_id: 123456,
     article: 'Toyota',
     qnt: 146
},
{
     id: 2,
     order_id: 654321,
     article: 'VAZ',
     qnt: 57
},
{
    id: 3,
    order_id: 525252,
    article: 'kamaz',
    qnt: 33
}
]
 

 let quantityPerHour = 50;
// function getHours(dataArray){
//     let totalQuantity = 0;
//     for(let i = 0; i<dataArray.length; i++){
//         totalQuantity += dataArray[i].qnt;
//     }
//     console.log('Total hours ' + (totalQuantity / quantityPerHour));
//     return totalQuantity / quantityPerHour;
// }

let getDifference = (total, inWork) => total - inWork;
function getOrdersQueue(dataArray){
        let ordersQueue = [];
        let hour = 0;
        let freeTime = 0;
        for(let i = 0; i< dataArray.length; i++){
            let totalQuantity = dataArray[i].qnt;
            while(totalQuantity > 0){
                if(freeTime != 0){
                    if(freeTime > totalQuantity){
                        freeTime -= totalQuantity;
                        ordersQueue.push(
                        {
                                    hour: hour,
                                    order_id: dataArray[i].order_id,
                                    article: dataArray[i].article,
                                    quantity: totalQuantity,
                        });
                        totalQuantity = 0;
                        break;
                    } 
                    else {
                        totalQuantity -= freeTime;
                        ordersQueue.push(
                            {
                                        hour: hour,
                                        order_id: dataArray[i].order_id,
                                        article: dataArray[i].article,
                                        quantity: freeTime,
                            }); 
                            freeTime = 0;
                    }
                }
                if(totalQuantity < quantityPerHour){
                    freeTime = quantityPerHour - totalQuantity;
                    ++hour;
                    ordersQueue.push(
                        {
                                    hour: hour,
                                    order_id: dataArray[i].order_id,
                                    article: dataArray[i].article,
                                    quantity: totalQuantity,
                        });
                        totalQuantity = 0;
                }
                else{
                    totalQuantity -= quantityPerHour;  
                    ++hour;
                    ordersQueue.push(
                        {
                                    hour: hour,
                                    order_id: dataArray[i].order_id,
                                    article: dataArray[i].article,
                                    quantity: quantityPerHour,
                        });
                }
            }
    }
    console.log(ordersQueue);
}
getOrdersQueue(plan_shift);















// let getDifference = (total, inWork) => total - inWork;
// function getOrdersQueue(dataArray){
//         let ordersQueue = [];
//         let hour = 0;
//         let inOrder = 0;
//         let freeTime = 0;
//         for(let i = 0; i< dataArray.length; i++){
//           for(let quantityInWork = 0; quantityInWork < dataArray[i].qnt; quantityInWork += quantityPerHour){   
//                 if(freeTime != 0){
//                     if(dataArray[i].qnt < quantityPerHour){
//                         freeTime -= dataArray[i].qnt;
//                         ordersQueue.push(
//                             {
//                                 hour: hour,
//                                 order_id: dataArray[i].order_id,
//                                 article: dataArray[i].article,
//                                 quantity: freeTime,
//                         });
//                     }
//                     else{
//                         ordersQueue.push(
//                             {
//                                 hour: hour,
//                                 order_id: dataArray[i].order_id,
//                                 article: dataArray[i].article,
//                                 quantity: freeTime,
//                             });
//                         freeTime = 0;}
    
//                 } 
//                 inOrder = getDifference(dataArray[i].qnt, quantityInWork);
//                         if(inOrder < quantityPerHour){
//                             freeTime = quantityPerHour - inOrder;
//                             ordersQueue.push(
//                                 {
//                                     hour: hour,
//                                     order_id: dataArray[i].order_id,
//                                     article: dataArray[i].article,
//                                     quantity: inOrder,
//                                 });
//                                 break;
//                         } else{
//                             inOrder = quantityPerHour;
//                             ordersQueue.push(
//                                 {
//                                     hour: hour,
//                                     order_id: dataArray[i].order_id,
//                                     article: dataArray[i].article,
//                                     quantity: inOrder,
//                                 });
//                         } 
                

//             }   
//     }
//     console.log(ordersQueue);
// }
// getOrdersQueue(plan_shift);



// first try
 
// let plan_shift = [
//  {
//      id: 1,
//      order_id: 123456,
//      article: 'Toyota',
//      qnt: 209
// },
// {
//      id: 2,
//      order_id: 654321,
//      article: 'VAZ',
//      qnt: 200
// },
// {
//     id: 3,
//     order_id: 525252,
//     article: 'VAZ2',
//     qnt: 220
// }
// ]
 
// let quantityPerHour = 50;
// function getHours(dataArray){
//     let totalQuantity = 0;
//     for(let i = 0; i<dataArray.length; i++){
//         totalQuantity += dataArray[i].qnt;
//     }
//     return totalQuantity / quantityPerHour;
// }
 
// console.log('Total hours ' + getHours(plan_shift));
 
// function getOrdersQueue(dataArray){
//         totalMinutes = getHours(dataArray) * 60;
//         let ordersQueue = [];
//         let hour = 0;
//         for(let i = 0; i<dataArray.length; i++){
//             for(let quantity = 0; quantity < dataArray[i].qnt; quantity += quantityPerHour){
//                 readyQuantity = 50;
 
//                 if(quantity % 50 == 0) {readyQuantity = dataArray[i].qnt - quantity};
                
//                 if(readyQuantity > 50) readyQuantity = 50;
 
//                 ++hour;
//                 ordersQueue.push(
//                     {
//                         hour: hour,
//                         order_id: dataArray[i].order_id,
//                         article: dataArray[i].article,
//                         quantity: readyQuantity,
//                     }
//                 );
//             }
 
        
//     }
//     console.log(ordersQueue);
// }
// getOrdersQueue(plan_shift);